# JavaScript Halloween Nigthmare

Se acompañan las soluciones propuestas para los ejercicios. Se crean, adicionalemnte, un par de funciones adicionales para imprimir errores y limpiar los elemento improcedentes del array.

## Ejercicio 1 y 2:

Función para ordenar los elementos de un array. 

### a.- Método de burbuja:

En lugar de hacer varias funciones para realizar múltiples ordenamientos se realiza una función de orden superior que acepta una función que determina cuando es necesario conmutar la posición de los elementos comparados.

Propongo una optimización para el ordenamiento por burbuja que evita conmutar el orden de los elementos comparados mientras no ha encontrado la menor de las posibilidades en el array, a costa de consumir la memoria necesaria para un índice del array.

Refactorizo el procedimiento para conmutar la posición de dos elementos.

### b.- Merge sort:

Refactorizo el algoritmo en diferentes fases para simplificar su acometida:
* División del array en sus elementos.
* Unión de un par de arrays ordenados de elementos.
* Unión sistemática de pares de elementos.
* Llamada estructurada a las funciones anteriores para completar el algoritmo.

Se emplea recursividad para las funciones de unión de arrays.
Para la ordenación de los elementos se emplean los métodos split y push compuestos como parámetros y funciones de primer orden para optimizar el empleo de memoria mediante programación funcional, moviendo punteros en lugar de datos.

Durante la escritura del código se emplea *test-driven development* para comprobar la consecución de los requisitos.

## Ejercicio 3:

Calcula la media de los valores del array proporcionado.

## Ejercicio 4:

Valida la letra para un número de DNI.

Sa añade alguna validación adiciona para parámetros de la función y se intenta expresar de forma óptima el algoritmo proporcionado para el ejercicio.

Adicionalmente a los mensajes exigidos por requerimientos, la funcion devuelve un booleano indicando el resultado de la validación.

## Ejecución:
```bash
node index.js
```

## Tests:
```bash
npm install
npm run test
```

## 
