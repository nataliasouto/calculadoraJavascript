var displayBuffer = ""
var numero = ""
var termos = [undefined,undefined,undefined]
var resultado = undefined
var tela = document.getElementById('display')

function pressNum(num){
    numero = numero.concat(num.innerHTML)
    showDisplay(num.innerHTML)
}
function pressOperator(op){
    termos[0] = numero
    termos[1] = op.innerHTML
    showDisplay(op.innerHTML)
    numero = ""
}
function calcular(fn) {
  return new Function('return ' + fn)();
}
function pressEqual(){
    resultado = calcular(tela.value)

    clearDisplay()
    showDisplay(resultado)
    clearMemory()
}
function clearMemory(){
    numero = ""
    termos = [undefined,undefined,undefined]
    resultado = undefined
}
function clearDisplay(){
    displayBuffer = ""
    var tela = document.getElementById('display')
    tela.value = displayBuffer
}
function clearAll(){
    clearDisplay()
    clearMemory()
}
function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo)
    tela.value = displayBuffer
}