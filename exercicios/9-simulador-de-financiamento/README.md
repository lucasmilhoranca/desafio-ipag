# Exercício 9 - Simulador de Financiamento

Este programa simula o cálculo de financiamento de um imóvel ou veículo com base na tabela PRICE. Ele permite ao usuário simular diferentes cenários de financiamento, fornecendo informações como o valor da parcela, o valor total a ser pago, o custo efetivo total do financiamento e a taxa efetiva mensal.

## Funcionalidades

O programa oferece as seguintes funcionalidades:

1. **Simulação de Financiamento:** O usuário pode inserir o valor total do financiamento, a quantidade de parcelas e a taxa nominal de juros anual para simular o financiamento.

2. **Cálculo das Parcelas:** Utiliza a fórmula da tabela PRICE para calcular o valor da parcela com base nos dados fornecidos.

3. **Cálculo do Custo Efetivo Total:** Calcula o custo efetivo total do financiamento com base no valor da parcela e na quantidade de parcelas.

4. **Cálculo da Taxa Efetiva Mensal:** Calcula a taxa de juros mensal efetiva com base na taxa de juros nominal anual.

## Fórmulas Utilizadas

- **Valor da Parcela:** PMT = PV * (i / (1 - (1 + i)^-n))
  Onde PMT é o valor da parcela, PV é o valor total financiado, i é a taxa de juros mensal efetiva e n é a quantidade de parcelas.

- **Custo Efetivo Total:** CET = (PMT * n) - PV
  Onde CET é o custo efetivo total, PMT é o valor da parcela e PV é o valor total financiado.

- **Taxa Efetiva Mensal:** im = (1 + i)^(1/12) - 1
  Onde im é a taxa de juros mensal efetiva e i é a taxa de juros nominal anual.

## Utilização

1. Execute o programa.

2. Insira o valor total do financiamento, a quantidade de parcelas e a taxa nominal de juros anual.

3. Observe as informações fornecidas, incluindo o valor da parcela, o valor total a ser pago, o custo efetivo total do financiamento e a taxa efetiva mensal.

4. Repita o processo para simular diferentes cenários de financiamento.

[Anterior](../8-estatisticas-de-vendas/README.md) | [Próximo](../10-manipulacao-de-api/README.md)