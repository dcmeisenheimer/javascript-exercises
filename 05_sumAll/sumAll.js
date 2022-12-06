const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
};

//Input = 1 & 4
//Output = 1 + 2 + 3 + 4 = 10

//Takes the values of the first digit as begining index.
//Take the Values of the ending digit as the end of index.
// I will be added to a sum variable 

//Constraints
//First parameter and second parameter size is unknown
    //Must figure out which is bigger before for loop.
//Non numbers must be checked and if it causes an error return ERROR

// Do not edit below this line
module.exports = sumAll;
