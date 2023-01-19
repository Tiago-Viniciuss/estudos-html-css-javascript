function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoform = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if( anoform.value.lenght == 0 || anoform.value > ano ){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoform.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','bebeH.jpg')
            } else if (idade < 21 ){
                // Jovem
                img.setAttribute('src','adolescenteH.jpg')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src','adultoH.jpg')
            } else {
                // Idoso
                img.setAttribute('src','idosoH.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','bebeM.jpg')
            } else if (idade < 21 ){
                // Jovem
                img.setAttribute('src','adolescenteM.jpg')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src','adultaM.jpg')
            } else {
                // Idoso
                img.setAttribute('src','idosaM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}