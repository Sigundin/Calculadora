var teclaNumero = document.querySelectorAll('.botaoNumero');
var valorTela = document.querySelector('#telaValor');

//iteração do teclado
for(i=0; i<teclaNumero.length; i++){
   teclaNumero[i].addEventListener('click', (evento) =>{
    //mostra o valor clicado na tela
    valorTela.value += evento.target.value
    
    })

}

