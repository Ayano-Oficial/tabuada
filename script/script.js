let inputTabuada = document.getElementById('txtN1');
let btnGerar = document.getElementById('btnGerar');

let resul = document.getElementById('res');

function gerarTabuada() {
  resul.innerHTML = ''
 let ValorDoInput = Number(inputTabuada.value)
  if ( ValorDoInput  == '') {
    alert('Valor invalido começando a tabuada do 1')
    ValorDoInput = 1;
    for (let i = 0; i <= 10; i++) {
      resul.innerHTML += `<p>${ValorDoInput} x ${i} = ${ValorDoInput * i}</p>`
     
   }
  }else {
    for (let i = 0; i <= 10; i++) {
       resul.innerHTML += `<p>${ValorDoInput} x ${i} = ${ValorDoInput * i}</p>`
      
    }
  }
}

btnGerar.addEventListener('click', gerarTabuada)