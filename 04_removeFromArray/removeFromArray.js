const removeFromArray = function(...arrayNum) {
    
    const array = arrayNum[0];
    return array.filter(val => !arrayNum.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
