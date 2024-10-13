const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    'пробел': ' ',
};

function decode(expr) {
    simbol = ''
    result = ''
    arr = expr.split('');
    for (let i = 0; i < arr.length; i = i + 10) {
        arr2 = arr.slice(i, i + 10);
        simbol = '';
        for (let i = 0; i < arr2.length; i = i + 2) {
            if (arr2.slice(i, i + 2).join('') == '10') { simbol = `${simbol}.` }
            if (arr2.slice(i, i + 2).join('') == '11') { simbol = `${simbol}-` }
            if (arr2.slice(i, i + 2).join('') == '**') { simbol = 'пробел' }
        }
        console.log(simbol)
        result = result + MORSE_TABLE[simbol];
    }
    return result
}

module.exports = {
    decode
}