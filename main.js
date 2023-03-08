var teclaNumero = document.querySelectorAll('.botaoNumero');
var valorTela = document.querySelector('#telaValor');

for(i=0; i<teclaNumero.length; i++){
   teclaNumero[i].addEventListener('click', (evento) =>{
    console.log(evento)
    })
    
}
