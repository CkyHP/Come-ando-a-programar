function analisar(){
    //Váriaveis
    var agora = new Date()
    var ano_atual = agora.getFullYear()   
    var mes_atual = agora.getMonth()
    var dia_atual = agora.getDate()
    var ano = document.getElementById('inputano').value
    var mes = document.getElementById('mes').value
    var dia = document.getElementById('date').value
    var res = document.getElementById('res')
    var fsex = document.getElementsByName("masfem")
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    //Detectando Dados Inválidos
    if(ano.length == '0' || ano > ano_atual || ano.length != 4){
        alert('[ERRO] Ano inválido. Por favor insira um ano válido')
    } else if(mes == "3" && dia > 30|| mes == "5" && dia > 30|| mes == "8" && dia > 30|| mes == "10" && dia > 30){
        
        alert('[ERRO] Insira um dia válido')
    
    } else if(mes == "1" && dia > 28){
        alert('[ERRO] Insira um dia válido')
        }
    else{
        

        //Calculando a idade
        idade = ano_atual - Number(ano)
        if(mes_atual <=  Number(mes)){
            if(mes_atual == Number(mes)){
                if(dia_atual < Number(dia)){
                idade = idade - 1
                }
            } else {
                idade = idade - 1
            }
        }

        //Determinando o Gênero
        var genero = ''
        if(fsex[0].checked){
            genero = "homem" 
        } else if(fsex[1].checked){
            genero = "mulher"
        } else{
            alert("Ocorreu um erro inesperado")
        }

        //Criando a imagem de acordo com o Gênero e idade
        if(idade > 150){
            res.innerHTML = "Detectamos um cádaver"
            img.setAttribute('src', 'imagens/morto.jpg')
        } else if(idade > 60 && genero == "homem"){
           
            img.setAttribute('src', 'imagens/homem idoso.jpg')
            } else if(idade > 24 && genero == "homem"){
               
                img.setAttribute('src', 'imagens/homem adulto.jpg')    
            } else if(idade > 12 && genero == "homem"){
                
                img.setAttribute('src', 'imagens/homem adolescente.jpg')
            } else if (idade >= 0 && genero == "homem"){
            
                img.setAttribute('src', 'imagens/homem criança.jpg')
            }else if(idade > 60 && genero == "mulher"){
                   
                    img.setAttribute('src', 'imagens/mulher idosa.jpg')
                } else if(idade > 24 && genero == "mulher"){
                  
                    img.setAttribute('src', 'imagens/mulher adulta.jpg')
                } else if(idade > 12 && genero == "mulher"){
                  
                    img.setAttribute('src', 'imagens/mulher adolescente.jpg')
                } else if (idade >= 0 && genero == "mulher"){
                
                    img.setAttribute('src', 'imagens/mulher criança.jpg')
                }
                
        //Criando o texto de acordo com genêro e idade
        res.style.textAlign = 'center'
        if(genero == "homem"){
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos` }
        else if(genero == 'mulher'){
            res.innerHTML = `Detectamos uma ${genero} de ${idade} anos`
        }
        res.appendChild(img)  
        }
    }