const array1 = [3, 7, 8, 3, 6, 1]

const array2 = [1, 4, 5, 8]

function countBuilding(array) {
    let count = 1;
    let maxHeight = array[array.length - 1];

    for (let i = array.length - 2; i >=0; i--) {
        if (array[i] > maxHeight) {
            count++;
            maxHeight = array[i];
        }
    }

    return count;
};

console.log(countBuilding(array1));
console.log(countBuilding(array2));