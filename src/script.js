import { toHide, toggleHide } from "./utils.js";

const menuSection = document.querySelector('#menu-section');
const newGameSection = document.querySelector('#new-game-form-section');
const rankingSection = document.querySelector('#ranking-section');
const gameSection = document.querySelector('#game-section');

const newGameForm = document.querySelector('#new-game-form')

const menuNewGameButton = document.querySelector('#menu__new-game-button');



menuNewGameButton.addEventListener('click', () => {

  toHide(menuSection);
  toggleHide(newGameSection);

});
console.log('hila');

newGameForm.addEventListener('submit', (ev) =>{
  ev.preventDefault();
  const formData = new FormData(newGameForm);
  const entriesArray = Array.from(formData.entries());

  
  entriesArray.forEach(entry => {
    const [clave, valor] = entry; 
    console.log(clave, valor); 
  });
});






