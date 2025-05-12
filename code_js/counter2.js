/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init; // Store the current value

    return {
        increment: () => ++current, // Increments and returns the new value
        decrement: () => --current, // Decrements and returns the new value
        reset: () => (current = init) // Resets `current` to initial value
    };
};

// Example usage:
const Fivecounter = createCounter(5);
console.log(Fivecounter.increment()); // 6
console.log(Fivecounter.reset()); // 5
console.log(Fivecounter.decrement()); // 4

const Zerocounter = createCounter(0);
console.log(Zerocounter.increment()); // 1
console.log(Zerocounter.increment()); // 2
console.log(Zerocounter.decrement()); // 1
console.log(Zerocounter.reset()); // 0
console.log(Zerocounter.reset()); // 0
