/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector('#output');

window.addEventListener('load', () => {
    
    const getData = async () => {
        const response = await fetch(ENDPOINT);
        const data = await response.json();

        for(let i = 0; i < data.length; i++) {
            console.log(data[i].models);
            const brandDisplay = document.createElement('div');
            brandDisplay.classList.add('brand');
            output.append(brandDisplay);
            brandDisplay.innerHTML = data[i].brand;

            const modelBox = document.createElement('div');
            modelBox.classList.add('model-box');
            brandDisplay.append(modelBox);

            const modelDisplay = document.createElement('li');
            const models = document.createElement('ul');
            models.innerHTML = data[i].models;

            modelDisplay.append(models);
            modelBox.append(modelDisplay);
        }
        
        
    }
    getData();
})
