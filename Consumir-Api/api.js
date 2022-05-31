const aplicacion = document.querySelector('.container');


const url = 'https://jsonplaceholder.typicode.com/users';

// Promesa con fetch... nos va a devolver la data de los 10 usuarios 
// en el arreglo de objetos...

fetch(url)                        // se hace la peticion...
.then(res => res.json())          // RES: RESPUESTA. tomo la respuesta- se pasa a formato json...
.then(data => {                   // tomo toda la respuesta que me devuelve...
    data.forEach(usuario => {     // itero con el forEach en cada posicion
        
        const p = document.createElement('p'); // genero un parrafo para imprimirlo en el html. añado el dato que quiera(name)...
        p.setAttribute('id', usuario.id ) // cada parrafo tendra un id para poder lanzarlo a la siguiente url para octener lo que queremos...
        p.addEventListener('click', function() {
            window.location.href = `./usuario.html?id=${usuario.id}`;
        })
       
       
       
       
        p.innerHTML = usuario.name; // 
        aplicacion.appendChild(p); // luego añado todo al contenedor de nuestra app...
    });

     })

.catch(err => console.log(err) ) // lanzar el catch con la variable error por si arroja algun error...


