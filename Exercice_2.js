const array1 = [3, 7, 8, 3, 6, 1]

const array2 = [1, 4, 5, 8]

function countBuilding(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let sunsetView = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] >= array[i]) {
                sunsetView = false;
                break;
            }
        }
        if (sunsetView) {
            count++;
        }
    }

    return count;
};

console.log(countBuilding(array1));
console.log(countBuilding(array2));