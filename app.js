// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const nameInput = document.getElementById('name-input');
const animalInput = document.getElementById('animal-input');
const nameDisplay = document.getElementById('name-display');
const animalDisplay = document.getElementById('animal-display');


nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});

animalInput.addEventListener('change', () => {
    animalDisplay.textContent = animalInput.value;
});