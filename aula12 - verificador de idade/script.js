function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.legth == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //Baby
                img.setAttribute('src', 'images/bebemenino.jpg')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'images/menino.jpg')
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute('src', 'images/jovemHomem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //Baby
                img.setAttribute('src', 'images/bebemenina.jpg')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'images/menina.jpg')
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute('src', 'images/jovemmulher.jpg')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'images/adulta.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'images/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}