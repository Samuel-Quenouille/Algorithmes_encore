const array1 = [10, 15, 3, 7]
const k1 = 17

const array2 = [1, 8, 10, 21]
const k2 = 19

function Sum(array, k) {
    for (let i = 0; i < array.length; i++) { 
        for (let j = i + 1; j < array.length; j++) { 
            if (array[i] + array[j] === k) {
                return true;
            }
        }
    }
    
    return false;
};

console.log(Sum(array1, k1));
console.log(Sum(array2, k2));

// Ligne 8 : initialise une variable i à 0 et crée une boucle qui s'exécutera tant que i est inférieur à la longueur du tableau array.
// Ligne 9 : initialise une variable j à i + 1 (le prochain élément après i) et crée une boucle interne qui s'exécutera tant que j est inférieur à la longueur du tableau array. Cela permet d'éviter de vérifier les paires déjà vérifiées dans les itérations précédentes.

