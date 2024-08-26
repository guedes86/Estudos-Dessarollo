function suma(){
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
             
    document.getElementById('resultado2').textContent = valor1+valor2;
}

function subtrair(){
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
             
    document.getElementById('resultado2').textContent = valor1-valor2;
}

function multi(){
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
             
    document.getElementById('resultado2').textContent = valor1*valor2;
}

function div(){
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
             
    document.getElementById('resultado2').textContent = valor1/valor2;
}
