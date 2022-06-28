
let resultado = '';
let marcadorP1 = 0, marcadorP2 = 0;
let valorAleatorio = document.querySelector('#opcion-cpu');
let valorMarcadorP1 = document.querySelector('#jugador1');
let valorMarcadorP2 = document.querySelector('#jugador2');
let valorGanador = document.querySelector('#ganador');


function comparar(player1 , player2){
    if(player1 === player2){
        return 'Empate';
    }
    else{

        if(player1 === 'piedra'){

            if(player2 === 'tijera'){
                return 'player1';
            }
            else{
                return 'player2';
            }
        }
        else if(player1 === 'papel'){

            if(player2 === 'piedra'){
                return 'player1';
            }
            else{
                return 'player2';
            }

        }
        else if(player1 === 'tijera'){

            if(player2 === 'papel'){
                return 'player1';
            }
            else{
                return 'player2';
            }
        }
    }

}


function seleccionar(valorP1){
    let aleatorio = 0;
    let valorP2 = '';

    aleatorio = Math.floor((Math.random() * 3) + 1);

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

    resultado = comparar(valorP1 , valorP2);
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