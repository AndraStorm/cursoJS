function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos!`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'images/manha.jpg'
        document.body.style.background = '#fec866'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#d9bc12'
    } else {
        //BOA NOITE
        img.src = 'images/noite.jpg'
        document.body.style.background = '#002a49'
    }
}
