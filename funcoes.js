
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
    let ni = document.getElementById('ni')
    let salto = document.getElementById('salto')
    let nf = document.getElementById('nf')
    let resrep = document.getElementById('resrep')
    resrep.style.display = 'block'
    resrep.innerHTML = ''
    console.log(ni, salto, nf)


    if(ni.value.length == 0){
        alert('Verifique o número inicial!')
    } else if(salto.value.length == 0){
        alert('Verifique o número de intervalo!')
    } else if(nf.value.length == 0){
        alert('Verifique o número final!')
    } else {
        resrep.innerText = 'Contando...'
        let i = Number(ni.value)
        let s = Number(salto.value)
        let f = Number(nf.value)

            if(i < f){
                for(i; i<=f; i+=s){
                    resrep.innerText += ` > ${i}`
                }
            } else if (f < i){
                for(i; i>=f; i-=s){
                    resrep.innerText += ` > ${i}`
                }
            }
            resrep.innerText += ` \u{1F3C1}` // Formatação em JavaScript para adicionar emoji unicode = \u{CODE} (Retirar o 'U+')
        }
    }


function numaleatorio(){
    // Definido o numero minimo
    let ini = Number(document.getElementById('numialt').value)
    // Definido o número máximo
    let fim = Number(document.getElementById('numfalt').value)
    // Diferença entre os números
    let dif = fim - ini
    // Math.random() gera um valor real entre 0 e 1
    let aleatorio = Math.random()
    // Math.trunc retorna a parte inteira de um número, descartando suas casas decimais.
    let num = ini + Math.trunc(dif * aleatorio)
    let resnumalt = document.getElementById('resnumalt')
    resnumalt.style.display = 'block'
    console.log(ini)
    console.log(fim)
    console.log(dif)
    console.log(aleatorio)
    console.log(num)
    
    resnumalt.innerText = `${num}`

    // resnumalt.innerText = Math.floor(Math.random() * (fim - ini))



}

