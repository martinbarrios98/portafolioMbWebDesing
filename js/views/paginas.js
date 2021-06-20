import { obtenerPaginas } from "../consultas/consultas.js";

export async function mostrarPaginas(){

    const resultado = await obtenerPaginas();
    const contenedor = document.querySelector('.contenedor-paginas');

    resultado.forEach(async pagina =>{

        const { id, nombre, descripcion, url, claves} = pagina;

        const contenedorPagina = document.createElement("div");
        contenedorPagina.classList.add('pagina');
        contenedorPagina.id = id;

        const encabezado = document.createElement('h2');
        encabezado.textContent = nombre;

        const contenedorImagenesPagina = document.createElement('div');
        contenedorImagenesPagina.classList.add('imagenes-pagina');

        url.forEach(imagen =>{
            const contenedorImagen = document.createElement('div');
            contenedorImagen.classList.add('contenedor-imagen-pagina');
            const img = document.createElement('img');
            img.src = imagen;
            img.alt = `imagen-${nombre}`;
            img.classList.add('sombra');
            contenedorImagen.appendChild(img);
            contenedorImagenesPagina.appendChild(contenedorImagen);
        });

        const contenedorInformacion = document.createElement('div');
        contenedorInformacion.classList.add('informacion-pagina');

        const encabezadoNombre = document.createElement('h3');
        encabezadoNombre.textContent = nombre;

        const inforDescripcion = document.createElement('p');
        inforDescripcion.textContent = descripcion;

        const infoClaves = document.createElement('p');
        infoClaves.innerHTML = `<i class="fas fa-code"></i> ${claves}`;

        contenedorInformacion.appendChild(encabezadoNombre);
        contenedorInformacion.appendChild(inforDescripcion);
        contenedorInformacion.appendChild(infoClaves);

        contenedorPagina.appendChild(encabezado);
        contenedorPagina.appendChild(contenedorImagenesPagina);
        contenedorPagina.appendChild(contenedorInformacion);

        contenedor.appendChild(contenedorPagina);

    });

    animacionH2Paginas();

}

export async function animacionH2Paginas(){

    const encabezados = document.querySelectorAll('.pagina h3');
    const encabezadosh2 = document.querySelectorAll('.pagina h2');

    if(encabezados){
    
        encabezados.forEach(async h2 => {
    
            anime({
                targets: h2,
                translateX: 20,
                direction: 'alternate',
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)'
            });
            
        });
    }

    if(encabezadosh2){
    
        encabezadosh2.forEach(async elemeto => {
    
            anime({
                targets: elemeto,
                translateY: 20,
                direction: 'alternate',
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)'
            });
            
        });
    }

}