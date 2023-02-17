function renderCard(array) {
    const ul = document.querySelector('ul');

    console.log(array);

    ul.innerHTML = '';

    array.forEach(element => {
        ul.append(createCard(element));    
    });
}

function createCard(rep) {
    const card = document.createElement('li');
    const nameRep = document.createElement('p');
    const linkRep = document.createElement('a');
    
    card.classList.add('card');

    nameRep.innerText = rep.name;
    linkRep.setAttribute('href', `${rep.html_url}`)
    
    card.appendChild(nameRep, linkRep);

    return card;
}

function createProfile(user) {
    const divPerfil = document.querySelector('.perfil');
    const img = document.createElement('img');
    const span = document.createElement('span');

    img.src = user.avatar_url;
    span.innerText = user.name; 

    divPerfil.appendChild(img, span);

    return divPerfil;
}