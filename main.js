function playsonoplastia(idsonoplastia){
    document.querySelector(idsonoplastia).play()
};

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let cont= 0; cont < ListaDeTeclas.length; cont += 1) {
    
    const tecla= ListaDeTeclas[cont];
    const sonoplastia= tecla.classList[1];
    const idAudio= `#som_${sonoplastia}`;
    
    tecla.onclick = function () {
        playsonoplastia(idAudio);
    } 
}

