//Declaramos las variables
let nombresAmigos = [];

//Función para mostrar la lista de nombre en pantalla
function mostrarNombres (){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    nombresAmigos.forEach(nombre=>{
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

//Función para recibir los nombres ingresados
function agregarAmigo (){
    let nombresIngresados = document.getElementById('amigo').value;

    if (nombresIngresados == ''){
        alert ("Campo vacío, por favor ingresa el nombre");
    } else {
        if (nombresAmigos.includes(nombresIngresados)){
            return alert ("El nombre ya se encuentra en la lista");
        } else {
            nombresAmigos.push(nombresIngresados);
            limpiarCaja();         
        }
        console.log(nombresIngresados);
        console.log(nombresAmigos);

        mostrarNombres();
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML='';
    
    let indiceParaSorteo = Math.floor(Math.random()*nombresAmigos.length);
    let nombreElegido = nombresAmigos [indiceParaSorteo];

    let li = document.createElement('li');
    li.textContent = `El nombre elegido es: ${nombreElegido}`;
    resultado.appendChild(li);
}

function limpiarCaja (){
    document.querySelector ('#amigo').value = '';
}