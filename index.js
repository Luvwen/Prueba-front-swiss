// Forma 1: funcional

// const checkWordAnagram = (word, word2) => {
//     return word.trim().split('').reverse().join('') === word2.trim() ? true : false;
// };

// Forma 2: bucle for
const checkWordAnagram = (word, word2) => {
    const trimmedWord = word;
    const trimmedWord2 = word2;
    for (let i = 0; i < trimmedWord.length; i++) {
        if (trimmedWord[i] !== trimmedWord2[i]) {
            return false;
        }
    }
    return true;
};
console.log(checkWordAnagram('menem', 'menem'));

const reverseInteger = (number) => {
    const numberToStr = number.toString();
    if (numberToStr.charAt(0) === '-') {
        return parseInt(
            '-' + numberToStr.slice(1).split('').reverse().join('')
        );
    } else {
        return parseInt(numberToStr.split('').reverse().join(''));
    }
};

console.log(reverseInteger(35));
