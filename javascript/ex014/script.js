function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date
    var hora = date.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são  ${hora} horas.`
        if (hora >= 0 && hora < 12) {
            img.src = 'img/manha.png'
                 document.body.style.background = '#c7985b'

        } else {if (hora >= 12 && hora <=18){
            img.src = 'img/tarde.png'
              document.body.style.background = '#fff333'
        
        } else {
            img.src = 'img/noite.png'
              document.body.style.background = '#1e1f20'
        }
    }
}