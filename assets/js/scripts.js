//Constante que armazena o endereço da api
//É uma pratica comum
const BASE_URL = 'https://dog.ceo/api/breeds/image/random'
const catBtn = document.getElementById('change-dog')
const catImg = document.getElementById('dog')
//Função que carrega os dados da requisição
const getDogs = async() => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e))
        
    return data.message;
}

const loadImg = async() => {
    catImg.src = await getDogs()
}

catBtn.addEventListener('click', loadImg)

loadImg()