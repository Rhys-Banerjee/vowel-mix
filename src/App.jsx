import React, { useState } from 'react';

const VowelMixGame = () => {
  const [input, setInput] = useState('');
  const [foundWords, setFoundWords] = useState([]);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [showWordList, setShowWordList] = useState(false);
  
  const easyConsonants = ['H', 'N', 'D'];
  const hardConsonants = ['H', 'N', 'D', 'S'];
  
  const consonants = difficulty === 'easy' ? easyConsonants : hardConsonants;
  
  const easyWords = [
    'ADD', 'ADDED', 'ADDY', 'AID', 'AIDED', 'AND', 'DAD', 'DADDY', 'DAN', 'DANDY',
    'DEAD', 'DEADEN', 'DEADEYE', 'DEADHEAD', 'DEADLY', 'DEED', 'DEEDY', 'DEN', 'DENIED',
    'DID', 'DIDDY', 'DIE', 'DIED', 'DIN', 'DINE', 'DINED', 'DINNED', 'DODO', 'DODOE',
    'DONE', 'DONNA', 'DONNED', 'DUD', 'DUDE', 'DUE', 'DUNE', 'DUN', 'DUNNED', 'DYE',
    'DYED', 'EDDY', 'END', 'ENDED', 'HAD', 'HAND', 'HANDED', 'HANDY', 'HEAD', 'HEADED',
    'HEADHEAD', 'HEADY', 'HEN', 'HENNA', 'HEED', 'HEEDED', 'HID', 'HIDDEN', 'HIDE',
    'HOD', 'HOE', 'HOED', 'HON', 'HONE', 'HONED', 'HONEY', 'HONEYED', 'HOOD', 'HOODED',
    'HOUND', 'HOUNDED', 'HUE', 'HUED', 'HUN', 'NAE', 'NAH', 'NANA', 'NANNY', 'NAY',
    'NEE', 'NEED', 'NEEDED', 'NEEDY', 'NOD', 'NODDED', 'NODDY', 'NODE', 'NON', 'NONE',
    'NOON', 'NUN', 'ODD', 'ODE', 'ONE', 'UNDO', 'UNDID', 'UNDINE', 'UNDONE', 'UNHAND',
    'UNHANDED', 'UNHEEDED', 'UNHIDDEN', 'YEA', 'YEANED', 'YEN', 'YENNED', 'YOD', 'YON',
    'YOND', 'YOU'
  ];
  
  const hardWords = [
    ...easyWords,
    'AHS', 'ANDS', 'ASH', 'ASHED', 'ASHEN', 'ASHENED', 'ASIDE', 'ASS', 'ASSES', 'DADS',
    'DAHS', 'DAIS', 'DASH', 'DASHED', 'DASHES', 'DEASH', 'DEASHED', 'DENS', 'DEODANDS',
    'DIADEM', 'DISH', 'DISHED', 'DISHES', 'DISNEST', 'DISS', 'DISSED', 'DISSES', 'DODOES',
    'DODO', 'DODOS', 'DOES', 'DON', 'DONS', 'DOSE', 'DOSED', 'DOSES', 'DUDS', 'DUDES',
    'DUNES', 'DUNS', 'DYES', 'ENDS', 'HAD', 'HADES', 'HADDEST', 'HANDS', 'HANDSOME',
    'HAS', 'HEAD', 'HEADS', 'HENS', 'HESS', 'HIDES', 'HIND', 'HINDS', 'HIS', 'HISS',
    'HISSED', 'HISSES', 'HODS', 'HOES', 'HOISE', 'HOISED', 'HOISIN', 'HONE', 'HONED',
    'HONES', 'HONS', 'HOODS', 'HOSED', 'HOSEN', 'HOSS', 'HOUNDS', 'HOUSE', 'HOUSED',
    'HUES', 'HUNS', 'HYENAS', 'IDEAS', 'INANE', 'INANED', 'INANES', 'INDEED', 'INS',
    'INSIDE', 'INSIDES', 'INS', 'NAES', 'NAHS', 'NANAS', 'NANNIES', 'NAYS', 'NEEDS',
    'NEONED', 'NEONEDS', 'NINES', 'NODDED', 'NODES', 'NODS', 'NOISE', 'NOISED', 'NOISES',
    'NOISINESS', 'NOISY', 'NONAS', 'NONES', 'NOONS', 'NOSE', 'NOSED', 'NOSES', 'NOSINESS',
    'NOSY', 'NUISANCE', 'NUNS', 'OHS', 'ONES', 'SAY', 'SAD', 'SADDEN', 'SADDENED', 'SADDENS',
    'SADNESS', 'SAID', 'SAND', 'SANDED', 'SANDS', 'SANDY', 'SANE', 'SANED', 'SANES', 'SANS',
    'SASS', 'SASSED', 'SASSES', 'SEA', 'SEAS', 'SEDAN', 'SEDANS', 'SEND', 'SENDS', 'SHADE',
    'SHADED', 'SHADES', 'SHADINESS', 'SHADY', 'SHAY', 'SHAYS', 'SHE', 'SHED', 'SHEDS',
    'SHIED', 'SHIN', 'SHINE', 'SHINED', 'SHINES', 'SHINNY', 'SHINS', 'SHINY', 'SHISO',
    'SHOD', 'SHOE', 'SHOED', 'SHOES', 'SHONE', 'SHOO', 'SHOOED', 'SHOOS', 'SHOON',
    'SHY', 'SHYNESS', 'SIDE', 'SIDED', 'SIDES', 'SIN', 'SINE', 'SINES', 'SINNED', 'SINS',
    'SIS', 'SISES', 'SISSIES', 'SISSY', 'SNIDE', 'SNIDENESS', 'SNIDEY', 'SNOOD', 'SNOODED',
    'SNOODS', 'SON', 'SONS', 'SOUND', 'SOUNDED', 'SOUNDS', 'SOY', 'SOYAS', 'STAND',
    'STANDS', 'STAID', 'SUN', 'SUNNAH', 'SUNNAHS', 'SUNNED', 'SUNS', 'SUNDAE', 'SUNDAES',
    'SUNDAYS', 'SUDDEN', 'SUDDENNESS', 'SUDSY', 'SUDS', 'SYNOD', 'SYNODS', 'UNDOES',
    'UNDOS', 'UNSAID', 'UNSAID', 'UNSANDY', 'UNSHED', 'UNSAID', 'YEA', 'YEAS', 'YEN',
    'YENS', 'YES', 'YESSED', 'YESSES', 'YOD', 'YODS', 'YON', 'YOND', 'YOU', 'YOUS'
  ];
  
  const validWords = difficulty === 'easy' ? easyWords : hardWords;
  
  const pangrams = validWords.filter(word => 
    consonants.every(c => word.includes(c))
  );

  const handleSubmit = () => {
    const word = input.toUpperCase().trim();
    
    if (word.length < 3) {
      setMessage('Words must be at least 3 letters');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    const wordConsonants = word.split('').filter(c => !'AEIOUY'.includes(c));
    const validConsonants = wordConsonants.every(c => consonants.includes(c));
    
    if (!validConsonants) {
      setMessage(`Only use consonants: ${consonants.join(', ')}`);
      setTimeout(() => setMessage(''), 2000);
      return;
    }
    
    const usesGivenConsonant = consonants.some(c => word.includes(c));
    if (!usesGivenConsonant) {
      setMessage('Must use at least one given consonant');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    if (foundWords.some(w => w.word === word)) {
      setMessage('Already found!');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    if (validWords.includes(word)) {
      const isPangram = pangrams.includes(word);
      const points = word.length === 3 ? 1 : word.length === 4 ? 2 : word.length;
      const totalPoints = points + (isPangram ? 7 : 0);
      
      setFoundWords([...foundWords, { word, isPangram, points: totalPoints }]);
      setMessage(isPangram ? '🎉 Pangram! (uses all consonants)' : 'Great!');
      setInput('');
      setTimeout(() => setMessage(''), 2000);
    } else {
      setMessage('Not in word list');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setFoundWords([]);
    setInput('');
    setMessage('');
  };

  const getTotalPoints = () => {
    return foundWords.reduce((sum, item) => sum + item.points, 0);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-serif tracking-wide text-center">Vowel Mix</h1>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto px-4 py-8 w-full">
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => handleDifficultyChange('easy')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              difficulty === 'easy'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => handleDifficultyChange('hard')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              difficulty === 'hard'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Hard
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold mb-2">Create words using these consonants</h2>
          <p className="text-gray-600 text-sm mb-6">
            Mix in vowels (A, E, I, O, U, Y). Repeat letters as needed. Words must be at least 3 letters.
          </p>
          
          <div className="inline-flex gap-3 mb-6">
            {consonants.map((letter, idx) => (
              <div
                key={idx}
                className="w-16 h-16 bg-gray-900 text-white rounded-lg flex items-center justify-center text-2xl font-bold"
              >
                {letter}
              </div>
            ))}
          </div>

          <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg mb-6">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Your Score</div>
            <div className="text-2xl font-bold text-gray-900">
              {getTotalPoints()} <span className="text-gray-400 text-lg">points</span>
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {foundWords.length} of {validWords.length} words
            </div>
          </div>
          
          <div className="mt-4">
            <button
              onClick={() => setShowWordList(!showWordList)}
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              {showWordList ? 'Hide' : 'Show'} all accepted words
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a word..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-gray-900 focus:outline-none"
              autoFocus
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </div>
          {message && (
            <div className={`text-center mt-3 font-semibold ${
              message.includes('Pangram') ? 'text-yellow-600' : 
              message.includes('Great') ? 'text-green-600' : 
              'text-gray-600'
            }`}>
              {message}
            </div>
          )}
        </div>

        {showWordList && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              All Accepted Words ({validWords.length})
            </h3>
            <div className="text-sm text-gray-600 max-h-96 overflow-y-auto">
              {validWords.map((word, idx) => (
                <span key={idx}>
                  {word}
                  {pangrams.includes(word) && <span className="text-yellow-600">★</span>}
                  {idx < validWords.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {foundWords.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Your Words ({foundWords.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {foundWords.map((item, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    item.isPangram
                      ? 'bg-yellow-100 text-yellow-900 border-2 border-yellow-400'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {item.word}
                  {item.isPangram && (
                    <span className="ml-2 text-yellow-600">★</span>
                  )}
                  <span className="ml-2 text-xs text-gray-500">+{item.points}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-sm text-gray-600 space-y-2 border-t border-gray-200 pt-6">
          <p className="font-semibold text-gray-900">How to play:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Create words using the given consonants</li>
            <li>Mix in any vowels (A, E, I, O, U, Y) anywhere in the word</li>
            <li>Words must be at least 3 letters long</li>
            <li>You can repeat any letter as many times as needed (e.g., DAD, DEED, NANNY)</li>
            <li>Not all consonants need to be used in every word</li>
            <li><strong>Pangrams</strong> (★) use all consonants and earn bonus points</li>
            <li><strong>Easy mode:</strong> 3 consonants • <strong>Hard mode:</strong> 4 consonants</li>
          </ul>
          <div className="mt-4 text-xs text-gray-500">
            <p className="font-semibold mb-1">Scoring:</p>
            <p>3 letters = 1 pt • 4 letters = 2 pts • 5+ letters = word length • Pangrams = +7 bonus</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        March 8, 2026 • Puzzle #1
      </div>
    </div>
  );
};

export default VowelMixGame;