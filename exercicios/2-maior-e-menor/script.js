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

    div.innerHTML = `<span class="text-xl font-bold text-center block bg-gray-200 p-4 rounded-lg mb-6">O maior número é ${maiorNumero} e o menor número é ${menorNumero}.</span>
    `
}