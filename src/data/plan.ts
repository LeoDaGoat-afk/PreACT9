// 20-day study plan.
//
// The plan slices the vocabulary deck into daily groups (10 words per subject
// per day) and, for each word, builds two auto-generated quiz items:
//   1. definition-match  — pick the correct meaning of the word
//   2. application        — pick the word that best fits a blanked example
//
// Everything here is derived deterministically from CARDS in vocab.ts, so when
// you add words to a subject, the plan and its quizzes extend automatically.
// Distractors are drawn from other words in the SAME subject so the choices are
// plausible (and, for the application item, from the same kind where possible).

import { CARDS, SUBJECTS, type Card, type Subject } from './vocab';

export const WORDS_PER_DAY = 10;
export const TOTAL_DAYS = 20;

// Deterministic shuffle helpers ---------------------------------------------
// We avoid Math.random so the plan is stable across builds and devices (a given
// day always shows the same questions in the same order).
function seededPick<T>(pool: T[], count: number, seed: number): T[] {
  // Simple linear-congruential walk over the pool to pick `count` distinct items.
  const out: T[] = [];
  const used = new Set<number>();
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  while (out.length < count && used.size < pool.length) {
    s = (s * 16807) % 2147483647;
    const idx = s % pool.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(pool[idx]);
    }
  }
  return out;
}

export interface QuizChoice {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface QuizItem {
  kind: 'definition' | 'application';
  word: string;
  prompt: string;
  choices: QuizChoice[];
  answer: string; // choice id
}

export interface DaySubject {
  subject: Subject;
  words: Card[]; // the words to study this day (may be empty on later days)
  quiz: QuizItem[];
}

export interface Day {
  day: number; // 1-based
  subjects: DaySubject[];
}

// Group each subject's cards into chunks of WORDS_PER_DAY, in deck order.
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const LETTERS = ['A', 'B', 'C', 'D'];

// Build a definition-match item: show the word, choose its meaning.
function makeDefinitionItem(
  card: Card,
  sameSubjectPool: Card[],
  seed: number
): QuizItem {
  const distractors = seededPick(
    sameSubjectPool.filter((c) => c.word !== card.word),
    3,
    seed
  ).map((c) => c.definition);
  const options = [card.definition, ...distractors];
  // rotate correct answer position deterministically by seed
  const rot = seed % 4;
  const rotated = options.slice(rot).concat(options.slice(0, rot));
  const choices = rotated.map((text, i) => ({ id: LETTERS[i], text }));
  const answerId = LETTERS[rotated.indexOf(card.definition)];
  return {
    kind: 'definition',
    word: card.word,
    prompt: `What does "${card.word}" mean?`,
    choices,
    answer: answerId,
  };
}

// Build an application item: blank the word out of its example, choose the word.
function makeApplicationItem(
  card: Card,
  sameSubjectPool: Card[],
  seed: number
): QuizItem {
  // Blank the target word in the example (case-insensitive, whole word).
  const re = new RegExp(`\\b${escapeRegExp(card.word)}\\b`, 'i');
  const blanked = card.example.match(re)
    ? card.example.replace(re, '_____')
    : `_____ — ${card.definition}`; // fallback if the word isn't literally in the example
  // Distractors: prefer same subject AND same kind, fall back to same subject.
  const sameKind = sameSubjectPool.filter(
    (c) => c.word !== card.word && c.kind === card.kind
  );
  const pool = sameKind.length >= 3 ? sameKind : sameSubjectPool.filter((c) => c.word !== card.word);
  const distractors = seededPick(pool, 3, seed + 7).map((c) => c.word);
  const options = [card.word, ...distractors];
  const rot = (seed + 2) % 4;
  const rotated = options.slice(rot).concat(options.slice(0, rot));
  const choices = rotated.map((text, i) => ({ id: LETTERS[i], text }));
  const answerId = LETTERS[rotated.indexOf(card.word)];
  return {
    kind: 'application',
    word: card.word,
    prompt: `Which word best fills the blank?\n\n"${blanked}"`,
    choices,
    answer: answerId,
  };
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Assemble the whole plan.
export function buildPlan(): Day[] {
  const bySubject: Record<Subject, Card[]> = {
    English: [],
    Reading: [],
    Math: [],
    Science: [],
  };
  for (const c of CARDS) bySubject[c.subject].push(c);

  const chunksBySubject: Record<Subject, Card[][]> = {
    English: chunk(bySubject.English, WORDS_PER_DAY),
    Reading: chunk(bySubject.Reading, WORDS_PER_DAY),
    Math: chunk(bySubject.Math, WORDS_PER_DAY),
    Science: chunk(bySubject.Science, WORDS_PER_DAY),
  };

  const days: Day[] = [];
  for (let d = 0; d < TOTAL_DAYS; d++) {
    const subjects: DaySubject[] = SUBJECTS.map((subject) => {
      const words = chunksBySubject[subject][d] ?? [];
      const pool = bySubject[subject];
      const quiz: QuizItem[] = [];
      words.forEach((card, i) => {
        const seed = (d + 1) * 1000 + i * 13 + subject.length;
        quiz.push(makeDefinitionItem(card, pool, seed));
        quiz.push(makeApplicationItem(card, pool, seed));
      });
      return { subject, words, quiz };
    });
    days.push({ day: d + 1, subjects });
  }
  return days;
}

// How many days each subject actually has words for (for the overview UI).
export function subjectDayCounts(): Record<Subject, number> {
  const counts = {} as Record<Subject, number>;
  for (const s of SUBJECTS) {
    counts[s] = Math.ceil(
      CARDS.filter((c) => c.subject === s).length / WORDS_PER_DAY
    );
  }
  return counts;
}
