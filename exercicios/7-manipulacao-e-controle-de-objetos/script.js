class Tv {
    constructor() {
        this.ligada = false
        this.marca
    }

    ligar() {
        this.ligada = true

        document.getElementById("status-tv").innerHTML = `
            <span>TV Ligada</span>
        `
        const tvScreen = document.getElementById("status-tv");
        tvScreen.textContent = "Ligada";
        tvScreen.classList.add("tv-screen-on");
    }

    desligar() {
        this.ligada = false

        document.getElementById("status-tv").innerHTML = `
            <span>TV Desligada</span>
        `
        const tvScreen = document.getElementById("status-tv");
        tvScreen.textContent = "Desligada";
        tvScreen.classList.remove("tv-screen-on");
    }
}

class Controle {
    constructor() {
        this.marca
    }

    ligarTv(tv) {
        this.marca === tv.marca ? tv.ligar() : document.getElementById("result").innerHTML = `<span>Controle não é compatível com a TV</span>`
    }

    desligarTv(tv) {
        this.marca === tv.marca ? tv.desligar() : document.getElementById("result").innerHTML = `<span>Controle não é compatível com a TV</span>`
    }
}

const meuControle = new Controle()
const minhaTv = new Tv()

function ligar() {
    const marcaControle = document.getElementById("controle").value
    const marcaTV = document.getElementById("tv").value

    const result = document.getElementById("result")

    result.innerHTML = ''

    meuControle.marca = marcaControle
    minhaTv.marca = marcaTV

    if (!minhaTv.ligada) {
        meuControle.ligarTv(minhaTv)
    } else {
        result.innerHTML = `
            <span>Desligue a TV antes de liga-la novamente</span>
        `
    }
}

function desligar() {
    const marcaControle = document.getElementById("controle").value
    const marcaTV = document.getElementById("tv").value

    const result = document.getElementById("result")

    result.innerHTML = ''

    if (!minhaTv.ligada) {
        result.innerHTML = `
            <span>Ligue a TV antes de desliga-la novamente</span>
        `
    } else if (minhaTv.ligada && marcaControle !== meuControle.marca || marcaTV !== minhaTv.marca) {
        result.innerHTML = `
        <span>Desligue a TV da marca ${String(minhaTv.marca).toUpperCase()} primeiro.</span>
    `
    } else {
        meuControle.marca = marcaControle
        minhaTv.marca = marcaTV

        meuControle.desligarTv(minhaTv)
    }


}