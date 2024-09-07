document.getElementsByTagName('h1')[0].innerHTML = "elemento por tag name";
document.getElementsByTagName('p')[2].innerHTML = "elemento por tag name";

setTimeout(function(){

    document.getElementsByTagName('div')[2].innerText = "Testando a tag name com 3 segundos"



}, 3000);