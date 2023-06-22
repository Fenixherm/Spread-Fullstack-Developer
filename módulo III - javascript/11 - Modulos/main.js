import {showCity as mostraCidade, showHobby as mostraHobby} from './funcoes.mjs';
import showAge from './funcoes.mjs';
const person = {
    name: 'Guilherme',
    age: 25,
    city: 'Sorocaba',
    hobby: 'play video-games',
};
console.log(showAge(person));
console.log(mostraCidade(person));
console.log(mostraHobby(person));