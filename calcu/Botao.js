var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

function soma(){
    resultado.innerHTML = Number(n1.value) + Number (n2.value);
}

function subtração(){
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}

function multiplicação(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}

function divisão(){
    if (number(n2.value ) === 0 ){
        resultado = 'Erro: Divisão por zero';
    }else{
    resultado.innerHTML = Number (n1.value) / Number(n2.value);
    }
}

