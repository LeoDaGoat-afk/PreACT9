# How to help on this project

Welcome! This is a short guide to making changes safely. You do not need to
understand the whole codebase to help — most useful changes are small edits to
two data files.

## One-time setup

1. Install [Node.js](https://nodejs.org) (the "LTS" version).
2. Get the code:
   ```sh
   git clone https://github.com/LeoDaGoat-afk/PreACT9.git
   cd PreACT9
   npm install
   ```
3. Start it:
   ```sh
   npm run dev
   ```
   Open the address it prints (http://localhost:4399) in your browser. The page
   reloads automatically as you edit files.

## The two files you'll edit most

### Add a flashcard — `src/data/vocab.ts`

Find the `CARDS` list and add an entry like this:

```ts
{
  word: 'hypothesis',
  definition: 'A testable idea you check with an experiment.',
  example: 'Their hypothesis was that warmer water dissolves sugar faster.',
  subject: 'Science',   // English | Reading | Math | Science
  kind: 'academic',     // term | academic
},
```

### Add a practice question — `src/data/practice.ts`

Find the section you want (`English`, `Reading`, `Math`, `Science`) and add:

```ts
{
  id: 'math-003',                 // any unique id
  subject: 'Math',
  prompt: 'What is 25% of 80?',
  choices: [
    { id: 'A', text: '15' },
    { id: 'B', text: '20' },
    { id: 'C', text: '25' },
    { id: 'D', text: '40' },
  ],
  answer: 'B',                    // the id of the correct choice
  explanation: '25% of 80 is 80 / 4 = 20.',
},
```

Reading and Science questions can also include a `passage` field (text shown
above the question).

## Saving your work

Make a branch so everyone's changes stay separate, then push it:

```sh
git checkout -b add-science-words
git add -A
git commit -m "Add 5 science vocabulary cards"
git push -u origin add-science-words
```

Then open a Pull Request on GitHub so a parent can review and merge it. Don't
commit straight to `main`.

## A few house rules

- No emojis in the code or content.
- Keep definitions short and in plain English.
- Run `npm run build` before pushing — if it prints errors, fix them first.
- When in doubt, ask before changing files other than `vocab.ts` /
  `practice.ts`.
