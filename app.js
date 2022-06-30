//Codigo Js
let resultado = '';
let marcadorP1 = 0, marcadorP2 = 0;
let valorAleatorio = document.querySelector('#opcion-cpu');
let valorMarcadorP1 = document.querySelector('#jugador1');
let valorMarcadorP2 = document.querySelector('#jugador2');
let valorGanador = document.querySelector('#ganador');

/* Funcion que recibe el valor seleccionado por el Jugador 1 */
function seleccionar(valorP1){
    let aleatorio = 0;
    let valorP2 = '';

    aleatorio = Math.floor((Math.random() * 3) + 1);//Se genera numero aleatorio entre 1 y 3

    //Asignar un valor e imagen al jugador 2 de acuerdo al numero aleatorio
    if(aleatorio === 1){
        valorAleatorio.src = './imagenes/piedra.jpeg';
        valorP2 = 'piedra';
    }
    else if(aleatorio === 2){
        valorAleatorio.src = './imagenes/papel.jpeg';
        valorP2 = 'papel';
    }
    else{
        valorAleatorio.src = './imagenes/tijeras.jpeg';
        valorP2 = 'tijera';
    }

    resultado = comparar(valorP1 , valorP2);// Funcion pendiente -> Compara los valores del jugador 1 y 2
    console.log(resultado);

    if(resultado === 'player1'){
        console.log('punto player1');
        marcadorP1++;
        valorMarcadorP1.textContent = marcadorP1;
        valorGanador.textContent = 'Ganó el jugador 1!!';
    }
    else if(resultado === 'player2'){
        console.log('punto player2');
        marcadorP2++;
        valorMarcadorP2.textContent = marcadorP2;
        valorGanador.textContent = 'Ganó el jugador 2!!';
    }
    else{
        valorGanador.textContent = 'Empate!';
    }
    console.log('P1: ' , marcadorP1 , ' - ' , 'P2: ' , marcadorP2);

    
}


/* Necesitamos una función que se llame: comparar.
   Podrá recibir dos parametros, el valor que escoja el jugador 1 y el valor obtenido aleatoriamente por la otra funcion.
   Debe retornar 'player1' si gano el jugador 1; o 'player2' si es que gano el jugador 2.
   
   Esta funcion de manera general tiene que llevar la logica del juego.*/


   function comparar(valorPlayer1 , valorPlayer2){

    //..........
    
   }