let ataqueJugador="";
let ataqueE="";
let combat="";
let Vjugador=3;
let Venemigo=3;
const btnMascotaJugador= document.querySelector('#mascota-btn');
const btnFuego=document.querySelector('#btn-fuego');
const btnAgua=document.querySelector('#btn-agua');
const btnTierra=document.querySelector('#btn-tierra');
const btnReset=document.querySelector('#btn-reset');
const input1= document.querySelector('#Hipodoge');
const input2= document.querySelector('#Capipepo');
const input3= document.querySelector('#Ratigueya');
const spanNMascota1=document.querySelector('#nMascota');
const spanNMascota2=document.querySelector('#nMascotaE');
const seleccionarAtaque=document.querySelector('#SeleccionarAtaque');
const seleccionarMascota=document.querySelector('#SeleccionarMascota');
const contentMessageJ=document.querySelector('#ataquesJugador');
const contentMessageE=document.querySelector('#ataquesEnemigo');
//span vidas enemigo
const SVE=document.querySelector('#Venemigo');
//span vidad jugador
const SVJ=document.querySelector('#Vjugador');

const contentMessage=document.querySelector('#resultado');

class Mokepon{
    constructor (nombre, foto, vida){
        this.nombre=nombre;
        this.foto=foto;
        this.vida=vida;
    }
}

let Hipodoge= new Mokepon ('Hipodoge','./assets/hipodoge.png',3);
let Capipepo= new Mokepon ('Capipepo','./assets/capipepo.png',3);
let Ratigueya= new Mokepon ( 'Ratigueya','./assets/mokepon_ratigueya.webp',3);

document.addEventListener('DOMContentLoaded',()=>{
    
    btnMascotaJugador.addEventListener('click',selectMascotaJugador);

    btnFuego.addEventListener('click',ataqueFuego);

    btnAgua.addEventListener('click',ataqueAgua);

    btnTierra.addEventListener('click',ataqueTierra);

    btnReset.addEventListener('click',()=>{
        window.location.href="./mokepon.html"; 
    })
    
})

function radom(min,max){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}



function selectMascotaJugador(){
    


    if(input1.checked){
        alert('seleccionaste a Hipodoge');
        spanNMascota1.innerHTML='Hipodoge';
    }else if(input2.checked){
        alert('seleccionaste a Capipepo');
        spanNMascota1.innerHTML='Capipepo';
    }else if(input3.checked){
        alert('seleccionaste a Ratigueya');
        spanNMascota1.innerHTML='Ratigueya';
    }else{
        alert('recuerda seleccionar a alguna mascota');
    }
    selectMascotaEnemigo();
}

function selectMascotaEnemigo(){
    const AtaqueAleatorio=radom(1,3);

    if(AtaqueAleatorio == 1){
        spanNMascota2.innerHTML="Hipodogue"
        //hipodogue
    }else if( AtaqueAleatorio == 2){
        //Capipepo
        spanNMascota2.innerHTML="Capipepo"
    }else if(AtaqueAleatorio ==3){
        //ratigueya
        spanNMascota2.innerHTML="Ratigueya"
    }
    showSectionAtaques();
}
function showSectionAtaques(){
    
    seleccionarAtaque.style.display="flex";
    
    seleccionarMascota.style.display="none";

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
    const mesaggeJugador= document.createElement('p');
    mesaggeJugador.innerHTML=`atacó con ${ataqueJugador}`;
    contentMessageJ.appendChild(mesaggeJugador);

    const mesaggeEnemigo=document.createElement('p');
    mesaggeEnemigo.innerHTML=`ataco con ${ataqueE}`
    contentMessageE.appendChild(mesaggeEnemigo)
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
        Venemigo--
        combat="GANASTE";
        SVE.innerHTML=Venemigo;
    }else if(ataqueJugador=="Agua" && ataqueE=="Fuego"){
        combat="GANASTE";
        Venemigo--
        SVE.innerHTML=Venemigo;
    }else if(ataqueJugador=="Tierra" && ataqueE=="Agua"){
        combat="GANASTE";
        Venemigo--
        SVE.innerHTML=Venemigo;
    }else{
        combat="PERDISTE";
        Vjugador--
        SVJ.innerHTML=Vjugador;
    }
    vidas()
    
}

function vidas() {
    if(Vjugador==0){
        End("LO SENTIMOS PERO HAS PERDIDO!")
        btnAgua.disabled=true;
        btnFuego.disabled=true;
        btnTierra.disabled=true;
        
    }else if(Venemigo==0){
        End("Felicitacioneeees GANASTEEE")
        btnAgua.disabled=true;
        btnFuego.disabled=true;
        btnTierra.disabled=true;
        
    }else{
        crearMesagge()
    }
}

function End(result){
    let mesagge= document.createElement('p');
    mesagge.innerHTML=result;
    contentMessage.appendChild(mesagge);
    
    btnReset.style.display="unset";
}