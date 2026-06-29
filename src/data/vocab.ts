// PreACT 9 Secure flashcard vocabulary.
//
// Two kinds of cards:
//   - "term"     official ACT reporting-category / skill-area terms from the
//                Illinois ACT Standards Crosswalk (PreACT 9 Secure, pp. 53-70).
//                These help a student understand what each test question is
//                actually asking for.
//   - "academic" general high-frequency ACT academic words (the kind that show
//                up across reading passages and question stems). Sourced from
//                widely used ACT word lists (PrepScholar 150 / College Board
//                Top 100). PreACT 9 does not test isolated vocabulary, so these
//                are for reading comprehension, not memorize-and-match.
//
// Each card: word, a short plain-English definition, and one example sentence.

export type Subject = 'English' | 'Reading' | 'Math' | 'Science';
export type CardKind = 'term' | 'academic';

export interface Card {
  word: string;
  definition: string;
  example: string;
  subject: Subject;
  kind: CardKind;
}

export const SUBJECTS: Subject[] = ['English', 'Reading', 'Math', 'Science'];

export const SUBJECT_META: Record<
  Subject,
  { label: string; blurb: string; accent: string }
> = {
  English: {
    label: 'English',
    blurb: '44 items / 35 min. Revise and edit a text. Half the test is Conventions of Standard English.',
    accent: '#e23a6e',
  },
  Reading: {
    label: 'Reading',
    blurb: '33 items / 40 min. Read closely and reason about texts. Key Ideas & Details dominates.',
    accent: '#e08a1e',
  },
  Math: {
    label: 'Math',
    blurb: '35 items / 45 min. Heavy on algebra and functions, lighter on geometry.',
    accent: '#2563c9',
  },
  Science: {
    label: 'Science',
    blurb: '32 items / 35 min. Interpret data, evaluate experiments and models across all disciplines.',
    accent: '#13917e',
  },
};

export const KIND_META: Record<CardKind, { label: string; note: string }> = {
  term: {
    label: 'Test Terms',
    note: 'Official ACT skill terms — understand what the question is asking.',
  },
  academic: {
    label: 'Academic Words',
    note: 'High-frequency academic words — understand the passages.',
  },
};

