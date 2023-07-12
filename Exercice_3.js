const array1 = [10, 15, 3, 7]
const k1 = 17

const array2 = [1, 8, 10, 21]
const k2 = 19

function Sum(array, k) {
    const numbers = new Set();
    
    for (let i = 0; i < array.length; i++) {
        const complement = k - array[i];

        if (numbers.has(complement)) {
            return true;
        }
        numbers.add(array[i]);
    }
    
    return false;
}

console.log(Sum(array1, k1));
console.log(Sum(array2, k2));

