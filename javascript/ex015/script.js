function verificar(){
    //valida se ano esta vazio ou maior que ano atual
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
            window.alert('[erro] Verifique o ano informado e tente novamente')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML= `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('src', 'img/joana.png')

        if (fSex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/joana.png')
                img.style.textAlign = 'center'
            }else if (idade < 21 ){
                //jovem
            }else if(idade < 50){
                //adulto
            } else {
                idoso
            }
            
        } else if (fSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21 ){
                //jovem
            } else if(idade < 50 ){
                //adulta
            }else {
                //idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}