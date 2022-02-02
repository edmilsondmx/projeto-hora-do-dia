    function checkTime(i) {
        if (i < 10){
            i = "0" +  i
        }
        return i
    }

    function startTime(){
        var img = window.document.querySelector('img#imagem')
        var data = new Date()
        var hora = data.getHours()
        var minuto = data.getMinutes()
        var segundo = data.getSeconds()
        hora = checkTime(hora)
        minuto = checkTime(minuto)
        segundo = checkTime(segundo)
        window.document.querySelector('div#txthora').innerHTML = (`Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`)
        t = setTimeout(function(){
            startTime()
        }, 500)
        if (hora >= 0 && hora < 5){
            //Boa Madrugada
            img.src = 'imagens/madrugada.png'
            document.body.style.background = '#182330'
        } else if (hora >= 5 && hora < 12) {
            //Bom dia
            img.src = 'imagens/manha.png'
            document.body.style.background = '#C28E6A'
        } else if (hora >= 12 && hora <= 18) {
            //Boa tarde
            img.src = 'imagens/tarde.png'
            document.body.style.background = '#CF5501'
        } else{
            //Boa noite
            img.src = 'imagens/noite.png'
            document.body.style.background = '#2F1D2E'
        }
    }
    startTime()

