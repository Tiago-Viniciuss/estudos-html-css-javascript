function carregar() {
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora < 12 ) {
        img.src = 'manha.jpg'
        document.body.style.background = '#d6a6a6'
    } else if (hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background =  '#895151'
    } else {
        img.src ='noite.jpg'
        document.body.style.background = '#281b1b'
    }
}
