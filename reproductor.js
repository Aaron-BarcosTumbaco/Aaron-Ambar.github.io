const audio = document.getElementById('audio');
const titulo = document.getElementById('titulo-cancion');
const btnPrev = document.getElementById('btn-prev');
const btnPlay = document.getElementById('btn-play');
const btnNext = document.getElementById('btn-next');
const playIcon = document.getElementById('play-icon');


const canciones = [
    'musica/My Universe (Seungmin, I.N Feat. Changbin).mp3',
    'musica/Stray Kids CASE 143.mp3',
    'musica/BTS - Save Me.mp3',
    'musica/Reik - Yo Quisiera.mp3',
    'musica/Reik - Creo En Ti.mp3',
    'musica/Panic! At The Disco - House of Memories.mp3',
    'musica/PLAY LOVE - ZARCORT Y TOWN.mp3',
    'musica/I Wouldnt Mind - Lyrics.mp3', //yo se que el nombre es I Wouldn't Mind, solo que no se lo de la '' xd
    'musica/El Vega - Te encontre.mp3',
    'musica/Lua - Pensando en ti.mp3',
    'musica/Morat - Aprenderte a quererte.mp3',
    'musica/Morat, Sebastián Yatra - Bajo La Mesa.mp3',
    'musica/Por Fin Te Encontré  - Cali y El Dandee feat. Juan Magán & Sebastián Yatra.mp3'
]

let songIndex = 0;

function leerCancion(cancion) {
    audio.src = canciones[cancion];
    const nombreCancion = canciones[cancion].split('/').pop();
    titulo.textContent = nombreCancion
    
}

leerCancion(songIndex);

btnPlay.addEventListener('click', function(){
    if (audio.paused) {
        audio.play();
        playIcon.src = 'fondo/bx-pause.png'
    } else {
        audio.pause();
        playIcon.src = 'fondo/bx-play.png'
    }
});
  
btnNext.addEventListener('click', function() {
    songIndex = (songIndex + 1) % canciones.length;
    leerCancion(songIndex);
    if (audio.paused) {
        audio.play();
    }
});



// Galeria

const gallery = document.getElementById('galeria');
const images = gallery.getElementsByTagName('img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.display = 'none'; // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block'; // Muestra la siguiente imagen
}

setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
