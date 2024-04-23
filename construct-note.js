// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterFreq = {};
    const messageFreq = {};

//frequency counter of letters
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

// frequency counter for message
    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

// compare message frequency with lettters frequency
    for (let char in messageFreq) {
        if (!letterFreq[char]) {
            return false;
        }
        if (messageFreq[char] > letterFreq[char]){
            return false;
        }
    }
    return true;
}
