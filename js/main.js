const form = document.querySelector('#form-tabuada');

form.addEventListener('submit', function(event){

    event.preventDefault();

    let resposta = event.target.querySelector('#seltab');
    let numm = event.target.querySelector('#txtn');

    if (numm.value.length === 0) {
        alert("Por favor, digite um número válido!");
        return; 
    }

    let num = setValor(numm);

    resposta.innerHTML = ''; 

    calularTabuada(num, resposta);

});

function setValor(num){
    return Number(num.value);
}

function calularTabuada(num, resposta){ 
    
    for(let i = 0; i <= 10; i++) { 
        let item = document.createElement('option'); 
        item.text = `${num} x ${i} = ${num * i}`; 
        item.value = `val${i}`; 
        resposta.appendChild(item); 
    } 
}