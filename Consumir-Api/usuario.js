const aplicacion = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search); // el parametro w.l.s lo que hace es desglozarme la url que recibe, todo lo que venga despues de la interrogante lo desgloza para extraer lo que necesitamos...
 id = getUrl.get('id');                                                   
 //console.log(id);

 // hacemos la peticion con el / y el id que queremos...
const url = 'https://jsonplaceholder.typicode.com/users';
console.log(`${url}/${id}`);

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {

const name =document.createElement('p'); // mando a imprimir el nombre del usuario en el html...
name.innerHTML = data.name;

/*const address =document.createElement('p');
address.innerHTML = data.address; */

 /*const company =document.createElement('p');
 company.innerHTML = data.company; */   

const email = document.createElement('p'); // mando a imprimir el email...
email.innerHTML = data.email;

const phone =document.createElement('p');
phone.innerHTML = data.phone;

const username =document.createElement('p');
username.innerHTML = data.username; 

const website =document.createElement('p');
website.innerHTML = data.website;

aplicacion.appendChild(name);
//aplicacion.appendChild(address);  ES UN OBJETO...
//aplicacion.appendChild(company);  ES UN OBJETO...
aplicacion.appendChild(email);
aplicacion.appendChild(phone);
aplicacion.appendChild(username);
aplicacion.appendChild(website);


} )
.catch(err => console.log(err))

 
