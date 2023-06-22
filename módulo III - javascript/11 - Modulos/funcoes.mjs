function showAge(person) {
    return `${person.name} is ${person.age} years old`;
}
function showCity(person) {
    return `${person.name} lives in ${person.city}`
}
export function showHobby(person) {
    return `${person.name} likes to ${person.hobby}`
}
export {
    showCity,
}
export default showAge;
//exportando de 3 maneiras possiveis.