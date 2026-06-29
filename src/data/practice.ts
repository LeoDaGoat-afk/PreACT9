// PreACT 9 practice questions, split into the same four sections as the
// flashcards: English, Reading, Math, Science.
//
// CONTENT IS ADDED LATER. The arrays below are intentionally empty for now —
// the page renders an "coming soon" state per section until questions are
// filled in. Add items to PRACTICE_BY_SUBJECT[subject] following the
// Question shape and the UI picks them up with no further changes.

import type { Subject } from './vocab';
export type { Subject };

export interface Choice {
  /** Stable id within the question, e.g. 'A', 'B', 'C', 'D'. */
  id: string;
  text: string;
}

export interface Question {
  /** Unique id across the whole bank, e.g. 'eng-001'. */
  id: string;
  subject: Subject;
  /** Optional shared passage/stimulus shown above the prompt (Reading/Science). */
  passage?: string;
  /** The question stem. */
  prompt: string;
  choices: Choice[];
  /** id of the correct choice. */
  answer: string;
  /** Optional one-line rationale shown after answering. */
  explanation?: string;
}

// One bucket per section. Two sample questions per subject show the shape;
// replace or extend them with your real content.
export const PRACTICE_BY_SUBJECT: Record<Subject, Question[]> = {
  // ---------------------------------------------------------------------------
  // ENGLISH — revise and edit a text (grammar, usage, conciseness, cohesion)
  // ---------------------------------------------------------------------------
  English: [
    {
      id: 'eng-001',
      subject: 'English',
      prompt:
        'The committee reviewed the proposal, and they decided to approve it. Which choice best fixes the pronoun agreement?',
      choices: [
        { id: 'A', text: 'NO CHANGE' },
        { id: 'B', text: 'the committee reviewed the proposal, and it decided to approve it.' },
        { id: 'C', text: 'the committee reviewed the proposal, and them decided to approve it.' },
        { id: 'D', text: 'the committee reviewed the proposal, they then decided to approve it.' },
      ],
      answer: 'B',
      explanation:
        '"Committee" is a singular collective noun, so the pronoun should be "it," not "they."',
    },
    {
      id: 'eng-002',
      subject: 'English',
      prompt:
        'Which choice most concisely revises the underlined phrase? "Due to the fact that it was raining, the game was postponed."',
      choices: [
        { id: 'A', text: 'Due to the fact that' },
        { id: 'B', text: 'On account of the fact that' },
        { id: 'C', text: 'Because' },
        { id: 'D', text: 'In light of the reality that' },
      ],
      answer: 'C',
      explanation:
        '"Because" conveys the same cause in one word; the others are wordy redundancies.',
    },
  ],

  // ---------------------------------------------------------------------------
  // READING — read closely and reason about a text (uses a shared passage)
  // ---------------------------------------------------------------------------
  Reading: [
    {
      id: 'read-001',
      subject: 'Reading',
      passage:
        'When Maya finally reached the summit, the wind tore at her jacket and her legs ached, but she barely noticed. For two years she had trained before dawn, skipping outings with friends to run one more mile. Now the valley spread out below her like a map, and every cold morning suddenly felt worth it.',
      prompt: 'The passage suggests that Maya feels primarily:',
      choices: [
        { id: 'A', text: 'regret about the friendships she gave up' },
        { id: 'B', text: 'a sense of reward that justifies her sacrifices' },
        { id: 'C', text: 'fear of the dangerous descent ahead' },
        { id: 'D', text: 'indifference toward reaching the summit' },
      ],
      answer: 'B',
      explanation:
        '"Every cold morning suddenly felt worth it" shows the effort now feels rewarded.',
    },
    {
      id: 'read-002',
      subject: 'Reading',
      passage:
        'When Maya finally reached the summit, the wind tore at her jacket and her legs ached, but she barely noticed. For two years she had trained before dawn, skipping outings with friends to run one more mile. Now the valley spread out below her like a map, and every cold morning suddenly felt worth it.',
      prompt: 'As used in the passage, "she barely noticed" most nearly means that Maya:',
      choices: [
        { id: 'A', text: 'could not see clearly in the wind' },
        { id: 'B', text: 'was too tired to think' },
        { id: 'C', text: 'paid little attention to her discomfort' },
        { id: 'D', text: 'forgot why she had climbed' },
      ],
      answer: 'C',
      explanation:
        'The wind and aching legs are discomforts she pays little attention to in the moment.',
    },
  ],

  // ---------------------------------------------------------------------------
  // MATH — algebra and functions heavy, some geometry
  // ---------------------------------------------------------------------------
  Math: [
    {
      id: 'math-001',
      subject: 'Math',
      prompt: 'If 3x - 7 = 11, what is the value of x?',
      choices: [
        { id: 'A', text: '4' },
        { id: 'B', text: '6' },
        { id: 'C', text: '8' },
        { id: 'D', text: '18' },
      ],
      answer: 'B',
      explanation: '3x = 18, so x = 6.',
    },
    {
      id: 'math-002',
      subject: 'Math',
      prompt:
        'A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?',
      choices: [
        { id: 'A', text: '10' },
        { id: 'B', text: '12' },
        { id: 'C', text: '14' },
        { id: 'D', text: '48' },
      ],
      answer: 'A',
      explanation: 'By the Pythagorean theorem, sqrt(6^2 + 8^2) = sqrt(100) = 10.',
    },
  ],

  // ---------------------------------------------------------------------------
  // SCIENCE — interpret data, evaluate experiments (often uses a stimulus)
  // ---------------------------------------------------------------------------
  Science: [
    {
      id: 'sci-001',
      subject: 'Science',
      passage:
        'A student measured how far a toy car rolled after being released from different ramp heights:\n  Height 10 cm -> distance 0.5 m\n  Height 20 cm -> distance 1.1 m\n  Height 30 cm -> distance 1.6 m\n  Height 40 cm -> distance 2.2 m',
      prompt: 'Based on the data, what is the relationship between ramp height and rolling distance?',
      choices: [
        { id: 'A', text: 'As height increases, distance decreases.' },
        { id: 'B', text: 'As height increases, distance increases.' },
        { id: 'C', text: 'Distance stays the same regardless of height.' },
        { id: 'D', text: 'There is no clear relationship.' },
      ],
      answer: 'B',
      explanation: 'Each increase in ramp height is paired with a longer rolling distance.',
    },
    {
      id: 'sci-002',
      subject: 'Science',
      passage:
        'A student measured how far a toy car rolled after being released from different ramp heights:\n  Height 10 cm -> distance 0.5 m\n  Height 20 cm -> distance 1.1 m\n  Height 30 cm -> distance 1.6 m\n  Height 40 cm -> distance 2.2 m',
      prompt:
        'If the student released the car from a height of 25 cm, the rolling distance would most likely be:',
      choices: [
        { id: 'A', text: 'less than 0.5 m' },
        { id: 'B', text: 'between 1.1 m and 1.6 m' },
        { id: 'C', text: 'exactly 2.2 m' },
        { id: 'D', text: 'more than 3.0 m' },
      ],
      answer: 'B',
      explanation:
        '25 cm falls between 20 cm (1.1 m) and 30 cm (1.6 m), so the distance should fall between those values.',
    },
  ],
};

export const ALL_QUESTIONS: Question[] = (
  Object.values(PRACTICE_BY_SUBJECT) as Question[][]
).flat();
