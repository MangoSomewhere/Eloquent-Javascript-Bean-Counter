// create functions to count letter 'b' and a user specified letter to be counter
// Function that returns the number of uppercase 'B's in a string



let word = 'Backwards';
let specifiedChar = 'a'

function countBs (word) {
    let pos = 0;
    let charCounter = 0;
    for (pos = 0 ;pos < word.length; pos ++) {
        if (word[pos] === 'B') {
            charCounter ++
        }
        else {continue};
    }
    
    console.log(charCounter);
}
countBs(word);

function countChar (word, specifiedChar) {
    let pos = 0;
    let charCounter = 0;
    for (pos = 0; pos < word.length; pos ++) {
        if (word[pos] === specifiedChar) {
            charCounter ++;
        }
        else {continue};
    }
    console.log(charCounter);
}

countChar(word,specifiedChar)
/* $$$$ Function to check if a single letter string is an uppercase B, producing yes

let a = 'b';
function check (a) {
    if (a === 'B') {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}
check (a);
*/



