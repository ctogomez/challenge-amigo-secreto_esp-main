// Lista global para almacenar los participantes
let participantes = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (!nombre) {
        alert("Ingrese un nombre válido.");
        return;
    }
    if (participantes.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    participantes.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Se necesitan al menos 2 participantes para el sorteo.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    const amigoSecreto = participantes[indiceAleatorio];
    
    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(amigoSecreto) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    listaResultado.appendChild(li);
}
