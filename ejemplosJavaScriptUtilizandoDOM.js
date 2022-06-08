//DOM - DOCUMENT OBJECT MODEL --- MODELO DE OBJETOS DEL DOCUMENTO
let parrafo = document.getElementById("parrafo")  //accedemos al elemento html por id
//pueden recibir --- la clase, la etiqueta, y los id
console.log(parrafo) 
//Accemos a los elementos por classname
let section = document.getElementsByClassName("container")
// console.log(section)
let contenedor = section[0] //accedemos al primer elemento, ya que getElementsByClassName nos trae un objeto similar a un array

console.log("Mostramos el contenido del parrafo ------> " + parrafo.innerHTML)
parrafo.innerHTML = "Parrafo modificado con javascript"
// parrafo.textContent = "Parrafo modificado con javascript" //tmb se puede hacer asi
console.log(parrafo)
console.log("Mostramos el contenido del parrafo modificado con js -------> " + parrafo.innerHTML) //solo el contenido
console.log("Mostramos el contenido del parrafo modificado con js -------> " + parrafo.outerHTML) //includia la etiqueta

//AGREGAR ELEMENTOS HTML DINAMICAMENTE
//SELECCIONAMOS EL NODO ("PADRE/CONTENEDOR") DONDE LO QUEREMOS AGREGAR
let parrafoNuevo = document.createElement("p")
parrafoNuevo.textContent = "Soy un parrafo agregado por javascript"
contenedor.appendChild(parrafoNuevo)

//PODEMOS AGREGAR ESTILOS CSS CON JAVASCRIPT --- VARIAS ALTERNATIVAS

//MODIFICAR LOS ESTILOS EN LINEA Y DE A UNO A LA VEZ
//todos los elementos tienen la propiedad style que representa a los estilos en linea

// parrafo.style.color = "red"
// parrafo.style.fontSize = "24px"

//ESTE ELEMENTO QUEDARIA ASI
//<p id="parrafo" style="color: red; font-size: 24px">Parrafo con id</p>

//modifiquemos la section 
contenedor.style.width = "50%"
contenedor.style.background = "grey"
contenedor.style.height = "200px"
contenedor.style.margin = "auto"

//OTRA ALTERNATIVA -- PODEMOS AGREGARLE UNA CLASE AL ELEMENTO HTML QUE YA CONTENGA ESTILOS, ESTO ES UNA BUENA PRACTICA
//YA QUE NO USAMOS ESTILOS EN LINEA

contenedor.className = "ContainerPrincipal" //si tenemos una clase con estilos con este nombre se van a aplicar a este elemento
console.log(contenedor) //vemos como queda el html con todo lo que le hemos agregado

parrafo.className = "parrafoPrincipal"

console.log(contenedor.outerHTML) //vemos como queda el html con todo lo que le hemos agregado


//EVENTOS
// Los eventos de JavaScript permiten la interacción entre las aplicaciones JavaScript y los usuarios.
// Por ejemplo --> cada vez que se pulsa un botón, se produce un evento.

let botonSumar = document.getElementById("sumar");
let botonRestar = document.getElementById("restar");
let unidades = document.getElementById("cantidad");
let precioTotal = document.getElementById("precio");

//addEventListener con esto otorgamos el evento al elemento html
botonSumar.addEventListener("click", () => {
    unidades.textContent = (Number(unidades.textContent)+ 1)
    precioTotal.textContent = (Number(unidades.textContent))*400;
})

botonRestar.addEventListener("click" , () => {
    if (unidades.textContent > 1) {
        unidades.textContent = (Number(unidades.textContent) - 1)
        precioTotal.textContent = (Number(unidades.textContent))*400;
    }
})



//EVENTOS EN FORMULARIO

let inputNombre = document.getElementById("nombre")
let inputApellido = document.getElementById("apellido")
let inputMail = document.getElementById("mail")
let inputContraseña = document.getElementById("contraseña")

let botonRegistro = document.getElementById("registro")

botonRegistro.addEventListener("click" , (e) => {
//evitamos el comportamiento natural de un boton --> enviar informacion por lo tanto se recargaria la pag y perdemos la info
    e.preventDefault() 
    console.log(`Nombre: `, inputNombre.value)
    console.log(`Apellido: `, inputApellido.value)
    console.log(`Mail: `, inputMail.value)
    console.log(`Contraseña:` , inputContraseña.value)
})

inputNombre.addEventListener("change", (e) => { //evento para obtener el valor del input
    console.log(e.target.value)    
})


//BUSCADOR DINAMICO

const productos = [
    {nombre: "Celular" , valor: 50000},
    {nombre: "Televisor" , valor: 80000},
    {nombre: "Cafetera" , valor: 20000},
    {nombre: "Aire acondicionado" , valor: 100000},
    {nombre: "Aspiradora" , valor: 30000}
]
const inputBusqueda = document.getElementById("inputBusqueda")
const listado = document.getElementById("listadoProductos")
const resultados = document.getElementById("resultados")
const botonBusqueda = document.getElementById("botonBusqueda")

const filtrar = () => {
    resultados.innerHTML = ""

    const texto = inputBusqueda.value.toLowerCase()

    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase()

        if (nombre.includes(texto)) {
            resultados.innerHTML += 
            `<li>${producto.nombre} - $${producto.valor}</li>`
        }
    }

        if (resultados.innerHTML === "") {
            resultados.innerHTML = 
            `<li>Producto no encontrado</li>`
        }
}

botonBusqueda.addEventListener("click" , filtrar) //cada vez que apretamos en el boton
inputBusqueda.addEventListener("keyup" , filtrar) //cada vez que apretamos una tecla se activa el evento -- importante hacerlo sobre el input

filtrar()// para que me muestre los productos apenas me cargue la pagina

