var data = new Date()
var segundos = data.getSeconds()
var minuto = data.getMinutes()
var hora = data.getHours()
var dia = data.getDay()
var mes = data.getMonth()

if(hora >= 19){
    dark()
}

function dark(){
    document.body.style.background = "black"
    document.body.style.color = "white"
    document.getElementById('resimc').style.color = "#d1efd1"
    document.querySelector('p.resposta').style.background = "red" 
    // PESQUISAR COMO USAR O QUERYSELECTOR PARA SELECIONAR TODOS OS ELEMENTOS QUE TIVER A CLASSE RESPOSTA
}

function light(){
    document.body.style.background = "white"
    document.body.style.color = "black"
    document.getElementById('resimc').style.color = "#003500"
}

function imc(){
    const resimc = document.getElementById('resimc')
    const alt = document.getElementById('altura')
    const ps = document.getElementById('peso')
    const altura = Number(alt.value)
    const peso = Number(ps.value)

    let calcimc = peso / (altura*altura)
    resimc.style.display = 'block'
    resimc.innerText = `Seu imc é de ${calcimc.toFixed(2)}\n`

    if(calcimc < 18.5){
        resimc.innerText += `Você está no nível Magreza (Obesidade Grau 0)`
    } else if (calcimc > 18.5 && calcimc < 24.9){
        resimc.innerText += `Você está no nível Normal (Obesidade Grau 0)`
    } else if (calcimc > 25 && calcimc < 29.9){
        resimc.innerText += `Você está no nível Sobrepeso (Obesidade Grau 1)`
    } else if (calcimc > 30 && calcimc < 39.9){
        resimc.innerText += `Você está no nível Obesidade (Obesidade Grau 2)`
    } else if (calcimc > 40){
        resimc.innerText += `Você está no nível Obesidade Grave (Obesidade Grau 3)`
    } else {
        resimc.innerText = `Digite um valor válido!`
    }
}

function imparpar(){   
    const n = Number(document.getElementById('imparoupar').value)
    const resimppar = document.getElementById('res-impar-par')
    resimppar.style.display = 'block'
    

    if(n%2 == 0){
        resimppar.innerText += `${n} é um número par!`
        console.log('par')
    } else {
        resimppar.innerText += `${n} é um número impar!`
        console.log('impar')
    }
}