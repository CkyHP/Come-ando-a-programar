function tabuar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Digite um número válido')
    } else{
        let n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }


    
}