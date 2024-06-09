function contar(){
    var inicio = Number(document.getElementById('in').value)
    var final = Number(document.getElementById('fn').value)
    var passos = Number(document.getElementById('cd').value)
    var res = document.getElementById('res')
    res.innerHTML = ''
    if(passos == 0 || inicio == 0 || final == 0){
        res.innerHTML = 'Impossível contar'
    } else if(inicio > final){
        for(inicio; inicio >= final; inicio -= passos){
        res.innerHTML = res.innerHTML + ' 👉 ' + inicio
         }
        res.innerHTML = res.innerHTML + ' 🛑'}
    else if(inicio < final){
        for(inicio; inicio <= final; inicio += passos){
        res.innerHTML = res.innerHTML + ' 👉 ' + inicio
        }
        res.innerHTML = res.innerHTML + ' 🛑'}
}