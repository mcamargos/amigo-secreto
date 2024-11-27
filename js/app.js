let nomes = [];

function adicionar(){
    let nome = document.getElementById("nome-amigo"); 

    if (nome.value == '') {
        alert("Digite o nome do participante ");
        return;
    }

    if (nomes.includes(nome.value)) {
        alert("Nome repetido, favor insira outro");
        return;
    }

    let amigos = document.getElementById("lista-amigos"); 
    nomes.push(nome.value);

    if (amigos.textContent == "") {
        amigos.textContent = nome.value;
    }else{
        amigos.textContent = amigos.textContent + ", " + nome.value;
    }

    nome.value = "";
}


function sortear(){    
    if (nomes.length < 4){
        alert("Adicione pelo menos 4 amigos");
        return;
    }

    embaralha(nomes);
    let sorteio = document.getElementById("lista-sorteio");


    for(let i = 0; i < nomes.length; i++){

        if(i == nomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + `-->` + nomes [0] + `<br>`;

        }else{
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + `-->` + nomes [i+1] + `<br>`;

        }
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

    const indiceAleatorio = Math.floor(Math.random()* indice);

    [lista[indice-1], lista[indiceAleatorio]] =
        [lista[indiceAleatorio], lista[indice -1]];
}
}


function reiniciar(){
    nomes = []
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}