export const CARDS: Card[] = [
  // ---------------------------------------------------------------------------
  // ENGLISH — test terms (from Crosswalk reporting categories / skill areas)
  // ---------------------------------------------------------------------------
  {
    word: 'cohesion',
    definition: 'How smoothly the parts of a text connect and flow together.',
    example: 'Adding a transition word improved the cohesion between the two paragraphs.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'transition',
    definition: 'A word or phrase that links one idea to the next (e.g., however, therefore).',
    example: 'She used the transition "for example" to introduce her evidence.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'concise',
    definition: 'Saying something clearly using as few words as needed.',
    example: 'The editor made the sentence more concise by cutting repeated words.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'redundancy',
    definition: 'Using extra words that repeat an idea already stated.',
    example: 'Writing "free gift" is a redundancy because a gift is already free.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'tone',
    definition: 'The writer’s attitude or feeling expressed through word choice.',
    example: 'The formal tone of the essay matched its serious topic.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'convention',
    definition: 'An accepted rule of standard English grammar, usage, or punctuation.',
    example: 'Capitalizing the first word of a sentence is a basic writing convention.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'usage',
    definition: 'Choosing the correct word form according to the rules of English.',
    example: 'Correct usage means writing "their" instead of "there" here.',
    subject: 'English',
    kind: 'term',
  },
  {
    word: 'modifier',
    definition: 'A word or phrase that describes another word in the sentence.',
    example: 'In "the bright red car," "bright red" is a modifier of "car."',
    subject: 'English',
    kind: 'term',
  },

  // ENGLISH — academic words
  {
    word: 'rhetorical',
    definition: 'Relating to how language is used to persuade or affect an audience.',
    example: 'The speaker asked a rhetorical question to make the crowd think.',
    subject: 'English',
    kind: 'academic',
  },
  {
    word: 'emphasize',
    definition: 'To give special importance or attention to something.',
    example: 'The author repeats the word "never" to emphasize her point.',
    subject: 'English',
    kind: 'academic',
  },
  {
    word: 'clarify',
    definition: 'To make something clearer or easier to understand.',
    example: 'He added an example to clarify the difficult idea.',
    subject: 'English',
    kind: 'academic',
  },
  {
    word: 'relevant',
    definition: 'Closely connected to the topic being discussed.',
    example: 'Only relevant details should stay in a focused paragraph.',
    subject: 'English',
    kind: 'academic',
  },

  // ---------------------------------------------------------------------------
  // READING — test terms
  // ---------------------------------------------------------------------------
  {
    word: 'infer',
    definition: 'To figure out something that is not directly stated, using clues.',
    example: 'From his shaking hands, we can infer that he was nervous.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'central idea',
    definition: 'The most important point or message of a text.',
    example: 'The central idea of the passage is that bees help farms survive.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'theme',
    definition: 'A deeper message or lesson that runs through a whole text.',
    example: 'A common theme in the story is that honesty builds trust.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'summarize',
    definition: 'To briefly state the main points of a text in your own words.',
    example: 'In one sentence, summarize what the article is mainly about.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'cause and effect',
    definition: 'A relationship where one event makes another event happen.',
    example: 'The passage shows a cause and effect: heavy rain caused the flood.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'figurative language',
    definition: 'Language that means more than the literal words, like metaphors.',
    example: '"Time is money" is figurative language, not a literal statement.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'point of view',
    definition: 'The perspective from which a story or argument is told.',
    example: 'The story is told from the point of view of the youngest sister.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'claim',
    definition: 'A statement that an author argues is true.',
    example: 'The writer’s main claim is that schools should start later.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'counterclaim',
    definition: 'An opposing argument against the author’s main claim.',
    example: 'She answered the counterclaim that later starts waste time.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'evidence',
    definition: 'Facts or details used to support a claim or idea.',
    example: 'The graph gives evidence that sales rose every year.',
    subject: 'Reading',
    kind: 'term',
  },
  {
    word: 'synthesize',
    definition: 'To combine information from different sources into one understanding.',
    example: 'Synthesize the two articles to explain both sides of the debate.',
    subject: 'Reading',
    kind: 'term',
  },

  // READING — academic words
  {
    word: 'imply',
    definition: 'To suggest something without saying it directly.',
    example: 'The author’s word choice implies that she disagrees.',
    subject: 'Reading',
    kind: 'academic',
  },
  {
    word: 'context',
    definition: 'The surrounding words or situation that give meaning to something.',
    example: 'Use the context of the sentence to guess the hard word.',
    subject: 'Reading',
    kind: 'academic',
  },
  {
    word: 'perspective',
    definition: 'A particular way of viewing or thinking about something.',
    example: 'The essay shows the event from a scientist’s perspective.',
    subject: 'Reading',
    kind: 'academic',
  },
  {
    word: 'ambiguous',
    definition: 'Having more than one possible meaning; unclear.',
    example: 'The ending is ambiguous, so readers debate what happened.',
    subject: 'Reading',
    kind: 'academic',
  },
  {
    word: 'objective',
    definition: 'Based on facts, not personal feelings or opinions.',
    example: 'A news report should stay objective and avoid taking sides.',
    subject: 'Reading',
    kind: 'academic',
  },
  {
    word: 'subjective',
    definition: 'Based on personal feelings, opinions, or tastes.',
    example: 'Saying the movie is "the best ever" is a subjective judgment.',
    subject: 'Reading',
    kind: 'academic',
  },

  // ---------------------------------------------------------------------------
  // MATH — test terms (skill-area language)
  // ---------------------------------------------------------------------------
  {
    word: 'expression',
    definition: 'A combination of numbers, variables, and operations without an equals sign.',
    example: '3x + 5 is an expression, not an equation.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'equation',
    definition: 'A math statement that two expressions are equal, using an equals sign.',
    example: 'Solve the equation 2x + 1 = 9 to find x.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'inequality',
    definition: 'A statement that one value is greater or less than another.',
    example: 'The inequality x > 3 means x is any number above 3.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'function',
    definition: 'A rule that gives exactly one output for each input.',
    example: 'The function f(x) = 2x doubles whatever number you put in.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'linear',
    definition: 'Forming a straight line when graphed; changing at a constant rate.',
    example: 'A linear equation like y = 2x + 1 graphs as a straight line.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'quadratic',
    definition: 'An expression or equation with a variable raised to the second power.',
    example: 'The quadratic x² + 2x + 1 graphs as a U-shaped curve.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'exponential',
    definition: 'Growing or shrinking by repeated multiplication.',
    example: 'Money in a bank with compound interest grows exponentially.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'proportional',
    definition: 'Two quantities that change at the same constant ratio.',
    example: 'Distance is proportional to time when speed stays the same.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'coordinate',
    definition: 'A number that gives the position of a point on a grid.',
    example: 'The point (3, 4) has an x-coordinate of 3 and y-coordinate of 4.',
    subject: 'Math',
    kind: 'term',
  },
  {
    word: 'model',
    definition: 'A math description (like an equation or graph) of a real situation.',
    example: 'They built an equation to model how the plant grows each week.',
    subject: 'Math',
    kind: 'term',
  },

  // MATH — academic words
  {
    word: 'estimate',
    definition: 'To find an answer close to the exact value.',
    example: 'Estimate the total by rounding each price to the nearest dollar.',
    subject: 'Math',
    kind: 'academic',
  },
  {
    word: 'equivalent',
    definition: 'Equal in value or meaning, even if written differently.',
    example: 'The fractions 1/2 and 2/4 are equivalent.',
    subject: 'Math',
    kind: 'academic',
  },
  {
    word: 'represent',
    definition: 'To stand for or show something in another form.',
    example: 'Let x represent the number of unknown students.',
    subject: 'Math',
    kind: 'academic',
  },

  // ---------------------------------------------------------------------------
  // SCIENCE — test terms
  // ---------------------------------------------------------------------------
  {
    word: 'hypothesis',
    definition: 'A testable guess about why something happens.',
    example: 'Her hypothesis was that plants grow faster in warm soil.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'variable',
    definition: 'A factor that can change in an experiment.',
    example: 'The amount of water was the variable they changed each trial.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'control',
    definition: 'The part of an experiment kept normal for comparison.',
    example: 'The control group got no fertilizer, so they could compare growth.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'trend',
    definition: 'A general direction or pattern in data over time.',
    example: 'The graph shows an upward trend in temperature each year.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'data',
    definition: 'Facts and numbers collected from observation or measurement.',
    example: 'They recorded the data in a table after each test.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'correlation',
    definition: 'A relationship where two things tend to change together.',
    example: 'There is a correlation between studying more and higher scores.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'conclusion',
    definition: 'A judgment reached after looking at the evidence.',
    example: 'The conclusion was that the new diet helped the fish grow.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'predict',
    definition: 'To say what will happen based on a pattern or evidence.',
    example: 'Using the trend, predict the value for the next year.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'procedure',
    definition: 'The step-by-step method used to do an experiment.',
    example: 'Follow the procedure exactly so the results can be repeated.',
    subject: 'Science',
    kind: 'term',
  },
  {
    word: 'evaluate',
    definition: 'To judge how good, valid, or useful something is.',
    example: 'Evaluate whether the evidence really supports the claim.',
    subject: 'Science',
    kind: 'term',
  },

  // SCIENCE — academic words
  {
    word: 'analyze',
    definition: 'To examine something carefully to understand its parts.',
    example: 'Analyze the chart to find which month had the most rain.',
    subject: 'Science',
    kind: 'academic',
  },
  {
    word: 'observe',
    definition: 'To watch carefully and notice details.',
    example: 'Scientists observe the reaction and write down what changes.',
    subject: 'Science',
    kind: 'academic',
  },
  {
    word: 'significant',
    definition: 'Large or important enough to matter.',
    example: 'There was a significant rise in the bird population.',
    subject: 'Science',
    kind: 'academic',
  },
  {
    word: 'derive',
    definition: 'To get or work out something from a source or data.',
    example: 'They derived the speed from the distance and time data.',
    subject: 'Science',
    kind: 'academic',
  },
];
