document.getElementsByName('nomediv')[0].innerHTML = "<b> Div por nome no JS...";
document.getElementsByName('nomediv')[2].innerHTML = "<b> Div por nome no JS... De Novo";
document.getElementsByName('nomediv')[1].innerText = "texto da div";

setTimeout( function () {

    document.getElementsByName('nomediv')[1].innerText = "Outro texto";



}, 3000)