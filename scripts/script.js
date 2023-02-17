import { getUser } from "./requests.js";
import { getRepos } from "./requests.js";

function searchUser() {
    const form = document.querySelector('form');
    const input = document.querySelector('input');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const inputValue = input.value;
        const userName = await getUser(inputValue);
        createProfile(await getUser(inputValue));
        renderCard(await getRepos(inputValue));
    })
}

searchUser()

const user = JSON.parse(localStorage.getItem('user'));

await getRepos(user.login);


// Criar requisições na API e retornar os valores necessários para renderizar. 
// Armazenar o usuário pesquisado no localstorage. 
// Criar a função que utiliza o input para pesquisar o usuário.