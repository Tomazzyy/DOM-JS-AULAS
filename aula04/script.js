document.getElementsByClassName('classe')[1].innerHTML = "Conteúdo do INNER";
document.getElementsByClassName('classe')[0].innerHTML = "Conteúdo do INNER";

setTimeout(function(){

    document.getElementsByClassName('classe')[0].innerHTML = "Conteúdo mudado em 3 segundos";



}, 3000);