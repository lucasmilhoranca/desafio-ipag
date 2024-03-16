async function buscarUsuario(event) {
    event.preventDefault();
    const usuario = document.querySelector('input[name="user"]').value;
    const url = `https://api.github.com/users/${usuario}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const div = document.getElementById('repos');
            div.innerHTML = '';

            div.innerHTML = `<h2 class="text-2xl font-bold mb-4">Repositórios</h2>`

            data.forEach(repo => {
                const d = document.createElement('div');

                d.innerHTML = `<div class="bg-white rounded shadow-md p-4 mb-4 w-[576px]">
                                    <span class="font-bold text-lg">${repo.name}</span><br>
                                    <p class="text-gray-700">${repo.description || 'Nenhuma descrição'}</p>
                                    <p class="text-gray-700">Estrelas: ${repo.stargazers_count}</p>
                                    <p class="text-gray-700">Criado em: ${formatDate(repo.created_at)}</p>
                                    <a href="${repo.html_url}" target="_blank" class="text-blue-500 hover:underline">Ver no GitHub</a>
                                </div>`;
                div.appendChild(d);
            });
        })
        .catch(error => console.error('Erro ao buscar usuário:', error));
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}
