// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

/**
 * Tools
 */

function printError(msg){
    console.error(msg);
}

function removeNoNumbers(array) {
    if ( ! Array.isArray(array) ) {
        printError("This function needs as array");
        return null;
    }
    const output = [];
    for ( item of array) {
        if ( typeof(item) === "number" ) output[output.length] = item
    }
    return output;
}

// Tests
//console.log(removeNoNumbers("sequence"))
//console.log(removeNoNumbers(sequence))

const numberSequence = removeNoNumbers(sequence)

/**
 * Ejercicion 1 y 2 - Crea una función que ordene de forma ascentente / descendente el array sequence.
 */

function switchArrayItems (array, index1, index2) {
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
}

function ordenaArray(array, conditionForSwich) {
    if ( ! Array.isArray(array) ) {
        printError("This function needs as array");
        return null;
    }
    for (let index1 = 0; index1 < array.length; index1++) {
        let currentMinorIdx = index1;
        for (let index2 = index1+1; index2 < array.length; index2++) {
            if ( conditionForSwich( array[currentMinorIdx], array[index2] ) ) currentMinorIdx = index2;
        }
        if (index1 !== currentMinorIdx) switchArrayItems(array, index1, currentMinorIdx)
    }
    return array
}

// Not array
//console.log(ordenaArray("", (n1,n2) => n1 < n2 ));
// Tests
/// Ascendent
console.log(ordenaArray(numberSequence, (n1,n2) => n1 > n2 ));
/// Descendent
console.log(ordenaArray(numberSequence, (n1,n2) => n1 < n2 ));
