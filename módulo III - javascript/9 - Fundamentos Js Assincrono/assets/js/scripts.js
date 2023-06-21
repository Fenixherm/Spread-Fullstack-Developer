//Boa pratica criar uma const com uma URL

const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const dogBtn = document.getElementById('change-dog');
const dogImg = document.getElementById('dog');

/*
const getDogs = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.message;
    } catch (e) {
        console.log(e.message);
    }
}
*/

const getDogs2 = async () => {
    const data = await fetch(BASE_URL)
        .then(res => res.json())
        .catch(e => console.log(e))
    
    return data.message;

}

const loadImg = async () => {
    dogImg.src = await getDogs2();
}

dogBtn.addEventListener('click', loadImg);

loadImg();