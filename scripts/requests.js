const baseUrl = 'https://api.github.com/users';
const myHeaders = {
    'Content-Type': 'application/json'
}

export async function getUser(user) {
    const userReturn = await fetch(`${baseUrl}/${user}`, {
        method: 'GET', 
        headers: myHeaders
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        localStorage.setItem('user', JSON.stringify(responseJson));
        location.assign('./profile/index.html');
        return responseJson;
    })
    return userReturn;
}

export async function getRepos(user) {
    const repos = fetch(`${baseUrl}/${user}/repos`, {
        method: 'GET', 
        headers: myHeaders
    })
    .then(resp => resp.json())
    .then(resp => {
        renderCard(resp);
        return resp
    })
    .catch(error => console.log(error));
}
