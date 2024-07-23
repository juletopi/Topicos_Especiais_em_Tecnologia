// Definindo um array de objetos da tabela
document.addEventListener('DOMContentLoaded', () => {
    const operadores = [
        { operador: '==', nome: 'Igual', exemplo: 'a == b', resultado: 'Verdadeiro se a for igual a b' },
        { operador: '!=', nome: 'Diferente', exemplo: 'a != b', resultado: 'Verdadeiro se a não for igual a b' },
        { operador: '<>', nome: 'Diferente', exemplo: 'a <> b', resultado: 'Verdadeiro se a não for igual a b' },
        { operador: '===', nome: 'Idêntico', exemplo: 'a === b', resultado: 'Verdadeiro se a for igual a b e for do mesmo tipo' },
        { operador: '!==', nome: 'Não idêntico', exemplo: 'a !== b', resultado: 'Verdadeiro se a não for igual a b, ou eles não forem do mesmo tipo' },
        { operador: '<', nome: 'Menor que', exemplo: 'a < b', resultado: 'Verdadeiro se a for menor que b' },
        { operador: '>', nome: 'Maior que', exemplo: 'a > b', resultado: 'Verdadeiro se a for maior que b' },
        { operador: '<=', nome: 'Menor ou igual', exemplo: 'a <= b', resultado: 'Verdadeiro se a for menor ou igual a b' },
        { operador: '>=', nome: 'Maior ou igual', exemplo: 'a >= b', resultado: 'Verdadeiro se a for maior ou igual a b' }
    ];

    const tabela = document.getElementById('tabela-operadores');

    // Adicionando o cabeçalho da tabela
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Operador</th>
            <th>Nome</th>
            <th>Exemplo</th>
            <th>Resultado</th>
        </tr>
    `;
    tabela.appendChild(thead);

    // Adicionando o corpo da tabela
    const tbody = document.createElement('tbody');
    operadores.forEach(op => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${op.operador}</td>
            <td>${op.nome}</td>
            <td>${op.exemplo}</td>
            <td>${op.resultado}</td>
        `;
        tbody.appendChild(row);
    });
    tabela.appendChild(tbody);
});
