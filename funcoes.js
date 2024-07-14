
function dark(){
    document.body.style.background = "black"
    document.body.style.color = "white"
    document.getElementById('resimc').style.color = "#d1efd1"
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
    resimppar.innerText = ''

    if(n%2 == 0){
        resimppar.innerText += `${n} é um número par!`
        console.log('par')
    } else {
        resimppar.innerText += `${n} é um número impar!`
        console.log('impar')
    }
}

function repetidor(){
    let ni = Number(document.getElementById('ni').value)
    let salto = Number(document.getElementById('salto').value)
    let nf = Number(document.getElementById('nf').value)
    let resrep = document.getElementById('resrep')
    resrep.style.display = 'block'
    console.log(ni, salto, nf)

    for(ni; ni <= nf  ; ni += salto){
        resrep.innerText += ` > ${ni} `
    }

}