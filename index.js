// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

/**
 * Tools
 */

/**
 * Print msg as an error
 * @param {string} msg 
 */
function printError(msg){
    console.error(msg);
}

/**
 * Creates an new array with numbers in array provided as argument
 * @param {array} array 
 * @returns {number} Array
 */
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

const numberSequence = removeNoNumbers(sequence) // Cleaned array

/**
 * Ejercicion 1 y 2 - Crea una función que ordene de forma ascentente / descendente el array sequence.
 */

/**
 * Switch two array items position.
 * @param {Array} array 
 * @param {Array idx} index1 
 * @param {Array idx} index2 
 */
function switchArrayItems (array, index1, index2) {
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
}

/**
 * Order array items in place basis provided control function. If control function isn't provided, order from min to max.
 * @param {number Array} array Array for being ordered.
 * @param {function} conditionForSwich A function who returns boolean indicating if current compared elemets must switched his positions.
 * @returns Same provided array
 */
function ordenaArray(array, conditionForSwich = (n1,n2) => n1 > n2) {
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
/// Default ascendent
console.log(ordenaArray(numberSequence));
/// Ascendent
console.log(ordenaArray(numberSequence, (n1,n2) => n1 > n2 ));
/// Descendent
console.log(ordenaArray(numberSequence, (n1,n2) => n1 < n2 ));

/**
 * Ejercicio 3 - Crea una funcion que calcule la media aritmética de los datos en el array Sequence.
 */

/**
 * Calculates average for values in provided array.
 * @param {number Array} array 
 * @returns number
 */
function media(array) {
    if ( ! Array.isArray(array) ) {
        printError("This function needs as array");
        return null;
    }
    let suma = 0;
    for (let i = 0 ; i < array.length ; i++) suma += array[i];
    return suma/array.length
}

// Tests
console.log(media(numberSequence))

/**
 * Ejercicio 4 - Cálculo de la letra del Documento Nacional de Identidad (DNI)
 */

/**
 * Verify correspondence for number and letter basis spanis DNI number integrity algorithm.
 * @param {number} number 
 * @param {string} char 
 * @returns boolean
 */
function validaDNI(number, char){
    if ( typeof(number) !== "number" || number < 0 || number > 99999999 ) {
        printError("Provided a invalid number.");
        return null
    }
    if ( typeof(char) !== "string" || char.length !== 1) {
        printError("Provided a invalid letter.");
        return null
    }
    const correspondence = char.toUpperCase() === letrasDNI[number%23];
    if (recorrespondencesult) console.log("Todo correcto.")
    else console.log("La letra proporcionada no corresponde con este número de DNI.")
    return correspondence
}

// Tests
//console.log(validaDNI(32668086, "JA"))
//console.log(validaDNI(100000000, "J"))
//console.log(validaDNI(32668085, "J"))
console.log(validaDNI(32668086, "J"))
