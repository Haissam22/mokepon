alert("Hola, Bienvenido Jugador!!")

function radom(min,max){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}
const btnMascotaJugador= document.querySelector('#mascota-btn');

btnMascotaJugador.addEventListener('click',selectMascotaJugador);

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