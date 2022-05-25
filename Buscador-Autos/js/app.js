// variables
const marca= document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo= document.querySelector('#minimo');
const maximo= document.querySelector('#maximo');
const puertas= document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// COntenedor para los resultados...
const resultado = document.querySelector('#resultado');


const max = new Date ().getFullYear(); // me trael el año actual...
const min = max -10;

// Generar un objeto  con la busqueda...

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',




}


// eventos...

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);  // muestra los autos al cargar...

// Llenas las opciones de años
llenarSelect();


})

// Event listener para los selectores de busqueda...
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();



});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();

});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();

});
   
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value); // CONVERTIR  EL STRING EN UN ENTERO....

    filtrarAuto();

});

transmision.addEventListener('change', e => {
    datosBusqueda.transamision = e.target.value;

    filtrarAuto();

});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});
   
  
    






// Funciones...

function mostrarAutos(autos) {

// Eliminar el HTML previo...

    limpiarHTML();

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        
        // templei de string...
        autoHTML.textContent = `
              ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - 
              Precio: ${precio} - Color: ${color}
        
        
        `;

        // insertar en el html...
        resultado.appendChild(autoHTML)

    })
    
}

// Limpiar el HTML...

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild); // mientras haya algo remover...
    }

}







// Genera los años del select...

function llenarSelect() {
    for( let i = max; i >= min; i--) { // mostrar años en retroceso...
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al selector...
    }
}


// Funcion que filtra en base a la busqueda...


// manda a llamar las funciones, filter va a tomar la iteracion del objeto actual 
                                                                                             //como si estuvieramos trabajando con el filter.
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)


    if(resultado.length ) {
        mostrarAutos(resultado);
    }else {
        noResultados();
    }
  

}

function noResultados() {

    limpiarHTML();   // limpiar para que aparesca noResultados en la parte superior...

    const noResultados = document.createElement('div'); // creo un div para noResultado...
    noResultados.classList.add('alerta', 'error');
    noResultados.textContent = 'No hay Resultados';
    resultado.appendChild(noResultados);
}




// Funcion de alto nivel...

function filtrarMarca(auto) {       // Iteramos en cada auto...
   const { marca } = datosBusqueda; // si hay un valor en esta busqueda, filtro los que tienen esa marca
   if( marca ) {
       return auto.marca === marca;
   }

   return auto; // y no hay un valor, me traigo todos los autos...
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if( year ) {
    return auto.year === parseInt(year);// pasamos de un string a numeros con el parseInt...
    
    }
      return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if( minimo ) {
    return auto.precio >= minimo;
    
    }
      return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if( maximo) {
    return auto.precio <= maximo;
    
    }
      return auto;
}
console.log(resultado);


function filtrarPuertas(auto) {       
    const { puertas } = datosBusqueda; 
    if( puertas) {
        return auto.marca === puertas;
    }
 
    return auto; 
 }

 function filtrarTransmision(auto) {       
    const { transmision } = datosBusqueda; 
    if( transmision) {
        return auto.transmision === transmision;
    }
 
    return auto; 
 }

 function filtrarColor(auto) {       
    const { color } = datosBusqueda; 
    if( color) {
        return auto.color === color;
    }
 
    return auto; 
 }