# PreACT 9 Flashcards

A small, fully static study site for the **PreACT 9 Secure** test. Built with
Astro and Tailwind, it deploys to Cloudflare Pages as plain static files (no
adapter, no server).

## Features

- **Flashcards** — one large card at a time. Swipe left/right (or use the arrow
  keys) to move through the deck. Each card shows the word with its plain-English
  meaning and an example right below it, and the word is read aloud as the card
  comes up (Web Speech API, prefers a natural English female voice).
- **Subject + type filters** — English, Reading, Math, Science; and Test Terms
  vs. Academic Words.
- **Practice** — multiple-choice questions in the same four sections, with
  instant scoring, answer reveal, and per-question explanations.

## Content sources

- **Test terms** are drawn from the Illinois ACT Standards Crosswalk (PreACT 9
  Secure reporting categories and skill areas).
- **Academic words** follow widely used, publicly available ACT word lists.
- **Practice questions** are original items written to match the PreACT 9
  question styles — not reproductions of secure test content.

## Develop

```sh
npm install
npm run dev      # http://localhost:4399
npm run build    # static output in dist/
npm run preview
```

## Project layout

```
src/
  data/
    vocab.ts      # flashcard deck + subject/type metadata
    practice.ts   # practice questions, one bucket per subject
  pages/
    index.astro          # flashcard viewer
    practice.astro       # practice section index
    practice/[subject].astro  # per-subject quiz
  layouts/Base.astro
  styles/global.css
```

To add practice questions, append items to the relevant array in
`src/data/practice.ts`; the practice pages pick them up automatically.
