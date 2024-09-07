// getElementByID
document.getElementById("idcostumizada").innerHTML = " Estou usando o JS ";
document.getElementById("idcostumizada2").innerText = "Eu sou um texto simples";


// Com timeout
setTimeout(function () {
    document.getElementById("idcostumizada").innerHTML = "<b> Estou usando o JSSSSSSSSSSSS </b>";
}, 3000); //Eu posso fazer um texto mudar esperando um tempo.