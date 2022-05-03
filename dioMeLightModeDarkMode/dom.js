//document.createElement(element); //Criar um novo elemento html
//document.removeChild(element); //Remove um elemento filho
//document.appendChild(elment); //Adiciona um elemento filho
//document.replaceChild(newElement,oldElement); //Substitui um elemento por outro

//classList.add("novo-estilo");
//Adiciona uma classe "novo-estilo no elemento que meuElemento representa
//remove("meu-elemento-classe");
//Remove a classe "meu-elemento-classe" no elemento que meuElemento representa
//classList.toggle("dark-mode");
//Remove a classe "dar-mode" claso ela exista ou adiciona caso ela não exista

//Eventos
//mouseover, mouseout - mouse
//click, dbclick -> click
//change, load -> atualização
const btn = document.getElementsByTagName("button")[0];
const corpo = document.getElementsByTagName("body")[0];
const rodape = document.getElementsByTagName("footer")[0];
const titulo = document.getElementById("page-title");
const darkModeClasse = "dark-mode";
btn.addEventListener("click", changeMode);

function changeMode(){
    changeClasse();
    changeText();
    
}
function changeClasse(){
    corpo.classList.toggle(darkModeClasse);
    btn.classList.toggle(darkModeClasse);
    rodape.classList.toggle(darkModeClasse);

}
function changeText(){
    if(corpo.classList.contains(darkModeClasse)){
        btn.innerHTML ="Light Mode";
        titulo.innerHTML="Dark Mode ON";
    }
    else{
        btn.innerHTML="Dark Mode";
        titulo.innerHTML="Light Mode ON";
    }
    return ;
}