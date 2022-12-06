const repeatString = function(word, num) {
    if(Math.sign(num) === -1) {
        return 'ERROR';
    }
    else {
        let combined = "";
        for (let index = 0; index < num; index++) {
            combined += word;
        }
        return combined;
    }
};

// Do not edit below this line
module.exports = repeatString;
