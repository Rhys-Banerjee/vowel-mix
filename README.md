# Vowel Mix

A proof-of-concept of a daily word puzzle game where you create words using given consonants and any vowels. Built with React, Vite, and Tailwind CSS.

<img width="904" height="803" alt="image" src="https://github.com/user-attachments/assets/420beba7-596e-4f25-a379-b3608f9a0d80" />


## About

Vowel Mix is a word puzzle game inspired by NYT-style games, specifically Spelling Bee. Players are given a set of consonants and must create as many valid English words as possible by mixing in vowels (A, E, I, O, U, Y).

There are two difficulty modes, Easy (3 consonants) and Hard (4 consonants).

## Local Development

### Prerequisites

- Node.js v14.18+ (tested on v24.14.0)
- npm

### Installation

1. Clone the repository
```bash
   git clone 
   cd vowel-mix
```

2. Install dependencies
```bash
   npm install
```

3. Run the development server
```bash
   npm run dev
```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` folder.

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **JavaScript/JSX** - Language


## Future Enhancements
Here's a list of things that I think would eventually be cool to add:

- Daily puzzle generation with algorithmic consonant selection
- Integration with a real dictionary API
- Local storage to save progress
- Share results feature
- Expanded word lists
- Hints system
- Timer/timed mode
