let ataqueJugador="";
let ataqueE="";
let combat="";

alert("Hola, Bienvenido Jugador!!")

function radom(min,max){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}
const btnMascotaJugador= document.querySelector('#mascota-btn');
btnMascotaJugador.addEventListener('click',selectMascotaJugador);

const btnFuego=document.querySelector('#btn-fuego');
btnFuego.addEventListener('click',ataqueFuego);

const btnAgua=document.querySelector('#btn-agua');
btnAgua.addEventListener('click',ataqueAgua);

const btnTierra=document.querySelector('#btn-tierra');
btnTierra.addEventListener('click',ataqueTierra);


function selectMascotaJugador(){
    const input1= document.querySelector('#Hipodoge');
    const input2= document.querySelector('#Capipepo');
    const input3= document.querySelector('#Ratigueya');
    const spanNMascota=document.querySelector('#nMascota');


    if(input1.checked){
        alert('seleccionaste a Hipodoge');
        spanNMascota.innerHTML='Hipodoge';
    }else if(input2.checked){
        alert('seleccionaste a Capipepo');
        spanNMascota.innerHTML='Capipepo';
    }else if(input3.checked){
        alert('seleccionaste a Ratigueya');
        spanNMascota.innerHTML='Ratigueya';
    }else{
        alert('recuerda seleccionar a alguna mascota');
    }
    selectMascotaEnemigo();
}

function selectMascotaEnemigo(){
    const AtaqueAleatorio=radom(1,3);
    const spanNMascota=document.querySelector('#nMascotaE');

    if(AtaqueAleatorio == 1){
        spanNMascota.innerHTML="Hipodogue"
        //hipodogue
    }else if( AtaqueAleatorio == 2){
        //Capipepo
        spanNMascota.innerHTML="Capipepo"
    }else if(AtaqueAleatorio ==3){
        //ratigueya
        spanNMascota.innerHTML="Ratigueya"
    }
}

function ataqueFuego(){
    ataqueJugador="Fuego";
    ataqueE=ataqueEnemigo();
    combate();
}

function ataqueAgua(){
    ataqueJugador="Agua";
    ataqueE=ataqueEnemigo();
    combate();
}

function ataqueTierra(){
    ataqueJugador="Tierra";
    ataqueE=ataqueEnemigo();
    combate();
}

function crearMesagge(){
    let mesagge= document.createElement('p');
    mesagge.innerHTML=`Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo ataco con ${ataqueE}. RESULTADO : ${combat} `;
    const contentMessage=document.querySelector('#mensajes');
    contentMessage.appendChild(mesagge);
}

function ataqueEnemigo(){
    
    const Ataque = radom(1,3);
    if( Ataque == 1 ){
        return 'Fuego';
    }else if( Ataque == 2){
        return 'Agua';
    }else {
        return 'Tierra';
    }
}

function combate(){
    if(ataqueJugador==ataqueE){
        combat="Empate";
    }else if(ataqueJugador=="Fuego" && ataqueE=="Tierra"){
        combat="ganaste"
    }else if(ataqueJugador=="Agua" && ataqueE=="Fuego"){
        combat="ganaste"
    }else if(ataqueJugador=="Tierra" && ataqueE=="Agua"){
        combat="ganaste"
    }else{
        combat="PERDISTE"
    }
    crearMesagge()
}
