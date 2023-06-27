/*
function soma(a: number, b: number) {
    return a + b;
}
*/
//soma("a", 3);


// interfaces -> contrato para implementar as classes.

/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    categoria: 'selvagem' | 'domestico';
    som(tipoDoSom: string): void;
}


interface IFelino extends IAnimal {
    visaoNoturna: boolean;
    bigode: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

const cachorro: ICanino = {
    nome: 'Cachorro',
    tipo: 'terrestre', //se eu tentar colocar outro valor, o typescript já mostra erro.
    categoria: 'domestico',
    porte: 'pequeno',
    som: (tipoDoSom) => (`${tipoDoSom}`),
}

cachorro.som('Au Au');

const felino: IFelino = {
    nome: 'Gato',
    tipo: 'terrestre',
    categoria: 'domestico',
    visaoNoturna: false,
    bigode: true,
    som: (tipoDoSom) => (`${tipoDoSom}`),
}

//console.log(felino.som('Miau!'));

//types, serve para juntar interfaces ou que uma variável pode ser uma interface.
type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    categoria: 'selvagem',
    nome: 'Cão de caça',
    tipo: 'terrestre',
    porte: 'grande',
    som: (tipoDoSom) => (`${tipoDoSom}`),
}

console.log(animal.nome + " faz " + animal.som('Hou hou hou'));
*/