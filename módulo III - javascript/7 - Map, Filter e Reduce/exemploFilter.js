const nomes = 
[
    'Guilherme Augusto', 
    'Guilherme Proença', 
    'Guilherme Amorim', 
    'Lucas Almeida', 
    'Lucas Proença', 
    'Leonardo Almeida', 
    'Leonardo Proença'
];

console.log(nomes.filter((nome) => nome.includes('Proença')) + "\nLista antiga:\n" + nomes);
//retorna os nomes que incluem Proença num novo array.