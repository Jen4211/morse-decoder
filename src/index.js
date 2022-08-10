const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let sentence = '';
    for (let i = 0; i < expr.length; i += 10) {
      let letter = expr.substring(i, i + 10);
      if(letter === '**********') {
        sentence = sentence + ' ';
      } else{
        let newLetter = letter.replaceAll('00','');
        let newLetter2 = newLetter.replaceAll('10','.');
        let newLetter3 = newLetter2.replaceAll('11','-');
        let world = MORSE_TABLE[newLetter3];
        sentence = sentence + world;
      }
    }
    return sentence;
  }

module.exports = {
    decode
}