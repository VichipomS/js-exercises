
//1
let miNombre = "David"
//2
let miApellido = "Vicencio"
//3
let miEdad = 24
//4
let miMascota = "Manchopilas"
//5
let edadMascota = 2

//6
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//7

let nombreCompleto = miNombre + " " + miApellido
console.log(nombreCompleto)

//8

let textoPresentacion = `Mi nombre es ${miNombre} ${miApellido} tengo ${miEdad} años, el nombre de mi mascota es ${miMascota} y tiene ${edadMascota} años`
console.log(` ${textoPresentacion} `)

let textoTrim = textoPresentacion.trim()
console.log(textoTrim)

//9


let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

//10

const alumno = {
    nombre: "david",
    apellido: "vicencio",
    curso: "Cohort50",
    edad: 24,
    altura: 1.9,
}
console.table(alumno)

console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.curso)
console.log(alumno.edad)
console.log(alumno.altura)

//11

const mascota = {
    nombre: "david",
    peso: 5.5,
    raza: "kiltro",
    edad: 2,
    color: "cafe",
}

// llamada del objeto
console.table(mascota)


// llamada de las propiedades individuales del objeto
console.log(mascota.nombre)
console.log(mascota.peso)
console.log(mascota.raza)
console.log(mascota.edad)
console.log(mascota.color)


//12

const frutas = ["pera", "manzana", "platano", "tomate", "damasco"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//13

//mostrar en pantalla y guardar info del usuario

const edad = prompt("ingrese su edad para poder ingresar al sitio:")
const soyMayorDeEdad = edad >= 18

//responder a la info del usuario

alert(`Soy mayor de edad ${soyMayorDeEdad}`)

//14

// array

const numeros = [5,6,7,8,9] 
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//15

const familia = 
[
    {
        apellido: "vicencio",
        miembros: 5,
        hombres: 3,
        mujeres:2,
        mascota:"no"
    },
    {
        apellido: "valenzuela",
        miembros: 13,
        hombres: 3,
        mujeres:8,
        mascota:"no"
    },
    {
        apellido: "herrera",
        miembros: 4,
        hombres: 2,
        mujeres:2,
        mascota:"si"
    },
    {
        apellido: "diaz",
        miembros: 6,
        hombres: 2,
        mujeres:4,
        mascota:"si"
    },
    {
        apellido: "perez",
        miembros: 4,
        hombres: 1,
        mujeres:3,
        mascota:"si"
    }
]


console.table(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//16

// con jason.stringify
const textoAleatorio =`${frutas[1]} ${numeros[3]} ${JSON.stringify(familia[4])}`
console.log(textoAleatorio)




const familiaApellido = familia[4].apellido
const familiaMiembros = familia[4].miembros
const familiaHombres = familia[4].hombres
const familiaMujeres = familia[4].mujeres
const familiaMascota = familia[4].mascota


// sin jason.stringify nombrando todas las propiedades

const textoaleatorio2 = `${frutas[1]} ${numeros[3]} ${familiaApellido} ${familiaMiembros} ${familiaHombres} ${familiaMujeres} ${familiaMascota}`
console.log(textoaleatorio2)


//mostrando clave y valor a mano

const textoaleatorio3 = `${frutas[1]} ${numeros[3]} apellido:${familiaApellido} miembros:${familiaMiembros} Hombres:${familiaHombres} Mujeres:${familiaMujeres} Mascota:${familiaMascota}`
console.log(textoaleatorio3)

//17

// primero crear un array con las edades a comparar

const variable = [
    Number(prompt("ingrese su edad")),
    Number(prompt("ingrese la edad de su compañero")),
]

console.table(variable)

const edadesIguales = variable[0] == variable[1]
const soyMayor = variable[0] > variable[1]
const soyMenor = variable[0] < variable[1]

console.log(edadesIguales)
console.log(soyMayor)
console.log(soyMenor)


//18


        let edad1 = parseInt(prompt("ingrese edad:"));
        let altura1 = parseInt(prompt("ingrese altura"));

        let puedeSubir = edad1 > 6 && altura1 >= 120;

        let mensaje = puedeSubir ? "Puede subir a la atracción." : "No puede subir a la atracción.";

        console.log(mensaje + " Edad: " + edad1 + " años, Altura: " + altura1 );




//19
