const inputName  = document.getElementById ("nameExample");
const oculto = document.getElementById ("oculto");
let score =0;
let fail=0;

function respuestaCorrecta(){
    score++;
}
function respuestaIncorrecta(){
    fail++;
}


function jugar(){
    let name = inputName.value 
    oculto.innerHTML= `Hola ${name}. <br> Para comenzar selecciona la categoria que quieres jugar. <br></br>
    <button onClick=" cartoon()">Cartoons</button><br></br>
    <button onClick=" pelicula()">Peliculas</button>` 
}
function cartoon(){
    score=0;
    fail=0;
    oculto.innerHTML = `¿Cuál es el cartoons que rompe con los roles de genero ? <br></br>
    <button onClick="respuestaCorrecta(); resp1()"> La pequeña lulú </button><br></br>
    <button onClick="respuestaIncorrecta(); resp1()">Ed, edd, eddy</button><br></br>
    <button onClick="respuestaIncorrecta(); resp1()">Rugrats</button>` 
}
function resp1(){
    oculto.innerHTML = `¿Cuál es la primera serie emitida por cartoons network creada por una mujer? <br></br>
    <button onClick="respuestaCorrecta(); resp2()"> Steven Universe </button><br></br>
    <button onClick="respuestaIncorrecta();resp2()"> Cat Dog </button><br></br>
    <button onClick="respuestaIncorrecta();resp2()"> Hey Arnold </button>`    
}

function resp2(){
    oculto.innerHTML = `¿
Qué cartoons tiene una mujer/ como personaje principal? <br></br>
    <button  onClick="respuestaCorrecta(); totales()"> Hilda y el troll </button><br></br>
    <button id= b2 onClick="respuestaIncorrecta(); totales()"> Hora de aventura </button><br></br>
    <button id= b3 onClick="respuestaIncorrecta(); totales()"> Ricky y Morty </button>  <br></br><br></br>`
}
function totales(){
    oculto.innerHTML = `¿Quieres ver tus resultados? <br></br>
    <button onClick="resultados()">Calcular!</button>`
}
function resultados(){
    oculto.innerHTML = `
    Las respuestas correctas son: ${score} <br></br>
    Las respuestas incorrectas son: ${fail}<br></br>

    <button onClick="jugar()"> Comenzar Nuevamente </button> <br></br>
    <button onClick="jugar()"> Cambiar Categoria </button>`
}
function pelicula(){
    score=0;
    fail=0;
    oculto.innerHTML = `¿Qué pelicula protagoniza uma truman?? <br></br>
    <button onClick="respuestaCorrecta(); com1()"> Kill Bill</button><br></br> 
    <button onClick="respuestaIncorrecta();com1()"> Taxi Driver </button><br></br>
    <button onClick="respuestaIncorrecta(); com1()">La naranja mecÁnica</button>` 
}

function com1(){
    oculto.innerHTML = `¿Cúal de estas peliculas esta basada en un libro? <br></br>
    <button onClick="respuestaIncorrecta(); com2()">Sharknado</button><br></br>
    <button onClick="com2(); respuestaCorrecta()"> El club de la pelea </button><br></br>
    <button onClick="respuestaIncorrecta(); com2()"> Sexo con amor </button>` 

}

function com2(){
    oculto.innerHTML = `¿Cuál de estas peliculas tiene tematica feminista?? <br></br>
    <button onClick="respuestaIncorrecta(); com3()">Talento de Barrio </button><br></br>
    <button onClick="respuestaIncorrecta();com3()"> Que pena tú vida </button><br></br>
    <button onClick="com3(); respuestaCorrecta()"> Mad Max </button>` 

}
function com3(){
    oculto.innerHTML = `¿Quieres ver tus resultados? <br></br>
    <button onClick="resultados()"> Calcular!</button>`

}