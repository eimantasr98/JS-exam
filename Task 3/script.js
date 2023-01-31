/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault();
    const output = document.querySelector('#output');
    const msg = document.querySelector('#message');

    async function getUsers() {
        const result = await fetch(ENDPOINT);
        const data = await result.json();
        
        
        for(let i = 0; i < data.length; i++) {
            
            const userbox = document.createElement('div');
            userbox.classList.add('user-box');
            output.append(userbox);

            const usersDisplay = document.createElement('h2');
            usersDisplay.classList.add('users');
            userbox.append(usersDisplay);

            const avatarUrl = document.createElement('h3');
            avatarUrl.classList.add('avatar');
            userbox.append(avatarUrl);
            avatarUrl.innerHTML = `Avatar URL: ${data[i].avatar_url}`;

            usersDisplay.innerHTML = `Login: ${data[i].login}`;
            usersDisplay.style = 'text-align: center; color: white';
            avatarUrl.style = 'text-align: center; padding-bottom: 50px; color: white';

            output.style = 'background-color: #222';
            msg.innerHTML = '';
        }
    }

    getUsers();

})

    


// const getPosts = async () => {
//   const response = await fetch(JSON_PLACEHOLDER_URL);
//   const data = await response.json();
//   console.log(data);
// }

// getPosts();