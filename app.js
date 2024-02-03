var copybtn = document.getElementById('copia-btn');
var link = document.getElementById('link');

copybtn.onclick = function(){
    navigator.clipboard.writeText(link.textContent);
    copybtn.innerHTML = "Copiado!";
    setTimeout(function(){
        copybtn.innerHTML = "Copiar";
    }, 2000);
}
