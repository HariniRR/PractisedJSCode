/**
 * @param {number} n
 * @return {Function} counter function
 */
var createCounter = function(n) {
    let current = n;
    return function() {
        return current++;
    };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); 

const counterNegative = createCounter(-2);
console.log(counterNegative()); // -2
console.log(counterNegative()); // -1
console.log(counterNegative()); // 0
console.log(counterNegative()); // 1
console.log(counterNegative()); // 2