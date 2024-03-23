let num
let attempt

newGame()

function newGame() {
    num = parseInt(Math.random() * 100) + 1
    attempt = 0

    const result = document.getElementById("result")
    result.innerHTML = ''
    
    console.log(num)
}

function getNumber() {
    const guess = Number(document.getElementById("attempt").value)
    const result = document.getElementById("result")

    result.innerHTML = ''

    if (guess < 0 || guess > 100) {
        result.innerHTML = `
            <span class="text-red-500">Digite um número entre 1 e 100.</span>
        `
    } else {
        attempt++
        
        if(guess === num) {
            result.innerHTML = `
                <span class="text-green-500">Você acertou o número ${num} em ${attempt} tentativas</span>
                <button onclick="newGame()" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Novo jogo</button>
            `
        } else if(guess < num) {
            result.innerHTML = `<span class="text-red-500">Tente um número maior</span>`
        } else {
            result.innerHTML = `<span class="text-red-500">Tente um número menor</span>`
        }
    }
}
