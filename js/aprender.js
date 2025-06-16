console.log("HOLA PROFE")
//alert.log("hola profe")//
//documento.body.innerHTML="<h1>HOLA PROFE<h1>"//
//documento.body.innerText="<h1>HOLA PROFE<h1>"


//VARIALES EN JS =>let,var,const
const edad=18;//constante que no puede ser alterada
let edad_dos=18;//variable para bloques
var nombre="juan caicedo"// vaariable global


//TIPOS DE DATOS entero/decimal, string, booleanos, arrays
var entero =20;
var decimal=20.5;
var string="mi nombre es juan"
var boolean= true //false
var array_string=["lun","mar","mie","jue","vie","sab","dom"];
var array_numerico=[1,2,3,4,5,6,7,8,9];
var array_mixto=[1,2,3,"lun","mar","mie"];

//TIPO DE VARIABLES pascalcasa,camelcase,snake_casa


//operadores aritmeticos => +,-,/,*,%
var suma=entero+decimal;
var resta= decimal - entero;
var multi=decimal * entero;
var divi=decimal / entero;
var modulo=decimal % 2;

//OPERADORES DE COMPARACION

//ESTRUCTURAS DE CONTROL => REPETICION (BUCLES), DE CONDICION (ALES)
//inicializador - comparacion - contador
var impresion="";
for(let i=0; i < array_string.length; i++){
console.log(array_string[i])
impresion=impresion+array_string[i]
}
//Swal.fire(impresion);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-recuperar-usuario");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const correo = document.getElementById("correo").value;
  
        // Simulación de recuperación de usuario
        alert(`Tu usuario ha sido enviado al correo: ${correo}`);
        form.reset();
      });
    }
  });
  

//PARA IMPRIMIR