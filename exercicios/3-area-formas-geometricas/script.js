document.getElementById("forma").addEventListener("change", function () {
    const formaSelecionada = this.value;
    mostrarInputs(formaSelecionada);
});


function mostrarInputs(forma) {
    const inputs = document.getElementById("input")
    inputs.innerHTML = ""

    switch (forma) {
        case "quadrado":
            inputs.innerHTML = `
                <label for="lado" class="block mb-2">Lado:</label>
                <input type="number" id="lado" class="border rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-green-300" required>
            `
            break
        case "retangulo":
            inputs.innerHTML = `
                <label for="base" class="block mb-2">Base:</label>
                <input type="number" id="base" class="border rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-green-300" required>
                <label for="altura" class="block mb-2">Altura:</label>
                <input type="number" id="altura" class="border rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-green-300" required>
                `
            break
        case "triangulo":
            inputs.innerHTML = `
                <label for="base" class="block mb-2">Base:</label>
                <input type="number" id="base" class="border rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-green-300" required>
                <label for="altura" class="block mb-2">Altura:</label>
                <input type="number" id="altura" class="border rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-green-300" required>
            `
            break
        case "circulo":
            inputs.innerHTML = `
                <label for="raio" class="block mb-2">Raio:</label>
                <input type="number" id="raio" class="border rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-green-300" required>
            `
            break
    }
}

function getForm(event) {
    event.preventDefault()
    const forma = document.getElementById("forma").value
    let area;

    switch (forma) {
        case "quadrado":
            area = calcSquare()
            break
        case "retangulo":
            area = calcRectangle()
            break
        case "triangulo":
            area = calcTriangle()
            break
        case "circulo":
            area = calcCircle()
            break
    }

    if (area === -1)
        result.innerHTML = `
            <span class="text-red-500">A entrada não pode ser um número negativo</span> 
        `
    else {
        const result = document.getElementById("result")
        result.innerHTML = `
            <span>Área do ${forma}: ${area}m²</span>
        `
    }

}

function calcSquare() {
    const side = document.getElementById("lado").value

    return Number(side) < 0 ? -1 : Number(side) * Number(side)
}

function calcTriangle() {
    const base = document.getElementById("base").value
    const height = document.getElementById("altura").value

    return Number(base) < 0 || Number(height) < 0 ? -1 : Number(base) * Number(height) / 2
}

function calcRectangle() {
    const base = document.getElementById("base").value
    const height = document.getElementById("altura").value

    return Number(base) < 0 || Number(height) < 0 ? -1 : Number(base) * Number(height) / 2
}

function calcCircle() {
    const ray = document.getElementById("raio").value
    const pi = 3.14

    return Number(ray) < 0 ? -1 : pi * Math.pow(ray, 2)
}
