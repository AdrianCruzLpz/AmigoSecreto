let nombre = "";

function saveName() {
   nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("Ingresa tu nombre");
    } else {
        listaDeAmigos.push(nombre);
        document.getElementById("nombre").value = "";
        actualizarLista();
    }
}

let listaDeAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Ingresa el nombre de uno de tus amigos");
    } else {
        listaDeAmigos.push(nombreAmigo);
        document.getElementById("amigo").value ="";
        actualizarLista();
    }
}

function actualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Ingresa el nombre de uno de tus amigos.");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nombreSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${nombreSorteado}`;

}  

function reiniciarSorteo() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    actualizarLista();
}