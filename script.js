var data = new Date();
var segundos = data.getSeconds();
var minuto = data.getMinutes();
var hora = data.getHours();
var diasem = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

switch (diasem) {
  case 0:
    diasem = "domingo";
    break;
  case 1:
    diasem = "segunda-feira";
    break;
  case 2:
    diasem = "terça-feira";
    break;
  case 3:
    diasem = "quarta-feira";
    break;
  case 4:
    diasem = "quinta-feira";
    break;
  case 5:
    diasem = "sexta-feira";
    break;
  case 6:
    diasem = "sábado";
    break;
}

switch (mes) {
  case 0:
    mes = "01";
    break;

  case 1:
    mes = "02";
    break;

  case 2:
    mes = "03";
    break;

  case 3:
    mes = "04";
    break;

  case 4:
    mes = "05";
    break;

  case 5:
    mes = "06";
    break;

  case 6:
    mes = Number("07");
    break;

  case 7:
    mes = "08";
    break;

  case 8:
    mes = "09";
    break;

  case 9:
    mes = "10";
    break;

  case 10:
    mes = "11";
    break;

  case 11:
    mes = "12";
    break;
}

const h1bv = document.getElementById("bv-dia");
h1bv.innerHTML = `Bem vindo. Hoje é ${diasem}, ${dia}/${mes}/${ano}`;



/******************** Não permitir números no input *********************/
/************************** ESTUDAR MAIS SOBRE **************************/
const inputName = document.getElementById('nome_aluno')

inputName.addEventListener('keypress', function(e){
  const keyCode = (e.keyCode ? e.keyCode : e.which);
  console.log(keyCode)

  // 47+ ao -58 = São números
  if(keyCode > 47 && keyCode < 58){
    e.preventDefault()
  }
})
/************************** ESTUDAR MAIS SOBRE **************************/
/******************** Não permitir números no input *********************/
