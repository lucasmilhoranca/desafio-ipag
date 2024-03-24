function calcFinanciamento(event) {
    event.preventDefault()

    const result = document.getElementById("result")

    result.innerHTML = ''

    const valor = parseFloat(document.getElementById("valor").value)
    const parcelas = parseFloat(document.getElementById("parcelas").value)
    const jurosAnual = parseFloat(document.getElementById("juros").value) / 100

    const jurosMensal = calcJurosMensal(jurosAnual)
    const valParcela = calcPMT(valor, jurosMensal, parcelas)
    const total = calcCET(valParcela, parcelas, valor)

    result.innerHTML = `
        <span class="block mb-2">Valor da parcela: <strong>R$ ${valParcela.toFixed(2)}</strong></span>
        <span class="block mb-2">Valor total a ser pago: <strong>R$ ${(valParcela * parcelas).toFixed(2)}</strong></span>
        <span class="block mb-2">Custo efetivo total do financiamento: <strong>R$ ${total.toFixed(2)}</strong></span>
        <span class="block">Taxa efetiva mensal: <strong>R$ ${(jurosMensal * 100).toFixed(2)}%</strong></span>
    `
}

function calcJurosMensal(jurosAnual) {
    return Math.pow(1 + jurosAnual, 1 / 12) - 1
}

function calcPMT(valor, jurosMensal, parcelas) {
    return valor * (jurosMensal / (1 - Math.pow(1 + jurosMensal, -parcelas)))
}

function calcCET(valorParcela, parcelas, valor) {
    return (valorParcela * parcelas) - valor
}