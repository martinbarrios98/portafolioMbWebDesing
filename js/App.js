import { mostrarPaginas } from "./views/paginas.js";


document.addEventListener('DOMContentLoaded', async e =>{

    mobileMenu();
    animacionEncabezados();
    scrollInicio();

    if(location.pathname.split('/')[3] === 'portafolio.html'){
        await mostrarPaginas();
        modos();
    }

    modos();

});


function mobileMenu(){

    const btnAbrir = document.querySelector('#abrir-menu');
    const btnCerrar = document.querySelector('#cerrar-menu');
    const navegacion = document.querySelector('.contenedor-navegacion');
    const body = document.querySelector('body');

    btnAbrir.addEventListener('click', e =>{
        navegacion.style.width = '35%';
        body.classList.add('bloquear');
    });

    btnCerrar.addEventListener('click', e =>{
        navegacion.style.width = '0px';
        body.classList.remove('bloquear');
    });

}

function animacionEncabezados(){

    const encabezadosH2 = document.querySelectorAll('h2');

    if(encabezadosH2){
    
        encabezadosH2.forEach(async h2 => {
    
            anime({
                targets: h2,
                translateY: 30,
                direction: 'alternate',
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)'
            });
            
        });
    }

}

function scrollInicio(){

    const header = document.querySelector('.header-principal');
    header.id = 'inicio';

    const contenedorEnlace = document.createElement("div");
    contenedorEnlace.classList.add('contenedor-enlace');

    const parrafoEnlace = document.createElement('a');
    parrafoEnlace.href = '#inicio';
    parrafoEnlace.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i> Ir al Inicio';
    parrafoEnlace.classList.add('enlace-inicio', 'alineado-derecha');

    contenedorEnlace.appendChild(parrafoEnlace);

    document.querySelector('main').appendChild(contenedorEnlace);

    parrafoEnlace.addEventListener('click', e =>{
        e.preventDefault();
        let seccion;
        if(e.target.tagName === 'I'){
            seccion = document.querySelector(e.target.parentElement.attributes[0].value);
        }else{
            seccion = document.querySelector(e.target.attributes[0].value);
        }
        seccion.scrollIntoView({
            behavior: 'smooth'
        });
    })


}

function modos(){

    const contenedor = document.querySelector('body');

    const botonModo = document.createElement('div');
    botonModo.classList.add('contenedor-modo');
    botonModo.innerHTML = `<i class="fas fa-adjust"></i>`;
    contenedor.appendChild(botonModo);

    anime({
        targets: botonModo,
        translateY: 100,
        duration: 2000
    });


    //Eventos

    if(localStorage.getItem('modo')){
        insertarClasesDiurnas(botonModo);
        localStorage.setItem('modo', 'diurno');
    }

    botonModo.addEventListener('click',e =>{
        if(document.querySelector('body').classList.value === 'diurno'){
            removerClasesDiurno(botonModo);
            localStorage.removeItem('modo', 'diurno');
        }else{
            insertarClasesDiurnas(botonModo);
            localStorage.setItem('modo', 'diurno');
        }
    });

}

function insertarClasesDiurnas(boton){
        
    const body = document.querySelector('body');
    const abrirMenu = document.querySelector('#abrir-menu');
    const encabezadoSitio = document.querySelectorAll('h1');
    const encabezadoSitioH2 = document.querySelectorAll('h2');
    const encabezadoSitioH3 = document.querySelectorAll('h3');
    const contenedorMenu = document.querySelector('.contenedor-navegacion');
    const navPrincipal = document.querySelector('.navegacion-principal');
    const contenedorEnlace = document.querySelector('.contenedor-enlace');

    boton.classList.add('diurno');
    body.classList.add('diurno');
    abrirMenu.classList.add('diurno');
    encabezadoSitio.forEach(h1 =>{
        h1.classList.add('diurno');
    });
    encabezadoSitioH2.forEach(h2 =>{
         h2.classList.add('diurno');
    });
    contenedorMenu.classList.add('diurno');
    navPrincipal.classList.add('diurno');
    contenedorEnlace.classList.add('diurno');

    //Elementos Puntuales

    if(location.pathname.split('/')[1] === 'index.html'){
        const contenedorTecnologias = document.querySelectorAll('.informacion-tecnologias');
        contenedorTecnologias.forEach(elemento =>{
            elemento.classList.add('diurno');
        });
    }

    if(location.pathname.split('/')[3] === 'portafolio.html'){
        const contenedorTecnologias = document.querySelectorAll('.informacion-pagina h3');
        contenedorTecnologias.forEach(elemento =>{
            elemento.classList.add('diurno');
        });
    }

}

function removerClasesDiurno(boton){
        
    const body = document.querySelector('body');
    const abrirMenu = document.querySelector('#abrir-menu');
    const encabezadoSitio = document.querySelectorAll('h1');
    const encabezadoSitioH2 = document.querySelectorAll('h2');
    const encabezadoSitioH3 = document.querySelectorAll('h3');
    const contenedorMenu = document.querySelector('.contenedor-navegacion');
    const navPrincipal = document.querySelector('.navegacion-principal');
    const contenedorEnlace = document.querySelector('.contenedor-enlace');

    boton.classList.remove('diurno');
    body.classList.remove('diurno');
    abrirMenu.classList.remove('diurno');
    encabezadoSitio.forEach(h1 =>{
        h1.classList.remove('diurno');
    });
    encabezadoSitioH2.forEach(h2 =>{
         h2.classList.remove('diurno');
    });
    if(encabezadoSitioH3){
        encabezadoSitioH3.forEach(h3 =>{
            h3.classList.remove('diurno');
        });
    }
    contenedorMenu.classList.remove('diurno');
    navPrincipal.classList.remove('diurno');
    contenedorEnlace.classList.remove('diurno');

    //Elementos Puntuales

    if(location.pathname.split('/')[1] === 'index.html'){
        const contenedorTecnologias = document.querySelectorAll('.informacion-tecnologias');
        contenedorTecnologias.forEach(elemento =>{
            elemento.classList.remove('diurno');
        });
    }

    if(location.pathname.split('/')[3] === 'portafolio.html'){
        const contenedorTecnologias = document.querySelectorAll('.informacion-pagina h3');
        contenedorTecnologias.forEach(elemento =>{
            elemento.classList.remove('diurno');
        });
    }
    

}