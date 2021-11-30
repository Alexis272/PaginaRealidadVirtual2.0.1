const fila = document.querySelector('.contenedor-carousel');
const videos = document.querySelectorAll('.video');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* ---- Evento para flecha derecaha */
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

/* ---- Evento para flecha izquierda */
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

/* ---- PAGINACIÓN ---- */
const numeroPaginas = Math.ceil(videos.length / 5);
for(let i= 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySlelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// ? ---- Hover ----
videos.forEach((video) => {
    video.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
           videos.forEach(video => video.classList.remove('hover'));
           elemento.classList.add('hover');
        },600);
    });
}); 
fila.addEventListener('mouseleave', () => {
    videos.forEach(video => video.classList.remove('hover'));
});