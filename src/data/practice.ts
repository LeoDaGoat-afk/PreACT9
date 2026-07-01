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
    // -----------------------------------------------------------------------
    // PASSAGE 1 — "Life on the Ice" (personal essay, figure skating)
    // eng-001 through eng-011
    // -----------------------------------------------------------------------
    {
      id: 'eng-001',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'In the passage, the underlined phrase "effortless, flowing" appears in the sentence: "Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements." Which choice makes the sentence most grammatically acceptable?',
      choices: [
        { id: 'A', text: 'NO CHANGE' },
        { id: 'B', text: 'effortlessly, flowing' },
        { id: 'C', text: 'effortless, and flow' },
        { id: 'D', text: 'effortlessly, flowed' },
      ],
      answer: 'A',
      explanation:
        'Both words function as adjectives modifying "movements," so the noun-modifier form is correct. NO CHANGE is grammatically acceptable.',
    },
    {
      id: 'eng-002',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'The writer is considering revising the underlined sentence "My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling." to read: "My mother once said she found my skating uninteresting." Should the writer make this revision?',
      choices: [
        { id: 'A', text: 'Yes, because the revised sentence is shorter and more direct.' },
        { id: 'B', text: 'Yes, because the original sentence contains an inappropriate comparison.' },
        { id: 'C', text: 'No, because the original sentence\'s vivid analogy conveys the critique more memorably than the revision.' },
        { id: 'D', text: 'No, because the revision changes the meaning of the passage entirely.' },
      ],
      answer: 'C',
      explanation:
        'The original comparison to "watching someone solve a math problem" is colorful and specific, bringing the critique to life. The flat revision loses that vividness without gaining anything meaningful.',
    },
    {
      id: 'eng-003',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'Which transition word or phrase is most logical in the underlined position? "My programs were correct, [BLANK] they were also joyless."',
      choices: [
        { id: 'A', text: 'NO CHANGE (and)' },
        { id: 'B', text: 'because' },
        { id: 'C', text: 'for example,' },
        { id: 'D', text: 'yet' },
      ],
      answer: 'D',
      explanation:
        '"Yet" signals the contrast between being technically correct and being joyless. The original "and" is too neutral; "yet" captures the tension the writer intends.',
    },
    {
      id: 'eng-004',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'Which choice is least redundant in context? The writer wants to describe the training journal without repeating ideas already stated in the passage. The current phrase reads: "a beat-up, worn, tattered spiral notebook."',
      choices: [
        { id: 'A', text: 'NO CHANGE' },
        { id: 'B', text: 'a beat-up spiral notebook' },
        { id: 'C', text: 'a worn and tattered notebook that had been used a lot' },
        { id: 'D', text: 'a beat-up, worn notebook that showed signs of heavy use' },
      ],
      answer: 'B',
      explanation:
        '"Beat-up," "worn," and "tattered" all convey the same idea. Keeping only "beat-up spiral notebook" eliminates the redundancy while retaining a concrete image.',
    },
    {
      id: 'eng-005',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'The writer wants to add the following sentence: "Her voice carried the quiet authority of someone who had memorized every mistake a skater could make." It would most logically be placed at which of the highlighted points?',
      choices: [
        { id: 'A', text: 'Point [A]' },
        { id: 'B', text: 'Point [B]' },
        { id: 'C', text: 'Point [C]' },
        { id: 'D', text: 'Point [D]' },
      ],
      answer: 'B',
      explanation:
        'Point [B] appears directly after the introduction of Ms. Delaney and her international experience, making it the natural place to add a sentence elaborating on her authority.',
    },
    {
      id: 'eng-006',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'Which choice best maintains the personal, reflective tone of the essay in the underlined position? "I made a decision: I would skate for [BLANK], not for the judges."',
      choices: [
        { id: 'A', text: 'myself' },
        { id: 'B', text: 'one\'s own benefit' },
        { id: 'C', text: 'the purposes of personal gratification' },
        { id: 'D', text: 'my own internal reasons' },
      ],
      answer: 'A',
      explanation:
        '"Myself" is direct, personal, and conversational—consistent with the first-person reflective voice used throughout the essay. The other options are stiff or overly formal.',
    },
    {
      id: 'eng-007',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'The writer is considering deleting the underlined sentence: "My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself." Should the sentence be kept or deleted?',
      choices: [
        { id: 'A', text: 'Kept, because it provides context that makes the coach\'s advice about writing more credible.' },
        { id: 'B', text: 'Kept, because it introduces a new theme about international competition that is developed later.' },
        { id: 'C', text: 'Deleted, because the coach\'s credentials are irrelevant to the paragraph\'s focus on the journal.' },
        { id: 'D', text: 'Deleted, because the essay has already established who Ms. Delaney is.' },
      ],
      answer: 'A',
      explanation:
        'The detail about Ms. Delaney\'s international experience establishes her authority, lending credibility to her advice about the journal\'s importance. Removing it would weaken that logic.',
    },
    {
      id: 'eng-008',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'Which choice most effectively introduces the main subject of the first paragraph?',
      choices: [
        { id: 'A', text: 'NO CHANGE ("Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements.")' },
        { id: 'B', text: 'Figure skating is an Olympic sport with a long history.' },
        { id: 'C', text: 'I have always loved sports, especially those that take place indoors.' },
        { id: 'D', text: 'My older sister was always good at convincing me to try new things.' },
      ],
      answer: 'A',
      explanation:
        'The essay contrasts skating\'s elegant appearance with the hidden labor behind it. The current opening sentence sets up that contrast immediately. The other options are too vague or off-topic.',
    },
    {
      id: 'eng-009',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'In the underlined verb phrase, which choice makes the sentence most grammatically acceptable? "My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I [BLANK] the scorecards entirely."',
      choices: [
        { id: 'A', text: 'forget' },
        { id: 'B', text: 'forgotten' },
        { id: 'C', text: 'forgot' },
        { id: 'D', text: 'had forgotten' },
      ],
      answer: 'C',
      explanation:
        'The surrounding verbs—"dropped" and "slowed"—are simple past tense. "Forgot" maintains parallel past tense in this series of events.',
    },
    {
      id: 'eng-010',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'The writer wants to use language that is playful and related to the subject of skating. The current sentence reads: "I struggled with this for years." Which choice best accomplishes that goal?',
      choices: [
        { id: 'A', text: 'I struggled with this for years.' },
        { id: 'B', text: 'This proved to be a persistent challenge.' },
        { id: 'C', text: 'For years, I kept hitting the boards on the performance side of things.' },
        { id: 'D', text: 'My development in this area proceeded slowly over an extended period.' },
      ],
      answer: 'C',
      explanation:
        '"Hitting the boards" is a skating-world expression for crashing into the rink barrier, used here playfully and metaphorically. It keeps the tone lively and ties the language to the essay\'s subject.',
    },
    {
      id: 'eng-011',
      subject: 'English',
      passage:
        'Life on the Ice\n\n' +
        '   [A] Figure skating looks elegant from the outside—all clean edges and effortless, flowing movements. What spectators rarely see are the six-o\'clock-in-the-morning practices, the ice-cold rink air that makes your lungs ache, and the relentless repetition of the same jump until muscle memory overrides conscious thought. I began skating at age five, when my older sister dragged me to a Saturday morning lesson. Within a year, I was hooked.\n\n' +
        '   [B] Every serious skater keeps a training journal. Mine is a beat-up spiral notebook filled with diagrams of edge patterns, notes on blade angles, and the occasional frustrated scribble when a combination spin refused to cooperate. My coach, Ms. Delaney, who had competed internationally for more than a decade, always told me that the journal was as important as the ice time itself. "Writing it down," she said, "forces you to think, not just feel."\n\n' +
        '   The technical side of skating is only half the battle. The other half is performance—the ability to translate cold, mechanical precision into something that moves an audience. I struggled with this for years. On the ice, I was accurate but stiff; my programs were correct, and they were also joyless. My mother once compared my skating to watching someone solve a math problem out loud—impressive, perhaps, but not exactly thrilling.\n\n' +
        '   [C] Everything changed during a regional competition in my sophomore year. I had fallen twice during practice that morning and my confidence was shattered. When I stepped onto the ice for my program, I made a decision: I would skate for myself, not for the judges. Something shifted. My shoulders dropped, my breathing slowed, and for four minutes and twelve seconds, I forgot the scorecards entirely. I finished third—not first—but the performance felt like a victory.\n\n' +
        '   Since that day, I have thought often about the relationship between discipline and freedom. [D] Every hour spent drilling technique is an hour invested in the ability to eventually let go of technique. The paradox of skating—and, I suspect, of most skilled pursuits—is that mastery does not eliminate the need for practice; it transforms practice from effort into instinct. And only when something becomes instinct can it become art.',
      prompt:
        'Suppose the writer\'s primary purpose had been to provide a technical guide to figure skating for beginners. Would this essay accomplish that purpose?',
      choices: [
        { id: 'A', text: 'Yes, because the essay describes what spectators see at competitions.' },
        { id: 'B', text: 'Yes, because the essay mentions journals, blade angles, and edge patterns.' },
        { id: 'C', text: 'No, because the essay focuses on the emotional journey of one skater rather than on teaching skating technique.' },
        { id: 'D', text: 'No, because the essay fails to mention any specific jumps or spins.' },
      ],
      answer: 'C',
      explanation:
        'The essay is a personal reflection on discipline, performance, and self-discovery—not an instructional guide. While skating terms appear, they serve the narrative rather than teach technique.',
    },

    // -----------------------------------------------------------------------
    // PASSAGE 2 — "The Impossible Bridge" (informational, Golden Gate)
    // eng-012 through eng-022
    // -----------------------------------------------------------------------
    {
      id: 'eng-012',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which choice makes the sentence most grammatically acceptable? "Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension [BLANK]."',
      choices: [
        { id: 'A', text: 'span' },
        { id: 'B', text: 'spans' },
        { id: 'C', text: 'spanned' },
        { id: 'D', text: 'spanning' },
      ],
      answer: 'A',
      explanation:
        '"Span" is the correct singular noun here, functioning as the direct object of "support." The other forms are either plurals or verb forms that do not fit the sentence structure.',
    },
    {
      id: 'eng-013',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which transition word or phrase best begins the sentence "Yet chief engineer Joseph Strauss pressed forward" in the context of the paragraph? The writer wants to replace "Yet" with the most logical alternative.',
      choices: [
        { id: 'A', text: 'In addition,' },
        { id: 'B', text: 'For example,' },
        { id: 'C', text: 'As a result,' },
        { id: 'D', text: 'Nevertheless,' },
      ],
      answer: 'D',
      explanation:
        '"Nevertheless" signals that Strauss pushed forward despite the obstacles just described. It conveys the same contrast as "Yet" and is the most logical alternative in context.',
    },
    {
      id: 'eng-014',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which choice is clearest and most precise in context? The writer wants to describe how the tower design relates to wind. The sentence currently reads: "The towers had to be designed to flex slightly in high winds rather than [BLANK] them rigidly."',
      choices: [
        { id: 'A', text: 'deal with' },
        { id: 'B', text: 'resist' },
        { id: 'C', text: 'handle' },
        { id: 'D', text: 'address' },
      ],
      answer: 'B',
      explanation:
        '"Resist" is the most precise word here: it describes the exact engineering concept of a structure opposing a force, creating a clear contrast with "flex."',
    },
    {
      id: 'eng-015',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'The writer wants to add the following sentence: "The nickname captured, in dark humor, the terrifying daily reality of their work." It would most logically be placed at which of the highlighted points?',
      choices: [
        { id: 'A', text: 'Point [A]' },
        { id: 'B', text: 'Point [B]' },
        { id: 'C', text: 'Point [C]' },
        { id: 'D', text: 'Point [D]' },
      ],
      answer: 'B',
      explanation:
        'Point [B] falls directly after the sentence about the "Halfway to Hell Club," which is the nickname being discussed. Inserting the new sentence there explains the nickname\'s meaning in context.',
    },
    {
      id: 'eng-016',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which choice is least redundant in context? The writer describes the cable specifications. The current phrase reads: "each nearly three feet in diameter in terms of width."',
      choices: [
        { id: 'A', text: 'NO CHANGE' },
        { id: 'B', text: 'each nearly three feet wide in diameter' },
        { id: 'C', text: 'each measuring approximately three feet of diameter width' },
        { id: 'D', text: 'each nearly three feet in diameter' },
      ],
      answer: 'D',
      explanation:
        '"Diameter" already communicates a measurement of width; "in terms of width" repeats that idea. Choice D removes the redundancy while preserving the measurement.',
    },
    {
      id: 'eng-017',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which choice makes the underlined portion of the sentence most grammatically acceptable? "The strait that separates San Francisco Bay from the Pacific Ocean [BLANK] subject to powerful tidal currents, frequent thick fog, and wind gusts."',
      choices: [
        { id: 'A', text: 'are' },
        { id: 'B', text: 'were' },
        { id: 'C', text: 'is' },
        { id: 'D', text: 'being' },
      ],
      answer: 'C',
      explanation:
        'The subject is "The strait" (singular), so the verb must be "is." The relative clause "that separates…" does not change the subject.',
    },
    {
      id: 'eng-018',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'If the writer were to add the word "Sisyphean" before "cycle of upkeep" in the final paragraph, the sentence would primarily gain:',
      choices: [
        { id: 'A', text: 'a technical engineering term that clarifies the type of maintenance required.' },
        { id: 'B', text: 'a reference to Greek mythology that emphasizes the never-ending nature of the work.' },
        { id: 'C', text: 'a humorous aside that lightens the tone of the final paragraph.' },
        { id: 'D', text: 'a contrast with the bridge\'s successful construction.' },
      ],
      answer: 'B',
      explanation:
        '"Sisyphean" alludes to the myth of Sisyphus, condemned to roll a boulder up a hill forever. Using it to describe the painting cycle underscores the repetitive, unending nature of the maintenance work.',
    },
    {
      id: 'eng-019',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'The writer is considering deleting the underlined sentence: "When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world." Should the sentence be kept or deleted?',
      choices: [
        { id: 'A', text: 'Kept, because it provides a concrete payoff that shows the engineering achievement was record-breaking.' },
        { id: 'B', text: 'Kept, because it introduces information about tourism that is developed later in the passage.' },
        { id: 'C', text: 'Deleted, because the passage already mentions the year construction began, making this date redundant.' },
        { id: 'D', text: 'Deleted, because describing a bridge as "the longest" is an unsupported claim.' },
      ],
      answer: 'A',
      explanation:
        'The third paragraph focuses on engineering innovations; the sentence closes the paragraph by confirming the record-setting result of those innovations. Deleting it would remove a meaningful conclusion.',
    },
    {
      id: 'eng-020',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which choice most effectively concludes the passage?',
      choices: [
        { id: 'A', text: 'The Golden Gate Bridge remains one of the most photographed structures in the world.' },
        { id: 'B', text: 'This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.' },
        { id: 'C', text: 'Future bridge projects may use different materials that do not require such extensive maintenance.' },
        { id: 'D', text: 'International Orange was later used on other structures around the world.' },
      ],
      answer: 'B',
      explanation:
        'The current final sentence ties together the themes of engineering achievement and continuous labor, providing a reflective close that honors both the design and the workers. It is the most effective conclusion of the four options.',
    },
    {
      id: 'eng-021',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'Which choice makes the underlined portion most grammatically acceptable? "Maintenance crews applies fresh paint continuous; by the time they finish one end of the bridge, it is time to start again at the other."',
      choices: [
        { id: 'A', text: 'crews applies fresh paint continuous' },
        { id: 'B', text: 'crews apply fresh paint continuously' },
        { id: 'C', text: 'crews applying fresh paint continuously' },
        { id: 'D', text: 'crews apply fresh paint continuous' },
      ],
      answer: 'B',
      explanation:
        '"Crews" is a plural subject, requiring "apply" (not "applies"). "Continuously" is an adverb correctly modifying the verb. Choice B corrects both errors.',
    },
    {
      id: 'eng-022',
      subject: 'English',
      passage:
        'The Impossible Bridge\n\n' +
        '   When construction began on the Golden Gate Bridge in January 1933, many engineers believed the project was [A] impossible—or at the very least, impractical. The strait that separates San Francisco Bay from the Pacific Ocean is subject to powerful tidal currents, frequent thick fog, and wind gusts that can exceed sixty miles per hour. Earlier studies had concluded that the seafloor conditions were too unpredictable to support a long suspension span. Yet chief engineer Joseph Strauss pressed forward, adjusting his original tower design to accommodate the geological realities of the site.\n\n' +
        '   The construction workforce faced extraordinary hazards. Workers labored at heights of more than 700 feet above water, sometimes in near-zero visibility. [B] To reduce fatalities, Strauss introduced a safety net beneath the bridge deck—the first such net used on a major construction project in the United States. The net saved the lives of nineteen men, who later called themselves the "Halfway to Hell Club." Despite these precautions, eleven workers died during the four years of construction.\n\n' +
        '   The engineering innovations required for the Golden Gate were substantial. The towers had to be designed to flex slightly in high winds rather than resist them rigidly, a counterintuitive principle that stronger does not always mean safer. [C] The main cables, each nearly three feet in diameter, are made of 27,572 individual steel wires spun on-site over a period of several months. When the bridge opened in May 1937, it was the longest and tallest suspension bridge in the world.\n\n' +
        '   The bridge\'s distinctive color—officially called "International Orange"—was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties suited to the salty coastal air. [D] Maintenance crews apply fresh paint continuously; by the time they finish one end of the bridge, it is time to start again at the other. This cycle of upkeep has kept the structure in service for nearly a century, a testament to both its original design and the ongoing labor required to preserve it.',
      prompt:
        'If the writer were to delete the underlined text "not for aesthetic reasons alone but" from the sentence "The bridge\'s distinctive color…was chosen not for aesthetic reasons alone but because the paint contains anti-corrosion properties," the essay would primarily lose a detail that:',
      choices: [
        { id: 'A', text: 'explains the technical name "International Orange."' },
        { id: 'B', text: 'clarifies that the color choice was partly practical rather than purely decorative.' },
        { id: 'C', text: 'indicates when the color was applied for the first time.' },
        { id: 'D', text: 'contrasts the bridge\'s design with other suspension bridges.' },
      ],
      answer: 'B',
      explanation:
        'The phrase "not for aesthetic reasons alone" signals that there was a practical motive behind the color choice. Deleting it would leave only the anti-corrosion explanation, removing the nuance that appearance also played a role.',
    },

    // -----------------------------------------------------------------------
    // PASSAGE 3 — "The Mapmaker's Daughter" (profile of a cartographer/artist)
    // eng-023 through eng-027
    // -----------------------------------------------------------------------
    {
      id: 'eng-023',
      subject: 'English',
      passage:
        'The Mapmaker\'s Daughter\n\n' +
        '   Nadia Osei\'s studio looks less like an artist\'s workspace and more like a nineteenth-century explorer\'s study. [A] Rolled scrolls of drafting paper lean against every wall, hand-drawn coastlines and elevation contours visible through translucent sheets. Compasses and dividers are arranged by size on a magnetic strip above her drafting table. On the ceiling, a star chart she painted by hand charts the positions of the constellations as they appear from her hometown in Ghana.\n\n' +
        '   Osei is a cartographic artist—someone who creates maps not for navigation but for reflection. [B] Her large-scale works combine geographic accuracy with personal symbolism: a map of her grandmother\'s village overlaid with proverbs written in Twi; a rendering of the Atlantic trade routes drawn in the colors of both the African and American continents. "A map tells you where things are," she has said. "My maps also try to tell you what things mean."\n\n' +
        '   [C] Trained first as a geographer and then as a printmaker, Osei spent three years working at a cartography firm before deciding to pursue art full-time. The transition was not without risk; cartographic art occupies a niche that is poorly understood by both the art world and the mapping community. [D] Yet her work has found an enthusiastic audience, displayed in galleries in Accra, London, and Chicago. Her most celebrated piece, a hand-engraved map of the Sahara\'s shifting sand dunes spanning twenty feet of linen, was acquired last year by a major natural history museum.',
      prompt:
        'Which choice makes the underlined phrase most grammatically acceptable? "a star chart she painted by hand [BLANK] the positions of the constellations."',
      choices: [
        { id: 'A', text: 'charts' },
        { id: 'B', text: 'chart' },
        { id: 'C', text: 'to chart' },
        { id: 'D', text: 'charting' },
      ],
      answer: 'A',
      explanation:
        '"A star chart" is the subject and needs the singular present-tense verb "charts." The relative clause "she painted by hand" modifies "chart" but does not change the subject-verb relationship.',
    },
    {
      id: 'eng-024',
      subject: 'English',
      passage:
        'The Mapmaker\'s Daughter\n\n' +
        '   Nadia Osei\'s studio looks less like an artist\'s workspace and more like a nineteenth-century explorer\'s study. [A] Rolled scrolls of drafting paper lean against every wall, hand-drawn coastlines and elevation contours visible through translucent sheets. Compasses and dividers are arranged by size on a magnetic strip above her drafting table. On the ceiling, a star chart she painted by hand charts the positions of the constellations as they appear from her hometown in Ghana.\n\n' +
        '   Osei is a cartographic artist—someone who creates maps not for navigation but for reflection. [B] Her large-scale works combine geographic accuracy with personal symbolism: a map of her grandmother\'s village overlaid with proverbs written in Twi; a rendering of the Atlantic trade routes drawn in the colors of both the African and American continents. "A map tells you where things are," she has said. "My maps also try to tell you what things mean."\n\n' +
        '   [C] Trained first as a geographer and then as a printmaker, Osei spent three years working at a cartography firm before deciding to pursue art full-time. The transition was not without risk; cartographic art occupies a niche that is poorly understood by both the art world and the mapping community. [D] Yet her work has found an enthusiastic audience, displayed in galleries in Accra, London, and Chicago. Her most celebrated piece, a hand-engraved map of the Sahara\'s shifting sand dunes spanning twenty feet of linen, was acquired last year by a major natural history museum.',
      prompt:
        'The writer wants to add the following sentence: "This dual training gave her an unusual ability to balance scientific precision with expressive freedom." It would most logically be placed at which of the highlighted points?',
      choices: [
        { id: 'A', text: 'Point [A]' },
        { id: 'B', text: 'Point [B]' },
        { id: 'C', text: 'Point [C]' },
        { id: 'D', text: 'Point [D]' },
      ],
      answer: 'C',
      explanation:
        'Point [C] follows the sentence describing Osei\'s dual training as a geographer and a printmaker, making it the logical place to add a sentence explaining what that dual training gave her.',
    },
    {
      id: 'eng-025',
      subject: 'English',
      passage:
        'The Mapmaker\'s Daughter\n\n' +
        '   Nadia Osei\'s studio looks less like an artist\'s workspace and more like a nineteenth-century explorer\'s study. [A] Rolled scrolls of drafting paper lean against every wall, hand-drawn coastlines and elevation contours visible through translucent sheets. Compasses and dividers are arranged by size on a magnetic strip above her drafting table. On the ceiling, a star chart she painted by hand charts the positions of the constellations as they appear from her hometown in Ghana.\n\n' +
        '   Osei is a cartographic artist—someone who creates maps not for navigation but for reflection. [B] Her large-scale works combine geographic accuracy with personal symbolism: a map of her grandmother\'s village overlaid with proverbs written in Twi; a rendering of the Atlantic trade routes drawn in the colors of both the African and American continents. "A map tells you where things are," she has said. "My maps also try to tell you what things mean."\n\n' +
        '   [C] Trained first as a geographer and then as a printmaker, Osei spent three years working at a cartography firm before deciding to pursue art full-time. The transition was not without risk; cartographic art occupies a niche that is poorly understood by both the art world and the mapping community. [D] Yet her work has found an enthusiastic audience, displayed in galleries in Accra, London, and Chicago. Her most celebrated piece, a hand-engraved map of the Sahara\'s shifting sand dunes spanning twenty feet of linen, was acquired last year by a major natural history museum.',
      prompt:
        'Which choice best maintains the formal, profile-essay tone of the passage? The writer wants to replace the underlined phrase in "her work has found an enthusiastic audience" with the most appropriate alternative.',
      choices: [
        { id: 'A', text: 'people really love her stuff' },
        { id: 'B', text: 'her work has found an enthusiastic audience' },
        { id: 'C', text: 'folks are super into what she makes' },
        { id: 'D', text: 'her art is pretty popular' },
      ],
      answer: 'B',
      explanation:
        'The passage uses formal language suited to a professional profile. "Her work has found an enthusiastic audience" maintains that tone, while the other options are colloquial.',
    },
    {
      id: 'eng-026',
      subject: 'English',
      passage:
        'The Mapmaker\'s Daughter\n\n' +
        '   Nadia Osei\'s studio looks less like an artist\'s workspace and more like a nineteenth-century explorer\'s study. [A] Rolled scrolls of drafting paper lean against every wall, hand-drawn coastlines and elevation contours visible through translucent sheets. Compasses and dividers are arranged by size on a magnetic strip above her drafting table. On the ceiling, a star chart she painted by hand charts the positions of the constellations as they appear from her hometown in Ghana.\n\n' +
        '   Osei is a cartographic artist—someone who creates maps not for navigation but for reflection. [B] Her large-scale works combine geographic accuracy with personal symbolism: a map of her grandmother\'s village overlaid with proverbs written in Twi; a rendering of the Atlantic trade routes drawn in the colors of both the African and American continents. "A map tells you where things are," she has said. "My maps also try to tell you what things mean."\n\n' +
        '   [C] Trained first as a geographer and then as a printmaker, Osei spent three years working at a cartography firm before deciding to pursue art full-time. The transition was not without risk; cartographic art occupies a niche that is poorly understood by both the art world and the mapping community. [D] Yet her work has found an enthusiastic audience, displayed in galleries in Accra, London, and Chicago. Her most celebrated piece, a hand-engraved map of the Sahara\'s shifting sand dunes spanning twenty feet of linen, was acquired last year by a major natural history museum.',
      prompt:
        'Which transition word or phrase is most logical in the underlined position? "The transition was not without risk; cartographic art occupies a niche that is poorly understood by both the art world and the mapping community. [BLANK] her work has found an enthusiastic audience."',
      choices: [
        { id: 'A', text: 'Therefore,' },
        { id: 'B', text: 'For instance,' },
        { id: 'C', text: 'In addition,' },
        { id: 'D', text: 'Yet' },
      ],
      answer: 'D',
      explanation:
        'The sentence contrasts the risky transition with the eventual success. "Yet" signals that contrast and is the most logical transition in this position.',
    },
    {
      id: 'eng-027',
      subject: 'English',
      passage:
        'The Mapmaker\'s Daughter\n\n' +
        '   Nadia Osei\'s studio looks less like an artist\'s workspace and more like a nineteenth-century explorer\'s study. [A] Rolled scrolls of drafting paper lean against every wall, hand-drawn coastlines and elevation contours visible through translucent sheets. Compasses and dividers are arranged by size on a magnetic strip above her drafting table. On the ceiling, a star chart she painted by hand charts the positions of the constellations as they appear from her hometown in Ghana.\n\n' +
        '   Osei is a cartographic artist—someone who creates maps not for navigation but for reflection. [B] Her large-scale works combine geographic accuracy with personal symbolism: a map of her grandmother\'s village overlaid with proverbs written in Twi; a rendering of the Atlantic trade routes drawn in the colors of both the African and American continents. "A map tells you where things are," she has said. "My maps also try to tell you what things mean."\n\n' +
        '   [C] Trained first as a geographer and then as a printmaker, Osei spent three years working at a cartography firm before deciding to pursue art full-time. The transition was not without risk; cartographic art occupies a niche that is poorly understood by both the art world and the mapping community. [D] Yet her work has found an enthusiastic audience, displayed in galleries in Accra, London, and Chicago. Her most celebrated piece, a hand-engraved map of the Sahara\'s shifting sand dunes spanning twenty feet of linen, was acquired last year by a major natural history museum.',
      prompt:
        'Suppose the writer\'s primary purpose had been to compare the work of several contemporary cartographic artists. Would this essay accomplish that purpose?',
      choices: [
        { id: 'A', text: 'Yes, because the essay discusses maps from Africa, Europe, and North America.' },
        { id: 'B', text: 'Yes, because the essay mentions both geographers and printmakers.' },
        { id: 'C', text: 'No, because the essay focuses on a single artist rather than comparing multiple cartographic artists.' },
        { id: 'D', text: 'No, because the essay does not describe any maps in detail.' },
      ],
      answer: 'C',
      explanation:
        'The essay is a profile of Nadia Osei alone. It does not introduce or compare the work of other cartographic artists, so it would not accomplish the purpose of comparison.',
    },

    // -----------------------------------------------------------------------
    // PASSAGE 4 — "The Secret Life of Bees" (science essay, bee navigation)
    // eng-028 through eng-038
    // -----------------------------------------------------------------------
    {
      id: 'eng-028',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which choice makes the sentence most grammatically acceptable? "The waggle dance is a figure-eight movement [BLANK] by a forager bee upon returning to the hive."',
      choices: [
        { id: 'A', text: 'performed' },
        { id: 'B', text: 'performing' },
        { id: 'C', text: 'perform' },
        { id: 'D', text: 'to perform' },
      ],
      answer: 'A',
      explanation:
        '"Performed" is a past participle functioning as an adjective modifying "movement." It correctly describes a movement that is carried out (performed) by a forager bee. "Performing" would imply the movement is doing the performing.',
    },
    {
      id: 'eng-029',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which transition word or phrase is most logical in the underlined position? "For decades, researchers assumed that honeybees navigated primarily by sight. [BLANK] studies have upended that assumption."',
      choices: [
        { id: 'A', text: 'Similarly,' },
        { id: 'B', text: 'More recent' },
        { id: 'C', text: 'In conclusion,' },
        { id: 'D', text: 'For example,' },
      ],
      answer: 'B',
      explanation:
        '"More recent" contrasts the new studies with the decades-old assumption, providing a logical temporal transition. The other options either don\'t create the right contrast or don\'t work as transitions.',
    },
    {
      id: 'eng-030',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which choice is least redundant in context? The current phrase reads: "a navigation system of remarkable complexity that is remarkably complex and incorporates multiple sensory inputs."',
      choices: [
        { id: 'A', text: 'NO CHANGE' },
        { id: 'B', text: 'a navigation system of remarkable complexity and remarkableness that incorporates multiple sensory inputs' },
        { id: 'C', text: 'a navigation system that is remarkably complex, very intricate, and uses multiple sensory inputs' },
        { id: 'D', text: 'a navigation system of remarkable complexity that incorporates multiple sensory inputs' },
      ],
      answer: 'D',
      explanation:
        '"Of remarkable complexity" and "that is remarkably complex" say the same thing. Choice D keeps only the first description, eliminating the redundancy.',
    },
    {
      id: 'eng-031',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'The writer wants to add the following sentence: "This built-in compass allows bees to maintain accurate headings even on overcast days when the sun is hidden." It would most logically be placed at which of the highlighted points?',
      choices: [
        { id: 'A', text: 'Point [A]' },
        { id: 'B', text: 'Point [B]' },
        { id: 'C', text: 'Point [C]' },
        { id: 'D', text: 'Point [D]' },
      ],
      answer: 'A',
      explanation:
        'Point [A] follows the mention of polarized light and magnetic fields as sensory inputs used in navigation. A sentence about a "built-in compass" logically extends that list by explaining how magnetic field sensing functions.',
    },
    {
      id: 'eng-032',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which choice is clearest and most precise in context? The writer describes what happens when researchers moved the feeder. The current sentence reads: "The bees came back to the first spot first."',
      choices: [
        { id: 'A', text: 'The bees came back to the first spot first.' },
        { id: 'B', text: 'The bees went somewhere near the old location.' },
        { id: 'C', text: 'The bees returned first to the original location.' },
        { id: 'D', text: 'The bees ended up at the place where the food was before.' },
      ],
      answer: 'C',
      explanation:
        '"Returned first to the original location" is the most precise and scientific phrasing, clearly stating both the action (return) and the destination (original location). The other options are vague or informal.',
    },
    {
      id: 'eng-033',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which choice makes the sentence most grammatically acceptable? "Individual foragers develops mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons."',
      choices: [
        { id: 'A', text: 'Individual foragers develops mental maps' },
        { id: 'B', text: 'Individual forager develop mental maps' },
        { id: 'C', text: 'Individual foragers develop mental maps' },
        { id: 'D', text: 'Individual foragers developed mental map' },
      ],
      answer: 'C',
      explanation:
        '"Individual foragers" is a plural subject. It requires the plural verb "develop" (not "develops"). Choice C corrects the subject-verb agreement error while maintaining present tense consistent with the rest of the passage.',
    },
    {
      id: 'eng-034',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'The writer is considering revising the underlined phrase "not merely an academic curiosity—it is an urgent conservation question" to read "just a research topic." Should the writer make this revision?',
      choices: [
        { id: 'A', text: 'Yes, because the revision is clearer and simpler.' },
        { id: 'B', text: 'Yes, because the original phrase is too dramatic for a science essay.' },
        { id: 'C', text: 'No, because the original phrase effectively conveys the practical stakes of the research in a way the revision does not.' },
        { id: 'D', text: 'No, because "conservation question" is a technical term that should be preserved.' },
      ],
      answer: 'C',
      explanation:
        'The original phrase emphasizes that the research has real-world urgency, not just intellectual interest. "Just a research topic" strips away that urgency, weakening the essay\'s concluding argument.',
    },
    {
      id: 'eng-035',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'The writer wants to use language that is playful and related to the subject of bees. The current sentence reads: "Individual foragers develop mental maps of the terrain surrounding the hive." Which choice best accomplishes that goal?',
      choices: [
        { id: 'A', text: 'Individual foragers develop mental maps of the terrain surrounding the hive.' },
        { id: 'B', text: 'The bees process geographic information in a manner consistent with spatial cognition.' },
        { id: 'C', text: 'Navigation data is stored in the bee\'s memory for future retrieval.' },
        { id: 'D', text: 'Each little bee carries a complete street map of the neighborhood in its tiny head.' },
      ],
      answer: 'D',
      explanation:
        '"Street map of the neighborhood" and "tiny head" are playful, human-scale images applied to bees, bringing levity to a scientific topic while staying thematically on point.',
    },
    {
      id: 'eng-036',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'If the writer were to delete the underlined text "evidence that their memory of place, not just of cue, directed their behavior" from the final sentence of the third paragraph, the essay would primarily lose a detail that:',
      choices: [
        { id: 'A', text: 'introduces a new argument about bee memory that is explored in the fourth paragraph.' },
        { id: 'B', text: 'provides the scientific interpretation that explains why the feeder experiment is significant.' },
        { id: 'C', text: 'contradicts the essay\'s earlier claim about the waggle dance.' },
        { id: 'D', text: 'warns readers that bees can become confused by researchers.' },
      ],
      answer: 'B',
      explanation:
        'The phrase interprets the experimental result, explaining what returning to the original feeder location proves about bee memory. Without it, readers are left with only a fact and no explanation of its significance.',
    },
    {
      id: 'eng-037',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which choice most effectively introduces the main subject of the third paragraph?',
      choices: [
        { id: 'A', text: 'Equally surprising is the discovery that bees possess a long-term spatial memory.' },
        { id: 'B', text: 'Honeybees are not the only insects to use the sun as a navigational aid.' },
        { id: 'C', text: 'The third major finding in bee research concerns the length of their foraging trips.' },
        { id: 'D', text: 'Scientists have known for many years that bees are intelligent insects.' },
      ],
      answer: 'A',
      explanation:
        'The third paragraph is about bee spatial memory. The current opening sentence names that topic precisely and connects it to the previous paragraph\'s sense of scientific surprise. It is the most effective introduction of the four choices.',
    },
    {
      id: 'eng-038',
      subject: 'English',
      passage:
        'The Secret Life of Bees\n\n' +
        '   For decades, researchers assumed that honeybees navigated primarily by sight, using the position of the sun and familiar landmarks to travel between the hive and foraging sites. [A] More recent studies have upended that assumption, revealing a navigation system of remarkable complexity that incorporates multiple sensory inputs: polarized light, magnetic fields, odor plumes, and—most famously—the waggle dance.\n\n' +
        '   The waggle dance is a figure-eight movement performed by a forager bee upon returning to the hive. [B] The angle of the dance relative to vertical indicates the direction of the food source relative to the sun; the duration of the waggle run encodes the distance. Observer bees crowd around the dancer, following its movements closely before departing to find the resource. Remarkably, bees can communicate about food sources more than three miles away with an accuracy that scientists are still working to fully understand.\n\n' +
        '   [C] Equally surprising is the discovery that bees possess a long-term spatial memory. Individual foragers develop mental maps of the terrain surrounding the hive, remembering the locations of productive flowers across multiple seasons. Researchers demonstrated this by training bees to find a feeder at a specific location, then moving the feeder. The bees returned first to the original location—evidence that their memory of place, not just of cue, directed their behavior.\n\n' +
        '   The ecological implications of this navigational sophistication are significant. As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and navigate increasingly disrupted landscapes. [D] Scientists warn that if the cognitive demands of navigation exceed the capacity of individual bees, colony health could decline even in areas where flowers remain abundant. Understanding how bees navigate, therefore, is not merely an academic curiosity—it is an urgent conservation question.',
      prompt:
        'Which choice makes the underlined portion most grammatically acceptable? "As natural habitats become fragmented by roads, buildings, and monoculture agriculture, bees must travel greater distances and [BLANK] increasingly disrupted landscapes."',
      choices: [
        { id: 'A', text: 'navigates' },
        { id: 'B', text: 'navigating' },
        { id: 'C', text: 'navigate' },
        { id: 'D', text: 'to navigate' },
      ],
      answer: 'C',
      explanation:
        'The sentence uses a compound predicate: "bees must travel…and navigate." Both verbs must be in the base form after the modal "must." "Navigate" is the grammatically correct choice.',
    },

    // -----------------------------------------------------------------------
    // PASSAGE 5 — "Roots & Routes" (youth urban farming nonprofit profile)
    // eng-039 through eng-044
    // -----------------------------------------------------------------------
    {
      id: 'eng-039',
      subject: 'English',
      passage:
        'Roots & Routes\n\n' +
        '   On a half-acre lot in the middle of a densely built neighborhood, teenagers are doing something unusual: growing food. [A] The lot belongs to Roots & Routes, a nonprofit organization that trains youth between the ages of fourteen and eighteen in urban agriculture, entrepreneurship, and environmental stewardship. What began six years ago as a single raised bed in a church parking lot has grown into a network of four growing sites, a weekly farmers\' market booth, and a paid apprenticeship program that employs twelve young people each summer.\n\n' +
        '   The organization\'s founder, Darius Webb, was a high school biology teacher before he started Roots & Routes. [B] He noticed that his students could name the parts of a plant cell but had never held a seed. "We were teaching abstraction," he said in a recent interview. "I wanted to teach connection." The farm now integrates school curriculum with hands-on growing experience: apprentices learn soil chemistry, record yield data, and study the economics of local food systems alongside their coursework.\n\n' +
        '   The impact extends beyond agriculture. [C] Apprentices report gaining confidence in public speaking through weekly market interactions, and several have used their earnings to fund college applications. The waiting list for summer positions currently numbers more than sixty students—evidence, Webb argues, that young people are hungry not just for jobs but for work that feels meaningful. [D] Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.',
      prompt:
        'Which choice makes the underlined portion most grammatically acceptable? "What began six years ago as a single raised bed in a church parking lot [BLANK] into a network of four growing sites."',
      choices: [
        { id: 'A', text: 'have grown' },
        { id: 'B', text: 'has grown' },
        { id: 'C', text: 'growing' },
        { id: 'D', text: 'were grown' },
      ],
      answer: 'B',
      explanation:
        '"What began six years ago" is a singular noun clause functioning as the subject. It requires the singular verb "has grown." "Have grown" would be incorrect because the subject is singular.',
    },
    {
      id: 'eng-040',
      subject: 'English',
      passage:
        'Roots & Routes\n\n' +
        '   On a half-acre lot in the middle of a densely built neighborhood, teenagers are doing something unusual: growing food. [A] The lot belongs to Roots & Routes, a nonprofit organization that trains youth between the ages of fourteen and eighteen in urban agriculture, entrepreneurship, and environmental stewardship. What began six years ago as a single raised bed in a church parking lot has grown into a network of four growing sites, a weekly farmers\' market booth, and a paid apprenticeship program that employs twelve young people each summer.\n\n' +
        '   The organization\'s founder, Darius Webb, was a high school biology teacher before he started Roots & Routes. [B] He noticed that his students could name the parts of a plant cell but had never held a seed. "We were teaching abstraction," he said in a recent interview. "I wanted to teach connection." The farm now integrates school curriculum with hands-on growing experience: apprentices learn soil chemistry, record yield data, and study the economics of local food systems alongside their coursework.\n\n' +
        '   The impact extends beyond agriculture. [C] Apprentices report gaining confidence in public speaking through weekly market interactions, and several have used their earnings to fund college applications. The waiting list for summer positions currently numbers more than sixty students—evidence, Webb argues, that young people are hungry not just for jobs but for work that feels meaningful. [D] Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.',
      prompt:
        'The writer wants to add the following sentence: "Before starting the program, he spent a summer farming in the Mississippi Delta, an experience that reshaped how he thought about food, land, and education." It would most logically be placed at which of the highlighted points?',
      choices: [
        { id: 'A', text: 'Point [A]' },
        { id: 'B', text: 'Point [B]' },
        { id: 'C', text: 'Point [C]' },
        { id: 'D', text: 'Point [D]' },
      ],
      answer: 'B',
      explanation:
        'Point [B] comes immediately after the sentence introducing Webb as a former biology teacher and before his observation about students. The new sentence about his formative summer in the Delta fits there, providing background on how his vision developed.',
    },
    {
      id: 'eng-041',
      subject: 'English',
      passage:
        'Roots & Routes\n\n' +
        '   On a half-acre lot in the middle of a densely built neighborhood, teenagers are doing something unusual: growing food. [A] The lot belongs to Roots & Routes, a nonprofit organization that trains youth between the ages of fourteen and eighteen in urban agriculture, entrepreneurship, and environmental stewardship. What began six years ago as a single raised bed in a church parking lot has grown into a network of four growing sites, a weekly farmers\' market booth, and a paid apprenticeship program that employs twelve young people each summer.\n\n' +
        '   The organization\'s founder, Darius Webb, was a high school biology teacher before he started Roots & Routes. [B] He noticed that his students could name the parts of a plant cell but had never held a seed. "We were teaching abstraction," he said in a recent interview. "I wanted to teach connection." The farm now integrates school curriculum with hands-on growing experience: apprentices learn soil chemistry, record yield data, and study the economics of local food systems alongside their coursework.\n\n' +
        '   The impact extends beyond agriculture. [C] Apprentices report gaining confidence in public speaking through weekly market interactions, and several have used their earnings to fund college applications. The waiting list for summer positions currently numbers more than sixty students—evidence, Webb argues, that young people are hungry not just for jobs but for work that feels meaningful. [D] Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.',
      prompt:
        'Which choice is least redundant in context? The current phrase reads: "young people are hungry not just for jobs but for work that feels meaningful and has purpose and significance."',
      choices: [
        { id: 'A', text: 'NO CHANGE' },
        { id: 'B', text: 'young people are hungry not just for jobs but for work that feels meaningful, purposeful, and significant' },
        { id: 'C', text: 'young people are hungry not just for jobs but for work' },
        { id: 'D', text: 'young people are hungry not just for jobs but for work that feels meaningful' },
      ],
      answer: 'D',
      explanation:
        '"Meaningful," "has purpose," and "significance" all convey the same idea. Choice D retains only "meaningful," which is both concise and sufficient in context.',
    },
    {
      id: 'eng-042',
      subject: 'English',
      passage:
        'Roots & Routes\n\n' +
        '   On a half-acre lot in the middle of a densely built neighborhood, teenagers are doing something unusual: growing food. [A] The lot belongs to Roots & Routes, a nonprofit organization that trains youth between the ages of fourteen and eighteen in urban agriculture, entrepreneurship, and environmental stewardship. What began six years ago as a single raised bed in a church parking lot has grown into a network of four growing sites, a weekly farmers\' market booth, and a paid apprenticeship program that employs twelve young people each summer.\n\n' +
        '   The organization\'s founder, Darius Webb, was a high school biology teacher before he started Roots & Routes. [B] He noticed that his students could name the parts of a plant cell but had never held a seed. "We were teaching abstraction," he said in a recent interview. "I wanted to teach connection." The farm now integrates school curriculum with hands-on growing experience: apprentices learn soil chemistry, record yield data, and study the economics of local food systems alongside their coursework.\n\n' +
        '   The impact extends beyond agriculture. [C] Apprentices report gaining confidence in public speaking through weekly market interactions, and several have used their earnings to fund college applications. The waiting list for summer positions currently numbers more than sixty students—evidence, Webb argues, that young people are hungry not just for jobs but for work that feels meaningful. [D] Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.',
      prompt:
        'Which transition word or phrase is most logical in the underlined position? The sentence currently reads: "The farm [BLANK] integrates school curriculum with hands-on growing experience."',
      choices: [
        { id: 'A', text: 'however,' },
        { id: 'B', text: 'now' },
        { id: 'C', text: 'in contrast,' },
        { id: 'D', text: 'consequently,' },
      ],
      answer: 'B',
      explanation:
        '"Now" signals that the current state of the farm is different from what Webb started with—it has evolved from his early observations into an integrated program. The word provides a clear temporal transition without implying contrast or cause-effect.',
    },
    {
      id: 'eng-043',
      subject: 'English',
      passage:
        'Roots & Routes\n\n' +
        '   On a half-acre lot in the middle of a densely built neighborhood, teenagers are doing something unusual: growing food. [A] The lot belongs to Roots & Routes, a nonprofit organization that trains youth between the ages of fourteen and eighteen in urban agriculture, entrepreneurship, and environmental stewardship. What began six years ago as a single raised bed in a church parking lot has grown into a network of four growing sites, a weekly farmers\' market booth, and a paid apprenticeship program that employs twelve young people each summer.\n\n' +
        '   The organization\'s founder, Darius Webb, was a high school biology teacher before he started Roots & Routes. [B] He noticed that his students could name the parts of a plant cell but had never held a seed. "We were teaching abstraction," he said in a recent interview. "I wanted to teach connection." The farm now integrates school curriculum with hands-on growing experience: apprentices learn soil chemistry, record yield data, and study the economics of local food systems alongside their coursework.\n\n' +
        '   The impact extends beyond agriculture. [C] Apprentices report gaining confidence in public speaking through weekly market interactions, and several have used their earnings to fund college applications. The waiting list for summer positions currently numbers more than sixty students—evidence, Webb argues, that young people are hungry not just for jobs but for work that feels meaningful. [D] Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.',
      prompt:
        'Which choice most effectively concludes the passage?',
      choices: [
        { id: 'A', text: 'Darius Webb has received several awards for his contributions to urban education.' },
        { id: 'B', text: 'Urban farming is practiced in many cities throughout the United States.' },
        { id: 'C', text: 'Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.' },
        { id: 'D', text: 'Soil chemistry is an important part of any agriculture curriculum.' },
      ],
      answer: 'C',
      explanation:
        'The passage traces the growth of Roots & Routes from a single raised bed to a multi-site program. Ending with a concrete expansion plan forward-looking mirrors that arc and gives the essay a satisfying conclusion about continued growth.',
    },
    {
      id: 'eng-044',
      subject: 'English',
      passage:
        'Roots & Routes\n\n' +
        '   On a half-acre lot in the middle of a densely built neighborhood, teenagers are doing something unusual: growing food. [A] The lot belongs to Roots & Routes, a nonprofit organization that trains youth between the ages of fourteen and eighteen in urban agriculture, entrepreneurship, and environmental stewardship. What began six years ago as a single raised bed in a church parking lot has grown into a network of four growing sites, a weekly farmers\' market booth, and a paid apprenticeship program that employs twelve young people each summer.\n\n' +
        '   The organization\'s founder, Darius Webb, was a high school biology teacher before he started Roots & Routes. [B] He noticed that his students could name the parts of a plant cell but had never held a seed. "We were teaching abstraction," he said in a recent interview. "I wanted to teach connection." The farm now integrates school curriculum with hands-on growing experience: apprentices learn soil chemistry, record yield data, and study the economics of local food systems alongside their coursework.\n\n' +
        '   The impact extends beyond agriculture. [C] Apprentices report gaining confidence in public speaking through weekly market interactions, and several have used their earnings to fund college applications. The waiting list for summer positions currently numbers more than sixty students—evidence, Webb argues, that young people are hungry not just for jobs but for work that feels meaningful. [D] Roots & Routes has recently partnered with the city\'s parks department to develop two additional sites, with the goal of doubling the number of apprenticeship slots within three years.',
      prompt:
        'Suppose the writer\'s primary purpose had been to provide instructions for starting an urban farm. Would this essay accomplish that purpose?',
      choices: [
        { id: 'A', text: 'Yes, because the essay describes the crops grown at Roots & Routes.' },
        { id: 'B', text: 'Yes, because the essay mentions soil chemistry and yield data.' },
        { id: 'C', text: 'No, because the essay is a profile of an organization and its founder, not a practical guide to farming.' },
        { id: 'D', text: 'No, because the essay does not explain how to apply for the apprenticeship program.' },
      ],
      answer: 'C',
      explanation:
        'The essay describes an organization and the people involved in it. It does not offer step-by-step instructions for starting a farm, so it would not accomplish the stated instructional purpose.',
    },
  ],

  // ---------------------------------------------------------------------------
  // READING — read closely and reason about a text (uses a shared passage)
  // ---------------------------------------------------------------------------
  Reading: [
    // -----------------------------------------------------------------------
    // LITERARY NARRATIVE — Dual Passage (fiction + memoir)
    // "Bà Nội's Kitchen" and "Sunday Bread"
    // read-001 through read-008
    // -----------------------------------------------------------------------
    {
      id: 'read-001',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'It can most reasonably be inferred from Passage A that Bà Nội primarily hopes to help Linh:',
      choices: [
        { id: 'A', text: 'become interested in pursuing cooking as a career' },
        { id: 'B', text: 'understand the history and traditions of her family' },
        { id: 'C', text: 'develop patience by practicing a difficult skill' },
        { id: 'D', text: 'improve the quality of meals served at home' },
      ],
      answer: 'B',
      explanation:
        'Bà Nội connects the cooking to the village vendors and her own mother and grandmother, tying the lesson to family history and heritage.',
    },
    {
      id: 'read-002',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'According to Passage A, the recipes Bà Nội taught Linh to make were dishes that:',
      choices: [
        { id: 'A', text: 'Linh\'s parents had continued making after moving to New Jersey' },
        { id: 'B', text: 'Linh had often eaten at Vietnamese restaurants nearby' },
        { id: 'C', text: 'Linh\'s parents had stopped preparing after leaving Huế' },
        { id: 'D', text: 'Bà Nội had only learned to make after arriving in the United States' },
      ],
      answer: 'C',
      explanation:
        'The passage states directly that these were "dishes that Linh\'s parents had stopped preparing after moving from Huế."',
    },
    {
      id: 'read-003',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'In Passage B, the narrator characterizes her mother\'s refusal to use the bread machine as:',
      choices: [
        { id: 'A', text: 'stubbornly old-fashioned and impractical' },
        { id: 'B', text: 'a belief that the process of making bread is itself meaningful' },
        { id: 'C', text: 'a practical choice because the machine produced inferior bread' },
        { id: 'D', text: 'a way of showing off a skill that few others possessed' },
      ],
      answer: 'B',
      explanation:
        '"It doesn\'t know what it\'s making" suggests the mother values the awareness and intention behind the act of baking, not just the result.',
    },
    {
      id: 'read-004',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'Based on Passage B, from the narrator\'s perspective, receiving the loaf of bread in her college dorm was:',
      choices: [
        { id: 'A', text: 'disappointing because the bread had gone stale during shipping' },
        { id: 'B', text: 'surprising because she had not expected to feel homesick' },
        { id: 'C', text: 'revealing because she finally understood what her mother had been teaching her' },
        { id: 'D', text: 'uncomfortable because it reminded her of her earlier embarrassment' },
      ],
      answer: 'C',
      explanation:
        'The narrator says she "understood for the first time what she had been trying to give me"—a moment of realization about her mother\'s intention.',
    },
    {
      id: 'read-005',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'According to Passage B, the narrator eventually becomes embarrassed by:',
      choices: [
        { id: 'A', text: 'her mother\'s refusal to use the bread machine her father bought' },
        { id: 'B', text: 'the unfamiliar smell of her family\'s kitchen when friends visited' },
        { id: 'C', text: 'the fact that her mother had learned to bake in Poland' },
        { id: 'D', text: 'the dense, dark loaves that looked different from store-bought bread' },
      ],
      answer: 'B',
      explanation:
        'The narrator says she "felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them."',
    },
    {
      id: 'read-006',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'Which choice best describes a difference in how the passages are structured?',
      choices: [
        { id: 'A', text: 'Passage A focuses on a single morning lesson, while Passage B spans many years and ends with a moment of realization.' },
        { id: 'B', text: 'Passage A features a flashback to Bà Nội\'s childhood, while Passage B is told entirely in the present.' },
        { id: 'C', text: 'Passage A describes the cooking process in detail, while Passage B focuses only on the finished bread.' },
        { id: 'D', text: 'Passage A is told from an outside perspective, while Passage B features extended dialogue throughout.' },
      ],
      answer: 'A',
      explanation:
        'Passage A covers one morning\'s lesson; Passage B moves from childhood through high school to college, ending with an insight.',
    },
    {
      id: 'read-007',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'Compared to their older relatives, Linh in Passage A and the narrator in Passage B are both initially:',
      choices: [
        { id: 'A', text: 'eager to learn the traditional skills being taught' },
        { id: 'B', text: 'more aware of how their family practices differ from mainstream culture' },
        { id: 'C', text: 'critical of the methods their elders use' },
        { id: 'D', text: 'determined to carry on traditions once they understand them' },
      ],
      answer: 'B',
      explanation:
        'Linh sees no one else recognizes Bà Nội\'s songs; the narrator notices her friends\' families don\'t spend Sundays baking—both are aware of the gap between their home traditions and the wider culture.',
    },
    {
      id: 'read-008',
      subject: 'Reading',
      passage:
        'LITERARY NARRATIVE: Passage A is an original work of fiction. Passage B is an original work of nonfiction.\n\n' +
        'Passage A\n\n' +
        '[Bà Nội and her granddaughter Linh live with Linh\'s parents in New Jersey.]\n\n' +
        'Bà Nội taught Linh how to make bánh cuốn—thin rice-flour crepes filled with minced mushrooms and pork—dishes that Linh\'s parents had stopped preparing after moving from Huế. The rice flour had to be mixed to exactly the right consistency, and the pan heated to precisely the right temperature. When she cooked, Bà Nội liked to hum old songs from their hometown that no one else in the apartment recognized.\n\n' +
        '"Spread it thinner," Bà Nội said one morning, watching Linh pour the batter.\n\n' +
        'Linh tried, but her crepe bunched at the edges and tore.\n\n' +
        '"You\'re thinking too hard," Bà Nội said, taking Linh\'s hand and guiding it in a slow circle over the pan. "Let your wrist do it."\n\n' +
        'As they cooked, Bà Nội told Linh about the vendors in Huế who had sold bánh cuốn at sunrise, setting up their low wooden tables along the riverbanks before the city was fully awake.\n\n' +
        '"My mother sold it there," Bà Nội said. "And her mother before her. Now I teach you."\n\n' +
        'Linh\'s next crepe came out nearly perfect—pale and thin as paper, curling gently at the edges.\n\n' +
        'Passage B\n\n' +
        'When I was younger, my mother baked bread every Sunday in our house in Wisconsin. She had learned from her own mother in a small town in Poland, and the loaves she made were dense and dark, nothing like the soft white bread at the grocery store.\n\n' +
        'The kitchen on those mornings was full of flour dust and the smell of yeast. She mixed everything by hand, refusing to use the bread machine my father had bought her. "It doesn\'t know what it\'s making," she told him.\n\n' +
        'I didn\'t find it interesting until high school, when I started noticing that my friends\' families didn\'t spend Sundays this way. I felt embarrassed sometimes when friends came over and the kitchen smelled like something unfamiliar to them—warm and yeasty, nothing like the chemical sweetness of packaged bread.\n\n' +
        'When I went away to college, she mailed me a loaf wrapped in cloth. I hadn\'t expected to miss it. But unwrapping it in my small dorm room, I understood for the first time what she had been trying to give me all those years—not just bread, but a way of paying attention.',
      prompt: 'Based on both passages, one way that both Bà Nội in Passage A and the narrator\'s mother in Passage B pass knowledge to the younger generation is by:',
      choices: [
        { id: 'A', text: 'writing down recipes so the traditions can be preserved in the future' },
        { id: 'B', text: 'insisting that modern appliances produce an inferior product' },
        { id: 'C', text: 'sharing the origins and history behind what they are making' },
        { id: 'D', text: 'requiring the younger person to practice alone before receiving help' },
      ],
      answer: 'C',
      explanation:
        'Bà Nội tells Linh about the village vendors and her own mother and grandmother; the narrator\'s mother traces her baking to her mother in Poland—both frame the skill within a chain of history.',
    },

    // -----------------------------------------------------------------------
    // INFORMATIONAL — "The Hoover Dam"
    // read-009 through read-016
    // -----------------------------------------------------------------------
    {
      id: 'read-009',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'What is the main purpose of the passage?',
      choices: [
        { id: 'A', text: 'To explain the political debate over whether to build Hoover Dam' },
        { id: 'B', text: 'To describe the construction of Hoover Dam and its significance' },
        { id: 'C', text: 'To discuss the pros and cons of building large dams in the American West' },
        { id: 'D', text: 'To detail how concrete is mixed and cooled on large construction projects' },
      ],
      answer: 'B',
      explanation:
        'The passage covers why the dam was needed, how it was built, and what it accomplished—all centered on its construction and importance.',
    },
    {
      id: 'read-010',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'Based on the passage, in the early 1930s, compared to the Colorado River canyon, Las Vegas was more:',
      choices: [
        { id: 'A', text: 'settled and inhabited' },
        { id: 'B', text: 'isolated and difficult to reach' },
        { id: 'C', text: 'prone to flooding each spring' },
        { id: 'D', text: 'likely to attract construction workers' },
      ],
      answer: 'A',
      explanation:
        'The passage describes Las Vegas as "a railroad stop with a few thousand residents," while the canyon to the east was "wild and largely inaccessible."',
    },
    {
      id: 'read-011',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'It can reasonably be inferred that, once construction of Hoover Dam was approved, the greatest obstacle to beginning work was:',
      choices: [
        { id: 'A', text: 'obtaining Congress\'s approval to fund the project' },
        { id: 'B', text: 'finding enough skilled workers willing to endure the heat' },
        { id: 'C', text: 'redirecting the Colorado River before the dam site could be used' },
        { id: 'D', text: 'deciding which canyon location would be best suited for a dam' },
      ],
      answer: 'C',
      explanation:
        'The passage says "before construction could begin, workers had to divert the Colorado River"—making that the first and most critical obstacle to starting the project itself.',
    },
    {
      id: 'read-012',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        '[The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.]\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'What is the main idea of the highlighted paragraph?',
      choices: [
        { id: 'A', text: 'The dam was completed more quickly than engineers had originally predicted.' },
        { id: 'B', text: 'The extreme heat made it impossible to build the dam during summer months.' },
        { id: 'C', text: 'Building the dam required solving several major engineering and safety challenges.' },
        { id: 'D', text: 'The concrete used for the dam was a different formula from that used in smaller buildings.' },
      ],
      answer: 'C',
      explanation:
        'The paragraph covers diverting the river, deadly heat, and the concrete cooling problem—all challenges that had to be overcome during construction.',
    },
    {
      id: 'read-013',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The [Black Canyon]—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'As it is used at this point in the passage, what does the highlighted name "Black Canyon" refer to?',
      choices: [
        { id: 'A', text: 'A city in Nevada near Las Vegas' },
        { id: 'B', text: 'A type of rock formation found in the American West' },
        { id: 'C', text: 'A specific narrow gorge along the Colorado River' },
        { id: 'D', text: 'A section of highway between Nevada and Arizona' },
      ],
      answer: 'C',
      explanation:
        'The passage immediately defines it: "The Black Canyon—a narrow gorge about thirty miles from Las Vegas."',
    },
    {
      id: 'read-014',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and [the spring floods that had once been a distant hazard] now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'The author states that "the spring floods had once been a distant hazard." This phrase most likely indicates that:',
      choices: [
        { id: 'A', text: 'the floods had previously occurred far from where most people lived' },
        { id: 'B', text: 'the floods were too rare to be of serious concern' },
        { id: 'C', text: 'engineers had already tried and failed to control the flooding' },
        { id: 'D', text: 'the floods had never actually caused significant damage before' },
      ],
      answer: 'A',
      explanation:
        'The contrast with "now threatened entire communities" implies that previously, fewer people lived close enough to the river for the floods to affect them directly.',
    },
    {
      id: 'read-015',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'Based on the passage, before Hoover Dam was built, the Colorado River\'s seasonal flooding mainly:',
      choices: [
        { id: 'A', text: 'supplied water to farms in California\'s Imperial Valley' },
        { id: 'B', text: 'damaged farmland and threatened communities built near the river' },
        { id: 'C', text: 'carved new canyons through the surrounding desert' },
        { id: 'D', text: 'created a natural reservoir used by cities like Las Vegas' },
      ],
      answer: 'B',
      explanation:
        'The passage says the flooding "regularly devastated farmland" and later that it "threatened entire communities."',
    },
    {
      id: 'read-016',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Hoover Dam" is an original work of nonfiction.\n\n' +
        'Standing at the Nevada-Arizona border, Hoover Dam is one of the most recognizable structures in the American West. When it was built in the 1930s, no engineer had attempted a concrete dam of this size, and many doubted a structure could hold back the full force of the Colorado River. But more than eighty years later, the dam continues to generate electricity for millions of people and supply water to cities and farms across the region.\n\n' +
        'Las Vegas, Nevada, in the early 1930s was little more than a railroad stop with a few thousand residents. To the east, the Colorado River cut through miles of canyon, wild and largely inaccessible. The Black Canyon—a narrow gorge about thirty miles from Las Vegas—had been identified as the ideal site to control the river\'s seasonal flooding, which regularly devastated farmland in California\'s Imperial Valley.\n\n' +
        'By the 1920s, the need for flood control had become urgent. More and more families had built homes near the river, and the spring floods that had once been a distant hazard now threatened entire communities. Local leaders began calling for a dam. The idea had been discussed for decades, but it was not until 1928 that Congress passed the Boulder Canyon Project Act, authorizing construction.\n\n' +
        'The project faced enormous obstacles. Before construction could begin, workers had to divert the Colorado River through tunnels drilled into the canyon walls. Summer temperatures in the canyon reached 120 degrees Fahrenheit, and dozens of workers died during construction. The concrete used to build the dam also had to be cooled by an elaborate system of pipes—unhardened concrete generates its own heat as it sets, and at the dam\'s scale, the center would have taken 125 years to cool on its own.\n\n' +
        'Construction was completed two years ahead of schedule in 1936. Lake Mead, the reservoir created behind the dam, became the largest man-made lake in the United States at the time. The dam transformed the Southwest—enabling the growth of cities like Las Vegas and Phoenix, providing irrigation water for millions of acres of farmland, and generating hydroelectric power that fueled factories during World War II.',
      prompt: 'Based on the passage, which of the following arguments was likely used by people in favor of building Hoover Dam?',
      choices: [
        { id: 'A', text: 'Building a dam would create a lake large enough to attract tourists' },
        { id: 'B', text: 'Building a dam would bring more workers and businesses to Nevada' },
        { id: 'C', text: 'Building a dam would protect communities from the river\'s destructive floods' },
        { id: 'D', text: 'Building a dam would make the Colorado River safer for large cargo ships' },
      ],
      answer: 'C',
      explanation:
        'The passage explains that flooding was destroying farmland and threatening communities—so stopping the floods was the central motivation for local leaders calling for a dam.',
    },

    // -----------------------------------------------------------------------
    // INFORMATIONAL — "Chien-Shiung Wu, Experimental Physicist"
    // read-017 through read-024
    // -----------------------------------------------------------------------
    {
      id: 'read-017',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'What is the main purpose of the passage?',
      choices: [
        { id: 'A', text: 'To encourage more women to pursue careers in physics' },
        { id: 'B', text: 'To describe the history of nuclear research in the twentieth century' },
        { id: 'C', text: 'To explain how particle accelerators transformed experimental science' },
        { id: 'D', text: 'To provide a biography of a pioneering physicist who overcame significant barriers' },
      ],
      answer: 'D',
      explanation:
        'The passage traces Wu\'s life, her major scientific contribution, and the recognition she received, making it a biographical account of her career.',
    },
    {
      id: 'read-018',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'A main idea of the passage is that Wu:',
      choices: [
        { id: 'A', text: 'achieved lasting recognition in science despite being overlooked for the Nobel Prize' },
        { id: 'B', text: 'seemed unable to focus on a single area of physics research for long' },
        { id: 'C', text: 'eventually expressed regret about not returning to China to teach' },
        { id: 'D', text: 'believed that laboratory experiments had been made unnecessary by modern computers' },
      ],
      answer: 'A',
      explanation:
        'Wu was passed over for the Nobel but later received the National Medal of Science, the Wolf Prize, and became APS president—showing she achieved lasting recognition despite the Nobel exclusion.',
    },
    {
      id: 'read-019',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'Which of the following events from Wu\'s life mentioned in the passage occurred first chronologically?',
      choices: [
        { id: 'A', text: 'She received the National Medal of Science.' },
        { id: 'B', text: 'She joined the Manhattan Project at Columbia University.' },
        { id: 'C', text: 'She was born in Liuhe, China.' },
        { id: 'D', text: 'She designed the experiment that disproved the conservation of parity.' },
      ],
      answer: 'C',
      explanation:
        'Wu was born in 1912, which is the earliest event mentioned. All other events occurred after she moved to the United States.',
    },
    {
      id: 'read-020',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        '[The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.]\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'What is the purpose of the highlighted paragraph?',
      choices: [
        { id: 'A', text: 'To transition to a discussion about the history of the Manhattan Project' },
        { id: 'B', text: 'To explain what Wu\'s experiments at Columbia University were designed to test' },
        { id: 'C', text: 'To define the role of a physicist before introducing Wu as an example' },
        { id: 'D', text: 'To suggest that theoretical physics is more valuable than experimental physics' },
      ],
      answer: 'C',
      explanation:
        'The paragraph defines what physicists do, setting up the introduction of Wu as "one important physicist" in the very next paragraph.',
    },
    {
      id: 'read-021',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. ["I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."]\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'Which of the following statements best summarizes the highlighted text?',
      choices: [
        { id: 'A', text: 'Wu refused to acknowledge that discrimination had affected her opportunities.' },
        { id: 'B', text: 'Wu\'s primary focus was her scientific work, not her identity.' },
        { id: 'C', text: 'Wu believed that race and sex should not be discussed in a professional setting.' },
        { id: 'D', text: 'Wu felt that becoming a physicist was her only realistic option.' },
      ],
      answer: 'B',
      explanation:
        'Wu says she never consciously thought about her race or sex—only about physics—showing that her work, not her identity, was her central concern.',
    },
    {
      id: 'read-022',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'According to the passage, what is one reason Wu found it difficult to obtain a research position after completing her studies?',
      choices: [
        { id: 'A', text: 'She had not yet finished her degree at Berkeley.' },
        { id: 'B', text: 'She was seen as too specialized in nuclear research.' },
        { id: 'C', text: 'Research positions were rarely offered to women or Asian Americans at the time.' },
        { id: 'D', text: 'She refused to apply to any university other than Columbia.' },
      ],
      answer: 'C',
      explanation:
        'The passage states directly that "research positions were rarely offered to women or Asian Americans at the time," which is the reason cited for her difficulty finding work.',
    },
    {
      id: 'read-023',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. [Originally, experiments meant careful observation.]\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'What is the main purpose of the highlighted sentence?',
      choices: [
        { id: 'A', text: 'To transition to a discussion of Wu\'s work at the Manhattan Project' },
        { id: 'B', text: 'To explain the origin of Wu\'s interest in conducting experiments' },
        { id: 'C', text: 'To emphasize how much effort it took to develop modern equipment' },
        { id: 'D', text: 'To introduce the idea that physics once relied on direct, hands-on observation' },
      ],
      answer: 'D',
      explanation:
        '"Originally, experiments meant careful observation" contrasts early experimental science with modern technology-driven approaches, setting up the discussion of early physicists.',
    },
    {
      id: 'read-024',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "Chien-Shiung Wu, Experimental Physicist" is an original work of nonfiction.\n\n' +
        'Anyone who studies the history of modern physics knows that experiments are its foundation. It can be difficult, though, to find two people who picture the same kind of physicist—a person bent over equations, or a person adjusting instruments in a lab. But before modern particle accelerators existed, physicists conducted experiments entirely by hand, sometimes over many years. Originally, experiments meant careful observation.\n\n' +
        'The word physicist was first used to describe someone who studied the natural world through precise measurement and testing. These people worked alongside theorists to confirm or disprove ideas about how the universe operates. Sometimes the experiments required only simple tools, but often they demanded specialized equipment, careful timing, and the willingness to work for long periods without seeing clear results.\n\n' +
        'One important physicist was a Chinese American woman named Chien-Shiung Wu. Born in Liuhe, China, in 1912, Wu had been encouraged to pursue science from a young age. Her father had founded a school for girls at a time when girls\' education was rare in her region. "I have never consciously thought about my race or sex," Wu once said. "What I do think about is physics."\n\n' +
        'Wu eventually moved to the United States to study at the University of California, Berkeley. Research positions were rarely offered to women or Asian Americans at the time, making it difficult for her to find work. But in 1944 she joined the Manhattan Project at Columbia University, helping to develop the process for separating uranium isotopes. After the war, she joined Columbia\'s faculty.\n\n' +
        'Wu\'s most famous contribution came in 1956, when two theoretical physicists—Tsung-Dao Lee and Chen-Ning Yang—proposed that a widely accepted law in physics, the conservation of parity, might not always hold true. Most physicists were skeptical. Wu designed a demanding experiment at extremely low temperatures to test the theory, and within weeks she had proven Lee and Yang correct. Lee and Yang received the Nobel Prize in Physics in 1957. Wu was not included, despite the fact that her experiment had made their prize possible.\n\n' +
        'Wu continued her research for decades. She received the National Medal of Science in 1975—the first physicist ever to do so—and was elected president of the American Physical Society that same year. In 1978, she received the Wolf Prize. Her determination to work at the highest level of science, regardless of the barriers placed before her, made her a lasting model for future generations of researchers.',
      prompt: 'According to the passage, Wu\'s 1956 experiment changed physics because it:',
      choices: [
        { id: 'A', text: 'showed that theoretical physicists could conduct experimental work on their own' },
        { id: 'B', text: 'proved that uranium isotopes could be separated without modern equipment' },
        { id: 'C', text: 'disproved a law of physics that most scientists had accepted as true' },
        { id: 'D', text: 'earned Wu the Nobel Prize in Physics alongside Lee and Yang' },
      ],
      answer: 'C',
      explanation:
        'The passage says Wu proved Lee and Yang\'s prediction correct—that the conservation of parity did not always hold—a law "most physicists" had previously believed was reliable.',
    },

    // -----------------------------------------------------------------------
    // INFORMATIONAL — "The Power of Cassava"
    // read-025 through read-033
    // -----------------------------------------------------------------------
    {
      id: 'read-025',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'What is the main purpose of the passage?',
      choices: [
        { id: 'A', text: 'To explain why the World Food Prize is awarded annually' },
        { id: 'B', text: 'To inform readers how two scientists developed more nutritious varieties of cassava' },
        { id: 'C', text: 'To describe the history of plant genetics with an emphasis on tropical crops' },
        { id: 'D', text: 'To provide information about food production improvements since 2000' },
      ],
      answer: 'B',
      explanation:
        'The passage focuses on how Andrade and Low identified a nutritional problem, developed a solution through selective breeding, and spread the improved cassava globally.',
    },
    {
      id: 'read-026',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'Which of the following events mentioned in the passage occurred first chronologically?',
      choices: [
        { id: 'A', text: 'High-iron cassava varieties were developed at CIAT.' },
        { id: 'B', text: 'HarvestPlus began developing biofortified cassava varieties.' },
        { id: 'C', text: 'Andrade and Low began collaborating in Colombia.' },
        { id: 'D', text: 'Andrade and Low received the World Food Prize.' },
      ],
      answer: 'B',
      explanation:
        'HarvestPlus began in the 1990s. Andrade and Low began collaborating in the early 2000s, and the World Food Prize was awarded in 2016.',
    },
    {
      id: 'read-027',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'Based on the passage, what is one difference between traditional cassava and high-iron cassava?',
      choices: [
        { id: 'A', text: 'Traditional cassava is more expensive for farmers to grow than high-iron cassava.' },
        { id: 'B', text: 'Traditional cassava has a shorter growing season than high-iron cassava.' },
        { id: 'C', text: 'High-iron cassava contains greater levels of essential nutrients than traditional cassava.' },
        { id: 'D', text: 'High-iron cassava does not taste as good as traditional cassava.' },
      ],
      answer: 'C',
      explanation:
        'The passage states that high-iron cassava has "significantly higher levels of iron and zinc" than traditional varieties, which "contain low levels" of these nutrients.',
    },
    {
      id: 'read-028',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        '[Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.]\n\n',
      prompt: 'What is the main idea of the highlighted paragraph?',
      choices: [
        { id: 'A', text: 'Andrade and Low were honored for research that improved the lives of millions.' },
        { id: 'B', text: 'Andrade was the first woman from Cape Verde to win the World Food Prize.' },
        { id: 'C', text: 'Improved cassava is now grown in more than thirty countries.' },
        { id: 'D', text: 'Teaching farmers about the new cassava was the most important part of Andrade and Low\'s work.' },
      ],
      answer: 'A',
      explanation:
        'The paragraph summarizes the global reach of the work, the award received, and the impact on millions—all pointing to recognition for work that helped people.',
    },
    {
      id: 'read-029',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from [deficiencies] in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'As it is used in the passage, the highlighted word "deficiencies" most nearly means:',
      choices: [
        { id: 'A', text: 'allergies' },
        { id: 'B', text: 'shortages' },
        { id: 'C', text: 'infections' },
        { id: 'D', text: 'preferences' },
      ],
      answer: 'B',
      explanation:
        'In this context, "deficiencies in these nutrients" means the body is not getting enough of them—a shortage of iron and zinc.',
    },
    {
      id: 'read-030',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: [that is, varieties bred or engineered to contain higher levels of the nutrients people need.]\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'What is the main function of the highlighted phrase?',
      choices: [
        { id: 'A', text: 'To emphasize the importance of genetic modification in modern agriculture' },
        { id: 'B', text: 'To describe which specific nutrients are most important for child development' },
        { id: 'C', text: 'To explain why traditional cassava varieties are still preferred in some regions' },
        { id: 'D', text: 'To define a potentially unfamiliar term used earlier in the sentence' },
      ],
      answer: 'D',
      explanation:
        '"That is, varieties bred or engineered to contain higher levels of the nutrients people need" defines the term "biofortified" that appears just before it.',
    },
    {
      id: 'read-031',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'Based on the passage, what is one reason it was necessary to create multiple hybrid varieties of the improved cassava?',
      choices: [
        { id: 'A', text: 'The original high-iron cassava was not suited to every climate where an improved variety was needed.' },
        { id: 'B', text: 'Farmers in different regions refused to grow a variety that had not been developed locally.' },
        { id: 'C', text: 'Insects in different regions attacked the first hybrid, requiring replacements to be developed.' },
        { id: 'D', text: 'The original high-iron variety lost its nutritional benefits after a few growing seasons.' },
      ],
      answer: 'A',
      explanation:
        'The passage says "cassava grows in many different climates" and "each hybrid had to be adapted to thrive in a specific region," indicating climate variation was why multiple hybrids were needed.',
    },
    {
      id: 'read-032',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'The passage indicates that, compared to traditional cassava varieties grown in Rwanda, the high-iron cassava\'s yields were:',
      choices: [
        { id: 'A', text: 'about the same' },
        { id: 'B', text: 'less consistent' },
        { id: 'C', text: 'higher' },
        { id: 'D', text: 'lower' },
      ],
      answer: 'C',
      explanation:
        'The passage states that in Rwanda, "the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region."',
    },
    {
      id: 'read-033',
      subject: 'Reading',
      passage:
        'INFORMATIONAL: "The Power of Cassava" is an original work of nonfiction.\n\n' +
        'In many parts of the world, the primary food people depend on is cassava. For a long time, communities that relied heavily on cassava struggled to get adequate nutrition from it. Scientists began working on improving cassava so that it could deliver as much nutritional value as possible in a crop that remained high yielding and disease resistant.\n\n' +
        'Traditional cassava varieties contain low levels of iron and zinc—two nutrients essential for healthy development. Children who depend on cassava as their main food source often suffer from deficiencies in these nutrients, which can affect growth and cognitive development. Starting in the 1990s, a program called HarvestPlus began developing biofortified varieties of cassava: that is, varieties bred or engineered to contain higher levels of the nutrients people need.\n\n' +
        'At the International Center for Tropical Agriculture (CIAT) in Colombia, two scientists began working in the early 2000s to address the problem. Maria Andrade, a plant breeder from Cape Verde, collaborated with Jan Low, a food scientist from the United States, to develop improved cassava varieties with significantly higher levels of iron and zinc. Using selective breeding rather than genetic modification, they processed thousands of plant samples a year to find the ideal combination of nutritional and agricultural qualities.\n\n' +
        'Within a few years, their work produced a new type of cassava called high-iron cassava, which dramatically improved the nutritional content of the crop while preserving the characteristics that farmers and consumers valued. The plants had good flavor, remained disease resistant, and continued to yield well under difficult growing conditions.\n\n' +
        'Andrade and Low then traveled across sub-Saharan Africa, educating farming communities about the benefits of the new variety. They also developed additional hybrids of the improved cassava. Hybrids are produced by crossing two varieties of the same plant to combine their most desirable traits. Because cassava grows in many different climates, each hybrid had to be adapted to thrive in a specific region.\n\n' +
        'As the new varieties were grown across Africa, researchers measured their impact. Children who ate the high-iron cassava showed better health outcomes than those eating traditional varieties. In Nigeria, families that grew the improved cassava earned higher incomes because the crop commanded better prices. In Rwanda, the high-iron cassava produced yields 15 percent higher than traditional varieties grown in the same region.\n\n' +
        'Today, improved cassava varieties are grown in more than thirty countries worldwide. In 2016, Andrade and Low received the World Food Prize, the most prestigious award in food and agriculture. Their decades of research and community education have improved the nutritional outcomes and livelihoods of millions of people.',
      prompt: 'Based on the passage, where did Andrade and Low begin working together?',
      choices: [
        { id: 'A', text: 'Cape Verde' },
        { id: 'B', text: 'Colombia' },
        { id: 'C', text: 'Nigeria' },
        { id: 'D', text: 'Rwanda' },
      ],
      answer: 'B',
      explanation:
        'The passage states they began collaborating at the International Center for Tropical Agriculture (CIAT) in Colombia.',
    },
  ],

  // ---------------------------------------------------------------------------
  // MATH — algebra and functions heavy, some geometry
  // ---------------------------------------------------------------------------
  Math: [
    {
      id: 'math-001',
      subject: 'Math',
      prompt:
        'A group of friends spent a total of $36 at a restaurant. They ordered 4 tacos, all the same price, and spent $8 on drinks. There were no other expenses. In which of the following equations does x represent the price, in dollars, of 1 taco?',
      choices: [
        { id: 'A', text: '4x = 36' },
        { id: 'B', text: '8x = 36' },
        { id: 'C', text: '4x + 8 = 36' },
        { id: 'D', text: '8x + 4 = 36' },
      ],
      answer: 'C',
      explanation:
        '4 tacos at price x plus $8 for drinks equals $36 total: 4x + 8 = 36.',
    },
    {
      id: 'math-002',
      subject: 'Math',
      prompt:
        'Each card in a box is either red or blue. One card will be randomly selected from the box. The probability that the selected card will be red is 35%. What is the probability that the selected card will be blue?',
      choices: [
        { id: 'A', text: '15%' },
        { id: 'B', text: '35%' },
        { id: 'C', text: '50%' },
        { id: 'D', text: '65%' },
      ],
      answer: 'D',
      explanation:
        'Since the card is either red or blue, the probabilities must sum to 100%. 100% − 35% = 65%.',
    },
    {
      id: 'math-003',
      subject: 'Math',
      prompt: 'What is the sum of the polynomials −5x² + 3x − 2 and 8x² − x + 4?',
      choices: [
        { id: 'A', text: '3x² + 2x + 2' },
        { id: 'B', text: '3x² + 2x − 2' },
        { id: 'C', text: '3x² + 4x + 2' },
        { id: 'D', text: '13x² − 4x + 6' },
      ],
      answer: 'A',
      explanation:
        'Combine like terms: (−5+8)x² = 3x², (3−1)x = 2x, (−2+4) = 2. Result: 3x² + 2x + 2.',
    },
    {
      id: 'math-004',
      subject: 'Math',
      prompt:
        'Quadrilaterals ABCD and PQRS are congruent such that ABCD ≅ PQRS. The length of BC must be equal to the length of which of the following line segments?',
      choices: [
        { id: 'A', text: 'PQ' },
        { id: 'B', text: 'QR' },
        { id: 'C', text: 'RS' },
        { id: 'D', text: 'SP' },
      ],
      answer: 'B',
      explanation:
        'In congruent figures, corresponding sides are equal. B corresponds to Q and C to R, so BC corresponds to QR.',
    },
    {
      id: 'math-005',
      subject: 'Math',
      prompt: 'What is the decimal form of 7/11?',
      choices: [
        { id: 'A', text: '0.6̄3̄ (0.636363…, repeating)' },
        { id: 'B', text: '0.63' },
        { id: 'C', text: '0.7̄ (0.7777…, repeating)' },
        { id: 'D', text: '0.7' },
      ],
      answer: 'A',
      explanation:
        '7 ÷ 11 = 0.636363…, a repeating decimal written as 0.6̄3̄.',
    },
    {
      id: 'math-006',
      subject: 'Math',
      prompt:
        'At a store, 8 notebooks, each the same price, cost a total of $24. At the same store, a binder costs 3 times as much as a notebook. How much do 4 binders cost?',
      choices: [
        { id: 'A', text: '$24' },
        { id: 'B', text: '$27' },
        { id: 'C', text: '$36' },
        { id: 'D', text: '$72' },
      ],
      answer: 'C',
      explanation:
        'Notebook price = $24 ÷ 8 = $3. Binder = 3 × $3 = $9. Four binders = 4 × $9 = $36.',
    },
    {
      id: 'math-007',
      subject: 'Math',
      prompt:
        'All 25 students in a class were asked to choose their favorite color. Of these students, 4 chose red, 6 chose blue, 10 chose green, and 5 chose yellow. What is the probability that a randomly selected student from this class chose red or blue?',
      choices: [
        { id: 'A', text: '4/25' },
        { id: 'B', text: '6/25' },
        { id: 'C', text: '3/20' },
        { id: 'D', text: '2/5' },
      ],
      answer: 'D',
      explanation:
        '(4 + 6) = 10 students chose red or blue. P = 10/25 = 2/5.',
    },
    {
      id: 'math-008',
      subject: 'Math',
      prompt: '(8/27)^(2/3) = ?',
      choices: [
        { id: 'A', text: '16/81' },
        { id: 'B', text: '4/9' },
        { id: 'C', text: '16/27' },
        { id: 'D', text: '4/27' },
      ],
      answer: 'B',
      explanation:
        'Cube root of 8/27 = 2/3. Then (2/3)² = 4/9.',
    },
    {
      id: 'math-009',
      subject: 'Math',
      prompt:
        'A quadrilateral in the standard (x, y) coordinate plane has vertices at (1, 0), (1, 5), (6, 5), and (6, 0). How many right angles does the quadrilateral have?',
      choices: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' },
      ],
      answer: 'D',
      explanation:
        'The vertices form a rectangle with horizontal and vertical sides, so all 4 angles are right angles.',
    },
    {
      id: 'math-010',
      subject: 'Math',
      prompt: 'Which of the following points is a solution to y < −x − 3?',
      choices: [
        { id: 'A', text: '(2, 0)' },
        { id: 'B', text: '(−3, 1)' },
        { id: 'C', text: '(0, −4)' },
        { id: 'D', text: '(1, −3)' },
      ],
      answer: 'C',
      explanation:
        'Test (0, −4): −4 < −0 − 3 = −3. Since −4 < −3 is true, (0, −4) is a solution.',
    },
    {
      id: 'math-011',
      subject: 'Math',
      prompt: 'Given the function f(x) = 2x² + 5, what is the value of f(−3)?',
      choices: [
        { id: 'A', text: '−13' },
        { id: 'B', text: '7' },
        { id: 'C', text: '23' },
        { id: 'D', text: '41' },
      ],
      answer: 'C',
      explanation:
        'f(−3) = 2(−3)² + 5 = 2(9) + 5 = 18 + 5 = 23.',
    },
    {
      id: 'math-012',
      subject: 'Math',
      prompt:
        'What is the domain of the set of ordered pairs (−6, −3), (1, 4), (3, −2), (5, 0), and (7, 2)?',
      choices: [
        { id: 'A', text: '{−3, −2, 0, 2, 4}' },
        { id: 'B', text: '{−6, −3, 1, 5, 7}' },
        { id: 'C', text: '{−6, 1, 3, 5, 7}' },
        { id: 'D', text: '{−3, 1, 3, 5, 7}' },
      ],
      answer: 'C',
      explanation:
        'The domain is the set of all x-values (first coordinates): {−6, 1, 3, 5, 7}.',
    },
    {
      id: 'math-013',
      subject: 'Math',
      prompt:
        'The equation of a certain line in the standard (x, y) coordinate plane is y = −(3/4)x + 7. Which of the following is the slope of a line parallel to this line?',
      choices: [
        { id: 'A', text: '−4' },
        { id: 'B', text: '−3/4' },
        { id: 'C', text: '3/4' },
        { id: 'D', text: '7' },
      ],
      answer: 'B',
      explanation:
        'Parallel lines have the same slope. The slope of the given line is −3/4.',
    },
    {
      id: 'math-014',
      subject: 'Math',
      prompt:
        'Which ordered pair is a solution to both y = x + 2 and y = x²?',
      choices: [
        { id: 'A', text: '(0, 0)' },
        { id: 'B', text: '(−1, 1)' },
        { id: 'C', text: '(1, 2)' },
        { id: 'D', text: '(3, 5)' },
      ],
      answer: 'B',
      explanation:
        'Set equal: x² = x + 2 → x² − x − 2 = 0 → (x−2)(x+1) = 0. So x = 2 (giving y=4) or x = −1 (giving y=1). Of the choices, (−1, 1) is a solution.',
    },
    {
      id: 'math-015',
      subject: 'Math',
      prompt:
        'What is the probability that a number randomly selected from the following set will be a solution to the inequality 2x + 3 ≥ 1? {−5, −4, −3, −2, −1, 0, 1, 2, 3}',
      choices: [
        { id: 'A', text: '1/9' },
        { id: 'B', text: '4/9' },
        { id: 'C', text: '5/9' },
        { id: 'D', text: '2/3' },
      ],
      answer: 'C',
      explanation:
        '2x + 3 ≥ 1 → x ≥ −1. From the set, solutions are {−1, 0, 1, 2, 3} = 5 values. P = 5/9.',
    },
    {
      id: 'math-016',
      subject: 'Math',
      prompt:
        'Two data sets, A and B, are represented by boxplots on the same number line. Data set A: min=5, Q1=10, median=20, Q3=30, max=40. Data set B: min=5, Q1=15, median=25, Q3=35, max=40. One of the following statements about the 2 data sets is true. Which one?',
      choices: [
        { id: 'A', text: 'The range of data set A is equal to the range of data set B.' },
        { id: 'B', text: 'The median of data set A is greater than the median of data set B.' },
        { id: 'C', text: 'The maximum of data set A is greater than the maximum of data set B.' },
        { id: 'D', text: 'The 3rd quartile of data set A is greater than the 3rd quartile of data set B.' },
      ],
      answer: 'A',
      explanation:
        'Range of A = 40 − 5 = 35. Range of B = 40 − 5 = 35. The ranges are equal.',
    },
    {
      id: 'math-017',
      subject: 'Math',
      prompt: 'What value of m is the solution to the equation 5 + 4(m − 3) = 13 − m?',
      choices: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '4' },
        { id: 'D', text: '5' },
      ],
      answer: 'C',
      explanation:
        '5 + 4m − 12 = 13 − m → 4m − 7 = 13 − m → 5m = 20 → m = 4.',
    },
    {
      id: 'math-018',
      subject: 'Math',
      prompt: 'Which of the following is a linear equation?',
      choices: [
        { id: 'A', text: '√y = x' },
        { id: 'B', text: 'y = x³ + 1' },
        { id: 'C', text: 'y = −3x + 7' },
        { id: 'D', text: 'x² + y² = 16' },
      ],
      answer: 'C',
      explanation:
        'A linear equation has variables raised only to the first power and no products of variables. y = −3x + 7 fits this definition.',
    },
    {
      id: 'math-019',
      subject: 'Math',
      prompt:
        'A solid iron ball has a density of 5.8 grams per cubic centimeter and a volume of 20.0 cubic centimeters. A solid copper ball has a density of 9.6 grams per cubic centimeter. The masses of both balls are equal. The density of each ball is equal to its mass divided by its volume. To the nearest 0.1 cubic centimeters, what is the volume of the copper ball?',
      choices: [
        { id: 'A', text: '7.3' },
        { id: 'B', text: '12.1' },
        { id: 'C', text: '16.6' },
        { id: 'D', text: '33.1' },
      ],
      answer: 'B',
      explanation:
        'Mass of iron ball = 5.8 × 20 = 116 g. Volume of copper = 116 ÷ 9.6 ≈ 12.1 cm³.',
    },
    {
      id: 'math-020',
      subject: 'Math',
      prompt:
        'In the given figure, a transversal intersects two parallel lines. The measure of one angle is 70° and the co-interior (same-side interior) angle measures (5x + 10)°. What is the value of x?',
      choices: [
        { id: 'A', text: '10' },
        { id: 'B', text: '14' },
        { id: 'C', text: '20' },
        { id: 'D', text: '22' },
      ],
      answer: 'C',
      explanation:
        'Co-interior angles sum to 180°: 70 + (5x + 10) = 180 → 5x = 100 → x = 20.',
    },
    {
      id: 'math-021',
      subject: 'Math',
      prompt:
        'The table lists the remainder when each of 4 powers of 3 is divided by 10:\n3¹ → 3, 3² → 9, 3³ → 7, 3⁴ → 1, then the pattern repeats.\nWhat is the remainder when 3¹⁰¹ is divided by 10?',
      choices: [
        { id: 'A', text: '1' },
        { id: 'B', text: '3' },
        { id: 'C', text: '7' },
        { id: 'D', text: '9' },
      ],
      answer: 'B',
      explanation:
        'The pattern of remainders (3, 9, 7, 1) repeats every 4 powers. 101 ÷ 4 = 25 remainder 1. So 3¹⁰¹ has the same remainder as 3¹, which is 3.',
    },
    {
      id: 'math-022',
      subject: 'Math',
      prompt:
        'Given that q = 5 and the value of r is 2.4 times the value of q, what is the sum of q and r?',
      choices: [
        { id: 'A', text: '12' },
        { id: 'B', text: '14' },
        { id: 'C', text: '15' },
        { id: 'D', text: '17' },
      ],
      answer: 'D',
      explanation:
        'r = 2.4 × 5 = 12. Sum = q + r = 5 + 12 = 17.',
    },
    {
      id: 'math-023',
      subject: 'Math',
      prompt:
        'Each of the following lines in the standard (x, y) coordinate plane passes through 2 points labeled with coordinates. Which of these lines has a slope greater than 2 and a y-intercept less than 5?',
      choices: [
        { id: 'A', text: 'Through (0, 3) and (1, 6)' },
        { id: 'B', text: 'Through (0, 4) and (2, 8)' },
        { id: 'C', text: 'Through (0, 6) and (1, 9)' },
        { id: 'D', text: 'Through (0, 2) and (3, 5)' },
      ],
      answer: 'A',
      explanation:
        'A: slope = (6−3)/(1−0) = 3 > 2 ✓, y-intercept = 3 < 5 ✓. B: slope = 2 (not > 2). C: y-intercept = 6 (not < 5). D: slope = 1 (not > 2).',
    },
    {
      id: 'math-024',
      subject: 'Math',
      prompt:
        'A total of 45 students were asked whether they like cats and whether they are athletes. Of the 45 students, 20 like cats. Of the 30 that were athletes, 18 did not like cats. Of the people who were not athletes, how many liked cats?',
      choices: [
        { id: 'A', text: '6' },
        { id: 'B', text: '8' },
        { id: 'C', text: '12' },
        { id: 'D', text: '18' },
      ],
      answer: 'B',
      explanation:
        'Athletes who like cats = 30 − 18 = 12. Total who like cats = 20. Non-athletes who like cats = 20 − 12 = 8.',
    },
    {
      id: 'math-025',
      subject: 'Math',
      prompt:
        'What are the x-intercepts of the graph of y = x² + 7x + 12 in the standard (x, y) coordinate plane?',
      choices: [
        { id: 'A', text: '−12 and −1' },
        { id: 'B', text: '−6 and −2' },
        { id: 'C', text: '−3 and −4' },
        { id: 'D', text: '3 and 4' },
      ],
      answer: 'C',
      explanation:
        'Factor: x² + 7x + 12 = (x + 3)(x + 4) = 0. So x = −3 or x = −4.',
    },
    {
      id: 'math-026',
      subject: 'Math',
      prompt:
        'A car has a maximum speed of 60 miles per hour. What is this car\'s maximum speed in feet per second?\n(Note: 1 mile = 5,280 feet)',
      choices: [
        { id: 'A', text: '1' },
        { id: 'B', text: '88' },
        { id: 'C', text: '5,280' },
        { id: 'D', text: '316,800' },
      ],
      answer: 'B',
      explanation:
        '60 mi/hr × 5,280 ft/mi ÷ 3,600 sec/hr = 316,800 ÷ 3,600 = 88 ft/sec.',
    },
    {
      id: 'math-027',
      subject: 'Math',
      prompt:
        'What is the x-value of the solution to the given system of equations?\n3x + y = 10\nx − y = 2',
      choices: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3' },
        { id: 'C', text: '4' },
        { id: 'D', text: '5' },
      ],
      answer: 'B',
      explanation:
        'Add the equations: 4x = 12 → x = 3.',
    },
    {
      id: 'math-028',
      subject: 'Math',
      prompt:
        'A scatterplot shows hours studied (x) and test scores (y) for 10 students. The data shows a positive linear trend. Which of the following could be the linear equation of the line of best fit?',
      choices: [
        { id: 'A', text: 'y = −5x + 90' },
        { id: 'B', text: 'y = x' },
        { id: 'C', text: 'y = 8x + 40' },
        { id: 'D', text: 'y = 50x + 100' },
      ],
      answer: 'C',
      explanation:
        'A positive linear trend means a positive slope. y = 8x + 40 has a reasonable positive slope and a realistic starting score.',
    },
    {
      id: 'math-029',
      subject: 'Math',
      prompt:
        'Sam is practicing free throws. Sam made 8 of the first 20 free throws. Sam made every free throw after the first 20. At the end of practicing, Sam had made 2/3 of all the free throws attempted. How many free throws did Sam attempt after the first 20?',
      choices: [
        { id: 'A', text: '8' },
        { id: 'B', text: '12' },
        { id: 'C', text: '16' },
        { id: 'D', text: '36' },
      ],
      answer: 'C',
      explanation:
        'Let n = extra throws. (8 + n)/(20 + n) = 2/3 → 3(8 + n) = 2(20 + n) → 24 + 3n = 40 + 2n → n = 16.',
    },
    {
      id: 'math-030',
      subject: 'Math',
      prompt:
        'A gym charges a fixed membership fee and a fixed monthly fee. The total cost for 3 months is $75 and the total cost for 7 months is $115. What will the gym charge in total for 10 months?',
      choices: [
        { id: 'A', text: '$125' },
        { id: 'B', text: '$135' },
        { id: 'C', text: '$145' },
        { id: 'D', text: '$155' },
      ],
      answer: 'C',
      explanation:
        'Monthly fee = ($115 − $75) ÷ (7 − 3) = $10/month. Membership = $75 − 3($10) = $45. Total for 10 months = $45 + 10($10) = $145.',
    },
    {
      id: 'math-031',
      subject: 'Math',
      prompt:
        'The graph shows the total cost of 1 coffee and different numbers of muffins at a café. One of the following amounts is the cost of 3 muffins with no coffee. Which one?\n(The graph shows points: (0, $2.00), (1, $3.50), (2, $5.00), (3, $6.50))',
      choices: [
        { id: 'A', text: '$2.00' },
        { id: 'B', text: '$3.00' },
        { id: 'C', text: '$4.50' },
        { id: 'D', text: '$6.50' },
      ],
      answer: 'C',
      explanation:
        'The y-intercept $2.00 is the coffee price. Each muffin costs $1.50. Three muffins without coffee = 3 × $1.50 = $4.50.',
    },
    {
      id: 'math-032',
      subject: 'Math',
      prompt:
        'In the standard (x, y) coordinate plane, the point (5, 13) is on the circle centered at the point (2, 9). What is the radius of the circle?',
      choices: [
        { id: 'A', text: '5' },
        { id: 'B', text: '7' },
        { id: 'C', text: '12' },
        { id: 'D', text: '13' },
      ],
      answer: 'A',
      explanation:
        'r = √((5−2)² + (13−9)²) = √(9 + 16) = √25 = 5.',
    },
    {
      id: 'math-033',
      subject: 'Math',
      prompt:
        'The given 8-sided figure is partitioned into 4 congruent squares. The total area of the figure is 400 square inches. Which of the following is closest to the perimeter of the figure in inches?',
      choices: [
        { id: 'A', text: '40' },
        { id: 'B', text: '80' },
        { id: 'C', text: '100' },
        { id: 'D', text: '140' },
      ],
      answer: 'C',
      explanation:
        'Each square has area 400 ÷ 4 = 100 sq in, so side = 10 in. The L-shaped 8-sided figure has 10 outer unit-sides, giving perimeter ≈ 10 × 10 = 100 in.',
    },
    {
      id: 'math-034',
      subject: 'Math',
      prompt:
        'When the parabola represented by y = (x + 4)(x − 2) is graphed in the standard (x, y) coordinate plane, what are the coordinates of the vertex?',
      choices: [
        { id: 'A', text: '(−4, 2)' },
        { id: 'B', text: '(−1, −9)' },
        { id: 'C', text: '(1, −9)' },
        { id: 'D', text: '(0, −8)' },
      ],
      answer: 'B',
      explanation:
        'x-intercepts are −4 and 2. Vertex x = (−4 + 2)/2 = −1. y = (−1 + 4)(−1 − 2) = 3 × (−3) = −9. Vertex: (−1, −9).',
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
