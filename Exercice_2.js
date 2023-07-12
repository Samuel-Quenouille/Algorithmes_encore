const array1 = [3, 7, 8, 3, 6, 1]

const array2 = [1, 4, 5, 8]

function countBuilding(array) {
    let count = 0

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

// Ligne 6 : Variable count initialisée à 0 pour compter le nombre d'immeubles ayant une vue dégagée vers l'ouest.
// Ligne 7 : Parcourt chaque immeuble du tableau array en utilisant l'index i.
// Ligne 8 : Pour chaque immeuble, on initialise la variable hasView à true, ce qui indique qu'il a une vue dégagée vers l'ouest jusqu'à preuve du contraire.
// Ligne 9 : Cette boucle parcourt les immeubles restants à droite de l'immeuble courant.
//* Ligne 10 à 12 : Si on trouve un immeuble plus grand ou égal à l'immeuble courant, 
//* cela signifie que l'immeuble courant n'a pas de vue dégagée vers l'ouest. Dans ce cas, on met hasView à false et on sort de la boucle avec break.
//** */ Ligne 15 et 16 : Après avoir parcouru tous les immeubles restants à droite de l'immeuble courant, on vérifie si hasView est toujours true.
//** */ Si hasView est true, cela signifie que l'immeuble courant a une vue dégagée vers l'ouest, donc on incrémente count pour compter cet immeuble.
// Ligne 19 : Après avoir parcouru tous les immeubles, la fonction retourne la valeur finale de count, qui représente le nombre total d'immeubles ayant une vue dégagée vers l'ouest.