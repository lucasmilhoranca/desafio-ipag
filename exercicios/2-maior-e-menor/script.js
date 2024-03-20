function maxAndMin(event) {
    event.preventDefault()
    const numeros = Array.from(document.querySelectorAll('input[type="number"]')).map(input =>
        Number(input.value)
    );

    console.log(numeros)

    const div = document.getElementById("result")
    div.innerHTML = ""

    //const numeros = [num1, num2, num3]
    const maiorNumero = Math.max(...numeros)
    const menorNumero = Math.min(...numeros)

    div.innerHTML = `O maior número é ${maiorNumero} e o menor número é ${menorNumero}.`
}