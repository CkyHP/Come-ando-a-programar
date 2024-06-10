const display = document.getElementById('display')

function addtoDisplay(input){
    display.value += input
    
}

function clearAll(){
    display.value = ''
}

function igual(){
    try{
        display.value = eval(display.value)
    } catch(error){
        display.value = "Erro"
    }
}