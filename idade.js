function verificar( ) {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || fano.valeu > ano )
{
    window.document.alert('[erro]verifique os dados novamente')
}  else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano  - Number(fano.value)
    var genero = ''
    var img =document.createElement ('img') //para colocar a imagem
    img.setAttribute('id','foto')// atribuir para colocar a imagem dinamicamente
    if (fsex[0].checked){
        genero = 'homem'
        if(idade>= 0 && idade <10){
            //criança
            img.setAttribute('src','/imagem/menino.jpeg')
        }else if (idade <21){
            //jovem 
            img.setAttribute('src','/imagem/jovem.jpeg')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','imagem/homem.jpeg')
        } else {
            //velho
            img.setAttribute('src','imagem/velho.jpeg')
        }
    }else if(fsex[1].checked){
        genero = 'mulher'
        if(idade>= 0 && idade <10){
            //criança
            img.setAttribute('src','imagem/menina.jpeg')
        }else if (idade <21){
            //jovem
        img.setAttribute('src','imagem/jovemm.jpeg')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','imagem/mulher.jpeg')
        } else {
            // velha
            img.setAttribute('src','imagem/velha.jpeg')
        }
    }
    res.style.texAlign = 'center'   
    res.innerHTML = `Detectamos ${genero} com ${idade}ano(s)`
    res.appendChild(img)
    }
}