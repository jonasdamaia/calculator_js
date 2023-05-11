function calcular(){
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    if(document.getElementById('soma').checked)
        total = num1 + num2
    else if(document.getElementById('subtracao').checked)
        total = num1 - num2
    else if(document.getElementById('multiplicacao').checked)
        total = num1 * num2
    else
        total = num1 / num2
    
    document.getElementById('resultado').innerHTML = total
}
