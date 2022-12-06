//Returns a string input reversed. Can be multiple string etc.
const reverseString = function(word) {
    //recursion method
    if (word === "") return "";
    else {
        return reverseString(word.substr(1)) + word.charAt(0);
    }
};
//The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

//The charAt() method returns the specified character from a string.

// Do not edit below this line
module.exports = reverseString;
