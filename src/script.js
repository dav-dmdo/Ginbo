import { toHide, toggleHide } from "./utils.js";

const menuSection = document.querySelector('#menu-section');

const menuNewGameButton = document.querySelector('#menu__new-game-button');

const newGameSection = document.querySelector('#new-game-form-section')

const newGameForm = document.querySelector('#new-game-form')

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






