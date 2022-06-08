//AL MOMENTO DE DECLARAR LAS VARIABLES NO HACE FALTA PONER EL TIPO DE DATO YA QUE JAVASCRIPT ES DEBILMENTE TIPADO
//tmb se puede declarar una variable con la palabra var aunque no es recomendable porque es facil que ocurran errores
let variable = "Juanma"
let variable4 = "Santi"
let variable2;
let variable3 = true
let variableNumerica = 10
let array = ["java" , "mysql" , "jdbc" , "jpa" , "html" , "css" , "javascript"]
let json = {"Ciudad": "New York", "Pais": "EEUU"}
//array de objetos
let arrayDeObjetos = [
    {"Nombre": "Juanma",
     "Apellido" : "Diez"    
    },

    {"Nombre": "Santi",
     "Apellido" : "Alzamora"    
    },

    {"ciudad": "miami", "Pais": "EEUU", "codigoPostal": "5555"},
]

console.log("") //es similar al System.out.println("") de java
console.log(variable)
console.log(variable2) //si no le ponemos valor a la variable por defecto tiene UNDEFINED
console.log(variable3) //valor booleano
console.log(variableNumerica)
console.log(array)
console.log("Tamaño de mi array: " + array.length)
console.log(array[6])
console.log(json)
console.log(arrayDeObjetos)

//Tipos de funciones
function saludar(){
    console.log("Hola " + variable)
}


console.log("Llamamos a la funcion")
saludar(variable) //usamos la variable que declare mas arriba
 
console.log("------------------")

//Declaramos una constante, en los parentesis van los parametros, si es uno solo puede ir sin parentesis
//al igual que en el contenido, si es una sola linea puede ir sin llaves directamente, en la misma linea de la declaracion
const arrowFunction = (let) => { //funcion flecha o arrow function
    console.log("Hola " + let)
}

console.log("Llamamos a la funcion flecha/arrow function")
arrowFunction(variable4)
console.log("------------------")


//METODOS DE ARRAY MAS USADOS
console.log("Usando bucle For")
for (let i = 0; i < array.length; i++) {  //for comun
    console.log("Elemento " + (i+1) + ": " + array[i])
}


console.log("------------------")
//lo que recibe el foreach es una funcion, en este caso una funcion flecha, o arrow function
console.log("Usando foreach")
array.forEach(element => { //for each
    console.log("Elemento en for each " + element)
});


console.log("------------------")
console.log("Metodo filter")
//creamos un nuevo arreglo con los elementos que cumplan las condiciones
const filtered = array.filter((element) => { 
    if (element.includes("j")) {
        console.log("El elemento que coincide es " + element)
        return element
    }
})


console.log("Este es el array filtrado " + filtered)

console.log("------------------")


console.log("Metodo map")
const arrayEnMayuscula = array.map(    (element) => {  //Creamos un nuevo arreglo modificado segun nuestras necesidades
    return element.toUpperCase() // transoforma el elemento a mayusculas
})


console.log(arrayEnMayuscula)

//metodo find --- podemos encontrar el primer valor que cumpla con la condicion

console.log("------------------")
console.log("Metodo find")
const elementoConP = array.find( (element) => {
    return element.includes("p") //elemento que incluye la letra p en este caso
})


// CONCATENACION DE VARIABLES CON TEXTO  --- DOS OPCIONES
console.log("El primer elemento que tiene la letra p es: " + elementoConP) //con comillas dobles
console.log(`El primer elemento que tiene la letra p es: ${elementoConP}`) // concatenando con backtick