
function ColaDetectada(){
    var funnyboy = document.createElement('div')
    funnyboy.classList = "aviso"
    var text = document.createElement('h1')
    text.textContent = "EU VI ISSO HEIN , TENTANDO COLAR NA REDAÇÃO NA CARA DURRA "+" POR CAUSA DISSO TODA SUA REDAÇÃO SERA PERDIDA :-)"
    funnyboy.appendChild(text)
    document.body.innerHTML =""
    document.body.appendChild(funnyboy)
    document.body.style.backgroundColor ="rgb(200,10,10)"
}
document.body.addEventListener("keydown", function (evento) {
  
  evento = evento || window.eventoent;  
  var key = evento.which || evento.keyCode; 
    
  var ctrl = evento.ctrlKey ? evento.ctrlKey : ((key === 17)
      ? true : false);


  if (key == 86 && ctrl) {
    ColaDetectada()

  }
  else if (key == 67 && ctrl) {
    ColaDetectada()
  }

}, false);