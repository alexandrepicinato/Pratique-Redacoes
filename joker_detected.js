function ColaDetectada(){
    var funnyboy = document.createElement('div')
    funnyboy.classList = "aviso"
    var text = document.createElement('h1')
    text.textContent = "EU VI ISSO HEIN , TENTANDO COLAR NA REDAÇÃO NA CARA DURRA "+" POR CAUSA DISSO TODA SUA REDAÇÃO SERA PERDIDA :-)"
    funnyboy.appendChild(text)
    document.body.innerHTML ="<style>.aviso{background-color: rgba(244,244,244, 1);border-radius: 25px;padding: 10%;}"
    document.body.appendChild(funnyboy)
    document.body.style.backgroundColor ="rgb(200,10,10)"
    var win = window.open('', '', 'height=700,width=700');
    win.document.body.innerHTML =""
    win.document.body.appendChild(funnyboy)
    win.document.body.style.backgroundColor ="rgb(200,10,10)"
    win.document.close();
}
function ColaDetectadaNewTab(){
    var funnyboy = document.createElement('div')
    funnyboy.classList = "aviso"
    var text = document.createElement('h1')
    text.textContent = "EU VI ISSO HEIN , TENTANDO ABRIR UMA NOVA GUIA PRA TRAPASSEAR NO TESTE"
    funnyboy.appendChild(text)
    document.body.innerHTML =""
    document.body.appendChild(funnyboy)
    document.body.style.backgroundColor ="rgb(200,10,10)"
}
function ColaDetectadaNewTab() {
    var funnyboy = document.createElement('div')
    funnyboy.classList = "aviso"
    var text = document.createElement('h1')
    text.textContent = "EU VI ISSO HEIN , TENTANDO ABRIR UMA NOVA GUIA PRA TRAPASSEAR NO TESTE"
    funnyboy.appendChild(text)

    document.body.innerHTML ="<style>.aviso{background-color: rgba(244,244,244, 1);border-radius: 25px;padding: 10%;}"
    document.body.appendChild(funnyboy)
    document.body.style.backgroundColor ="rgb(200,10,10)"
    var win = window.open('', '', 'height=700,width=700');
    win.document.body.innerHTML =""
    win.document.body.appendChild(funnyboy)
    win.document.body.style.backgroundColor ="rgb(200,10,10)"
    win.document.close();
    
    }