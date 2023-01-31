/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const kilograms = document.querySelector('#search');
const output = document.querySelector('#output');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    function convertWeight() {
        const weightInKg = document.querySelector('#search').value;
        const weightInLb = weightInKg * 2.2046;
        const weightInG = weightInKg / 0.0010000;
        const weightInOz = weightInKg * 35.274;

        const lbOutput = document.createElement('h1');
        lbOutput.classList.add('lb');

        const gOutput = document.createElement('h1');
        lbOutput.classList.add('g');

        const ozOutput = document.createElement('h1');
        lbOutput.classList.add('oz');

        output.append(lbOutput);
        output.append(gOutput);
        output.append(ozOutput);

        lbOutput.innerHTML = `${weightInLb} lb`;
        gOutput.innerHTML = `${weightInG} g`;
        ozOutput.innerHTML = `${weightInOz} oz`;

      }

      convertWeight();
})

