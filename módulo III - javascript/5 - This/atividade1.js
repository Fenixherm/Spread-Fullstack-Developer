function mediaSala(arr, media) {
    let aprovados = []
    
    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i]; //basicamente divide o array em {nome, nota} daquele índice
        if(nota >= media)
        {
            aprovados.push(nome)
        }
    }

    return aprovados
}

/* é igual a */
function mediaSala2(arr, media) {
    let aprovados = []
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nota >= media)
        {
            aprovados.push(arr[i].nome)
        }
    }

    return aprovados
}

const alunos = 
[
    {
        nome: "Jonas",
        nota: 8,
        turma: "1B",
    },

    {
        nome: "Lucas",
        nota: 7,
        turma: "1B",
    },

    {
        nome: "Kevin",
        nota: 6,
        turma: "1B",
    },

    {
        nome: "Guilherme",
        nota: 4,
        turma: "2B",
    },
];


console.log(mediaSala(alunos, 5))
console.log(mediaSala2(alunos, 7))