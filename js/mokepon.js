alert("Hola, Bienvenido Jugador!!")

const btnMascotaJugador= document.querySelector('#mascota-btn');

btnMascotaJugador.addEventListener('click',selectMascotaJugador);

function selectMascotaJugador(){
    const input1= document.querySelector('#Hipodoge');
    const input2= document.querySelector('#Capipepo');
    const input3= document.querySelector('#Ratigueya');

    if(input1.checked){
        alert('seleccionaste a Hipodoge');
    }else if(input2.checked){
        alert('seleccionaste a Capipepo');
    }else if(input3.checked){
        alert('seleccionaste a Ratigueya');
    }else{
        alert('recuerda seleccionar a alguna mascota')
    }
}

