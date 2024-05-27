//-----piedra papel o tijeras-----\\

//variables
let contador_partidas = 0 
let corte =  0
let partidas_maquina = 0 
let partidas_jugador = 0
let puntos_jugador = 0
let puntos_maquina = 0
let eleccion_j;


//funciones
function empate(eleccion_j, eleccion_m){
    console.log('Has elegido ', eleccion_j, ' y la maquina a elegido ', eleccion_m )
    console.log('Empate, nadie suma puntos')
}
function victoria_j(eleccion_j, eleccion_m){
console.log('Has elegido ', eleccion_j, ' y la maquina a elegido ', eleccion_m )
console.log('Usted suma un punto')
puntos_jugador = puntos_jugador + 1
}
function victoria_m(eleccion_j, eleccion_m){
console.log('Has elegido ', eleccion_j, ' y la maquina a elegido ', eleccion_m )
console.log('La maquina sumas un punto')
puntos_maquina = puntos_maquina + 1
}



//partidas
alert('Bienvenido Jugador (tutor o profe), espero se divierta y encuentre todo en condiciones, Un saludo :D')
while (true){
    //reset
    puntos_jugador = 0
    puntos_maquina = 0
    //inicio
    contador_partidas = contador_partidas + 1
    alert('Una nueva ronda a iniciado, partida numero '+ contador_partidas+ '!')
    console.log('_____________________||_____________________')
    console.log('Una nueva ronda a iniciado, partida numero ', contador_partidas, '!')
    console.log('_____________________||_____________________')
    //rondas
    while ((puntos_jugador <= 2) && (puntos_maquina <= 2)){
        //eleccion jugador
        eleccion_j = prompt('elija por escrito piedra, papel o tijeras').toLowerCase()
        while ((eleccion_j != 'piedra') && (eleccion_j != 'papel') && (eleccion_j != 'tijeras')) {
            eleccion_j = prompt('porfavor elija SOLO entre piedra, papel o tijeras ಠ_ಠ').toLowerCase()
        }
        //eleccion maquina
        let eleccion_m = Math.floor((Math.random() * 100) + 1)
        if (eleccion_m <= 33) {
            eleccion_m = 'piedra'
        }
        else if (eleccion_m <= 66) {
            eleccion_m = 'papel'
        }
        else {
            eleccion_m = 'tijeras'
        }
        //comparaciones
        //empates
if ((eleccion_j == 'piedra') && (eleccion_m == 'piedra')){
    empate('piedra', 'piedra')
}
else if ((eleccion_j == 'papel') && (eleccion_m == 'papel')){
    empate('papel', 'papel')
}
else if ((eleccion_j == 'tijeras') && (eleccion_m == 'tijeras')){
    empate('tijeras', 'tijeras')
}
//victoria jugador
if ((eleccion_j == 'piedra') && (eleccion_m == 'tijeras')){
    victoria_j('piedra', 'tijeras')
}
else if ((eleccion_j == 'papel') && (eleccion_m == 'piedra')){
    victoria_j('papel', 'piedra')
}
else if ((eleccion_j == 'tijeras') && (eleccion_m == 'papel')){
    victoria_j('tijeras', 'papel')
}
//victoria maquina
if ((eleccion_j == 'piedra') && (eleccion_m == 'papel')){
    victoria_m('piedra','papel')
}
else if ((eleccion_j == 'papel') && (eleccion_m == 'tijeras')){
    victoria_m('papel','tijeras')
}
else if ((eleccion_j == 'tijeras') && (eleccion_m == 'piedra')){
    victoria_m('tijeras','piedra')
}
console.log('--------------------[R]--------------------')
console.log('-------------MARCADOR DE RONDA-------------')
console.log('--------------------[R]--------------------')
console.log('Jugador ', puntos_jugador)
console.log('Maquina ', puntos_maquina)
    }
    console.log('----------------------[+]---------------------')
    console.log('-------------MARCADOR DE PARTIDAS-------------')
    console.log('----------------------[+]---------------------')
    switch(true){
        case puntos_jugador > puntos_maquina:
            console.log('El jugador se lleva la mano y suma 1 partida a su favor')
            partidas_jugador = partidas_jugador + 1
            console.log('Jugador ', partidas_jugador)
            console.log('Maquina ', partidas_maquina)
            break;
        case puntos_jugador < puntos_maquina:
            console.log('La maquina, se lleva la mano y suma 1 partida a su favor')
            partidas_maquina = partidas_maquina + 1
            console.log('Jugador ', partidas_jugador)
            console.log('Maquina ', partidas_maquina)
            break;
    }    
    //salida del bucle principal
    corte = prompt('Si desea salir del juego escriba "salir" de lo contrario escriba "continuar"').toLowerCase()
    if (corte == 'salir'){
        console.log('Muchas gracias por jugar, el juego a finalizado...')
        break
    }
    else if (corte == 'continuar'){
        console.log('A elegido continuar, a continuacion iniciara otra partida')
    }
    else if ((corte != 'salir') && (corte != 'continuar')){
        while (true){
            alert('Eleccion invalida')
            corte = prompt('Porfavor elija entre salir/continuar').toLowerCase()
            if((corte == 'salir') || (corte == 'continuar')){
                console.log('Gracias por elegir :D')
                break
            }
            else{
                alert('Lea bien porfa ಠ_ಠ')
            }
        }
    }
    if(corte == 'salir'){
        console.log('Muchas gracias por jugar, el juego a finalizado...')
        break
    }
}

//salidas
console.log('___________________(0___________________')
console.log('-------------MARCADOR FINAL-------------')
console.log('___________________(0___________________')
console.log('Usted gano: '+ partidas_jugador + ' partidas')
console.log('La maquina gano: ' + partidas_maquina + ' partidas')

switch(true){
    case puntos_jugador > puntos_maquina:
        alert('Felicidades usted le ha ganado a la maquina!')
        alert('Su premio es mi reconocimiento, muchas felicidades ;)')
        break;
    case puntos_jugador < puntos_maquina:
        alert('Ohhh! que pena usted perdio')
        alert('No se desanime, quizas la proxima le vaya mejor! :D')
        break;
    case puntos_jugador == puntos_maquina:
        alert('Wow! un empate, no me lo esperaba (enrealidad si por eso puse este mensaje XD)')
        alert('Quiza la proxima partida sea victoria! o no ಠ_ಠ')
        break;
}