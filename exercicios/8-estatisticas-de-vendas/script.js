document.addEventListener('DOMContentLoaded', function () {
    fetch('sales.csv')
        .then(response => response.text())
        .then(data => processData(data))
})

function processData(data) {
    const rows = data.trim().split('\n').map(row => row.split(','))

    const header = rows.shift()

    // Objeto para armazenar as estatísticas
    const statistics = {
        totalSales: {},
        salesByRegion: {},
        highestRevenueByCountry: {}
    }

    rows.forEach(row => {
        const region = row[0];
        const country = row[1];
        const itemType = row[2];
        const unitsSold = parseInt(row[8]);
        const totalRevenue = parseFloat(row[11]);
        const totalCost = parseFloat(row[12]);
        const totalProfit = parseFloat(row[13]);

        // Vendas totais por tipo
        if (!statistics.totalSales[itemType]) {
            statistics.totalSales[itemType] = { unitsSold: 0, revenue: 0, cost: 0, profit: 0 };
        }
        statistics.totalSales[itemType].unitsSold += unitsSold;
        statistics.totalSales[itemType].revenue += totalRevenue;
        statistics.totalSales[itemType].cost += totalCost;
        statistics.totalSales[itemType].profit += totalProfit;

        // Vendas por tipo e região
        const regionAndType = `${region} - ${itemType}`;
        if (!statistics.salesByRegion[regionAndType]) {
            statistics.salesByRegion[regionAndType] = { unitsSold: 0, revenue: 0 };
        }
        statistics.salesByRegion[regionAndType].unitsSold += unitsSold;
        statistics.salesByRegion[regionAndType].revenue += totalRevenue;

        // Tipo de produto com maior receita por país
        if (!statistics.highestRevenueByCountry[country] || totalRevenue > statistics.highestRevenueByCountry[country].revenue) {
            statistics.highestRevenueByCountry[country] = { itemType, revenue: totalRevenue };
        }
    });

    exibirEstatiscas(statistics);
}

function exibirEstatiscas(statistics) {
    vendasPorTipo(statistics);

    vendasPorTipoRegiao(statistics);

    tipoProdutoMaiorReceitaPais(statistics);
}

function vendasPorTipo(statistics) {
    const statisticsDiv = document.getElementById('statistics');

    const totalSalesTable = document.createElement('table');
    totalSalesTable.classList.add('table', 'border', 'border-green-400', 'mt-4', 'mb-4');
    totalSalesTable.innerHTML = `
        <thead>
            <tr class="border border-green-400">
                <th class="px-4 py-2 border border-green-400 border border-green-400">Tipo</th>
                <th class="px-4 py-2 border border-green-400">Unidades Vendidas</th>
                <th class="px-4 py-2 border border-green-400">Receita Total</th>
                <th class="px-4 py-2 border border-green-400">Custo Total</th>
                <th class="px-4 py-2 border border-green-400">Lucro Total</th>
            </tr>
        </thead>
        
    `;
    for (const type in statistics.totalSales) {
        const { unitsSold, revenue, cost, profit } = statistics.totalSales[type];
        totalSalesTable.innerHTML += `
            <tbody>
                <tr>
                    <td class="border px-4 py-2 border border-green-400">${type}</td>
                    <td class="border px-4 py-2 border border-green-400">${unitsSold}</td>
                    <td class="border px-4 py-2 border border-green-400">R$ ${revenue.toFixed(2)}</td>
                    <td class="border px-4 py-2 border border-green-400">R$ ${cost.toFixed(2)}</td>
                    <td class="border px-4 py-2 border border-green-400">R$ ${profit.toFixed(2)}</td>
                </tr>
            </tbody>
        `;
    }
    statisticsDiv.appendChild(document.createElement('h3')).textContent = 'Total de vendas por tipo';
    statisticsDiv.appendChild(totalSalesTable);
}

function vendasPorTipoRegiao(statistics) {
    const statisticsDiv = document.getElementById('statistics');

    for (const regionType in statistics.salesByRegion) {
        const [region, type] = regionType.split(' - ');
        const { unitsSold, revenue } = statistics.salesByRegion[regionType];
        const salesByRegionTable = document.createElement('table');
        salesByRegionTable.classList.add('table', 'border', 'border-green-400', 'mb-4');
        salesByRegionTable.innerHTML = `
            <thead>
                <tr>
                    <th class="px-4 py-2 border border-green-400">Região</th>
                    <th class="px-4 py-2 border border-green-400">Tipo</th>
                    <th class="px-4 py-2 border border-green-400">Unidades Vendidas</th>
                    <th class="px-4 py-2 border border-green-400">Receita</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border px-4 py-2 border border-green-400">${region}</td>
                    <td class="border px-4 py-2 border border-green-400">${type}</td>
                    <td class="border px-4 py-2 border border-green-400">${unitsSold}</td>
                    <td class="border px-4 py-2 border border-green-400">R$ ${revenue.toFixed(2)}</td>
                </tr>
            </tbody>
        `;
        statisticsDiv.appendChild(document.createElement('h3')).textContent = `Vendas por ${type} em ${region}`;
        statisticsDiv.appendChild(salesByRegionTable);
    }
}

function tipoProdutoMaiorReceitaPais(statistics) {
    const statisticsDiv = document.getElementById('statistics');

    const highestRevenueTable = document.createElement('table');
    highestRevenueTable.classList.add('table', 'border', 'border-green-400');
    highestRevenueTable.innerHTML = `
            <thead>
                <tr>
                    <th class="px-4 py-2 border border-green-400">País</th>
                    <th class="px-4 py-2 border border-green-400">Tipo com maior receita</th>
                    <th class="px-4 py-2 border border-green-400">Receita</th>
                </tr>
            </thead>
            <tbody>
        `;
    for (const country in statistics.highestRevenueByCountry) {
        const { itemType, revenue } = statistics.highestRevenueByCountry[country];
        highestRevenueTable.innerHTML += `
                <tr>
                    <td class="border px-4 py-2 border border-green-400">${country}</td>
                    <td class="border px-4 py-2 border border-green-400">${itemType}</td>
                    <td class="border px-4 py-2 border border-green-400">R$ ${revenue.toFixed(2)}</td>
                </tr>
            `;
    }
    highestRevenueTable.innerHTML += `</tbody>`;
    statisticsDiv.appendChild(document.createElement('h3')).textContent = 'Tipo com maior receita por país';
    statisticsDiv.appendChild(highestRevenueTable);
}