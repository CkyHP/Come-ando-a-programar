var num_array = []

function add(){
    let num = document.getElementById('sel_num')
    let list = document.getElementById('num_list')
    if(num.value == ''){
        alert('Por favor entre com um valor')
    } else if(num.value < 1 || num.value > 100){
        alert(`${num.value} é um valor inválido; Por favor entre com um valor válido.`)
    } else{
        n = Number(num.value)
        if(num_array.indexOf(n) == -1){
        num_array.push(n)
        let added_val = document.createElement('option')
        added_val.text = `Valor ${n} foi adicionado`
        list.appendChild(added_val)
        num_array.sort()

    } else{
        alert(`O número ${n} já foi adicionado`)
    }
        

    }
}
var soma = 0

function somar(array){
    for(let c = 0; c < array.length; c++){
        soma = soma + array[c]
        
    }
    return(soma)
        
}
function media(array){
    var media = 0
    media = soma / array.length
    return(media)
    
}

function final(){
    if(num.value == ''){
        alert('Por favor entre com um valor para validar')
    } else{
        num_array.sort(function(a, b){return a - b})
        
        let res = document.getElementById('res')
        res.innerHTML = ''

        let len = num_array.length
        let len_text = document.createElement('p')
        len_text.innerText = `Ao todo, foram adicionados ${len} elementos`
        res.appendChild(len_text)

        let maior_num = num_array[len - 1]
        let maior_text = document.createElement('p')
        maior_text.innerText = `O maior valor digitado foi ${maior_num}`
        res.appendChild(maior_text)

        let menor_num = num_array[0]
        let menor_text = document.createElement('p')
        menor_text.innerText = `O menor valor digitado foi ${menor_num}`
        res.appendChild(menor_text)

        let soma_text = document.createElement('p')
        soma_text.innerText = `A soma de todos os valores digitados foi ${somar(num_array)}`
        res.appendChild(soma_text)

        let media_text = document.createElement('p')
        media_text.innerText = `A média de todos os valores digitados foi ${media(num_array)}`
        res.appendChild(media_text)
    }


}