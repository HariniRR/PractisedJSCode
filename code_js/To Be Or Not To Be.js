function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Example usage:
try {
    console.log(expect(5).toBe(5)); // true
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).toBe(null)); // Throws "Not Equal"
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).notToBe(null)); // true
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).notToBe(5)); // Throws "Equal"
} catch (error) {
    console.log({ error: error.message });
}
