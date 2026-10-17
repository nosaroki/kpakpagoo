# Kpakpagoo

A small guided course in **Eleme**, an Ogoni language of Rivers State, Nigeria, spoken by roughly 40,000 people.

Seven units, from the writing system to a full passage of connected text. Press Go on a unit and the lesson walks you through it word by word, then tests you. Everything you finish comes back later, spaced out over days, so it sticks.

`kpakpagoo` means butterfly.

## The rule this is built on

**No Eleme here is invented.** Every line was copied letter by letter from a published lesson. There is very little Eleme material online, so the collection is deliberately small. A small true one beats a big wrong one.

Every word carries a label saying how much weight it can bear:

| Label | What it means |
|---|---|
| **checked by a speaker** | Someone who speaks Eleme confirmed it, or corrected it. Outranks everything else. |
| **straight from the lesson** | The source prints that word against that meaning, usually inside a full sentence. |
| **seen twice** | The same word appears in two separate places meaning the same thing. |
| **my reading** | Worked out from the sentence around it. Sound reasoning, but still only reasoning. |

The **My words** tab exists to move words up that list. Anything a speaker confirms replaces what the blog says, and the app starts teaching their version instead.

## Sources

- [Mpioo Eleme, Lesson 1: the alphabet](https://mpiooeleme.wordpress.com/2013/04/15/learn-eleme-alphabets/)
- [Mpioo Eleme, Lesson 2: the sounds](https://mpiooeleme.wordpress.com/2013/05/03/learn-eleme-language/)
- [Mpioo Eleme, Lesson 4: people, and the mango story](https://mpiooeleme.wordpress.com/2013/05/08/learn-eleme-language-3/)
- [Mpioo Eleme, Lesson 5: greetings](https://mpiooeleme.wordpress.com/2013/05/08/learn-eleme-language-4/)
- [Mpioo Eleme, Lesson 6: sentences](https://mpiooeleme.wordpress.com/2013/05/17/learn-eleme-language-5/)
- [Surrey Morphology Group, Eleme](https://www.smg.surrey.ac.uk/languages/eleme/)
- [Eleme language, Wikipedia](https://en.wikipedia.org/wiki/Eleme_language)

One editorial change: the source blog types the open-e vowel as a Greek epsilon, a common workaround on a keyboard without the real character. The official orthography (Ngulube, 2011, NERDC) uses Latin `ɛ` and `ɔ`. Normalised to those. Nothing else was altered, including the inconsistencies.

## Known gaps

- The printed alphabet comes to 37 items while the text says 36. Not quietly resolved.
- Four of the five nasal vowels have no example word anywhere.
- Counting stops at six, because the lessons stop at six.
- No free audio exists. For a language where pitch changes meaning, that is the real gap, and no amount of reading closes it.

## Files

```
index.html    the page
styles.css    all the styling, light and dark
app.js        the corpus and the whole app, no dependencies
```

No build step, no framework, no package manager. Three files served as they are.

## Running it

Open `index.html` in a browser. That is all.

For local work with correct paths, any static server will do:

```sh
python3 -m http.server 8000
```

## Deploying

Hosted on GitHub Pages from the `main` branch. Every push to `main` redeploys within a minute or two. There is no build, so there is nothing to configure beyond switching Pages on.

## Where progress is stored

In the browser's `localStorage`, under `eleme-kpakpagoo-v3`. It survives reloads and new versions of the site, but it belongs to one browser on one device: it does not follow you to your phone, and clearing site data clears it. Syncing across devices would need a backend, which this deliberately does not have.
