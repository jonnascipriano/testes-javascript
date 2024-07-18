/* Configuração de hora do site, para que depois de certo horário, o modo dark seja ativado */
if (hora >= 19 || hora <= 4) {
    dark();
  }

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
    } else if(ni.value == nf.value){
        alert('Verifique os valores e tente novamente!')
    } else {
        resrep.innerText = 'Contando...'
        let i = Number(ni.value)
        let s = Number(salto.value)
        let f = Number(nf.value)

            if(i < f){
                for(i; i<=f; i+=s){
                    resrep.innerText += ` \u{1F449} ${i}`
                }
            } else if (f < i){
                for(i; i>=f; i-=s){
                    resrep.innerText += ` \u{1F449} ${i}`
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

let contador = 0
let rescli = document.getElementById('rescli')
function cliq(){
    rescli.style.display = "block"

    contador++
    rescli.innerHTML = `${contador}`
}

function limp(){
    contador = 0
    rescli.innerHTML = `${contador}`
}

function analisar_media(){
    let def_media = Number(document.getElementById('def_media').value)
    let nome_aluno = document.getElementById('nome_aluno').value
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let nota_media = (n1 + n2) / 2
    let resmed = document.getElementById('resmed')
    resmed.style.display = "block"
    resmed.innerText = ''
    if(nota_media >= def_media){
        resmed.innerHTML += `A primeira nota foi ${n1.toFixed(2)}, a segunda foi ${n2.toFixed(2)}<br>`
        resmed.innerHTML += `A média é ${def_media.toFixed(2)}, você alcançou a média de <mark>${nota_media.toFixed(2)}</mark><br>`
        resmed.innerHTML += `Parabéns, ${nome_aluno}!!`
    } else if (nota_media < def_media){
        resmed.innerHTML += `A primeira nota foi ${n1.toFixed(2)}, a segunda foi ${n2.toFixed(2)}<br>`
        resmed.innerHTML += `A média é ${def_media.toFixed(2)}, você alcançou a média de <mark>${nota_media.toFixed(2)}</mark><br>`
        resmed.innerHTML += `Você precisa melhorar, ${nome_aluno}`
    }
}

function calctab(){
    let numtab = Number(document.getElementById('numtab').value)
    let restab = document.getElementById('restab')
    restab.style.display = 'block'
    restab.innerHTML = ''
    for(let i = 1; i<=10; i++){
        let res = numtab * i
        restab.innerHTML += `${numtab} x ${i} = ${res}<br>`
    }
}


// SECTION 'VOCE VOTA?'**************************************************************


let vcvota = document.getElementById('vc-vota')
let vcvotaitens = document.getElementById('vc-vota-itens')
let botao = document.getElementById('butvot')
let botaoverificar = document.getElementById('butvotverf')
let selmes = document.getElementById('mesnasc')
let selano = document.getElementById('anonasc')
let resvota = document.getElementById('resvota')
let c = 1899
let i = 0

function vcvotaf(){
    vcvotaitens.style.display = 'block'
    botao.style.display = 'none'
    botaoverificar.style.display = 'block'

    
    
    while(c < ano){
        let option = document.createElement("option")
        c++
        option.text += c
        option.value = `${c}`
        selano.add(option)
    }

    while(i < 12){
        let option = document.createElement('option')
        i++
        option.text = i
        option.value = `${i}`
        selmes.add(option)
        }

    }

function vcvotav(){
    let anovota = Number(selano.value)
    let mesvota = Number(selmes.value)
    let idade = ano - anovota
    let mesidade = mes - mesvota
    let dif_mes = mesvota - mes
    let mes_rest = 12 - dif_mes
    resvota.style.display = 'block'
    

    if(mesvota > mes){
        console.log(`Você tem ${idade - 1} anos e ${mes_rest} meses`)
        idade = idade-1
    } else if (mesvota == mes){
        console.log(`Você tem exatamente ${idade} anos`)

    } else if (mesvota < mes) {

        if(dif_mes == -1){
            console.log(`Você tem ${idade} anos e ${mesidade} mes`)

        } else {
            console.log(`Você tem ${idade} anos e ${mesidade} meses`)
        }
    }

    if(idade >= 18){
        if(mesidade == 0){
            resvota.innerHTML = `Você tem ${idade} anos, já pode votar!`
        } else {
            if(mesidade == 1){
                resvota.innerHTML = `Você tem ${idade} anos e ${mesidade} mes, já pode votar!`
            } else {
                resvota.innerHTML = `Você tem ${idade} anos e ${mes_rest} meses, já pode votar!`
            }
        }    

        
    } else {
        if(mesidade == 0){
            resvota.innerHTML = `Você tem ${idade} anos, não pode votar ainda!`
        } else {
            if(dif_mes < 0){
                if(mesidade == 1){
                    resvota.innerHTML = `Você tem ${idade} anos e ${mesidade} mes, não pode votar ainda!`
                } else {
                    resvota.innerHTML = `Você tem ${idade} anos e ${mesidade} meses, não pode votar ainda!`
                }
            } else {
                resvota.innerHTML = `Você tem ${idade} anos e ${mes_rest} meses, não pode votar ainda!`
            }
        }
    }

    // switch (mesvota) {
    //         case 1:
    //             mesvota = 'Janeiro'
    //             break;

    //         case 2:
    //             mesvota = 'Fevereiro'
    //             break;

    //         case 3:
    //             mesvota = 'Março'
    //             break;

    //         case 4:
    //             mesvota = 'Abril'
    //             break;

    //         case 5:
    //             mesvota = 'Maio'
    //             break;

    //         case 6:
    //             mesvota = 'Junho'
    //             break;

    //         case 7:
    //             mesvota = 'Julho'
    //             break;

    //         case 8:
    //             mesvota = 'Agosto'
    //             break;

    //         case 9:
    //             mesvota = 'Setembro'
    //             break;

    //         case 10:
    //             mesvota = 'Outubro'
    //             break;

    //         case 11:
    //             mesvota = 'Novembro'
    //             break;

    //         case 12:
    //             mesvota = 'Dezembro'
    //             break;
    //         }
    
}

// SECTION 'VOCE VOTA?'**************************************************************
