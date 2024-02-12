import { toHide, toggleHide } from "./utils.js";
import { menuObj } from "./components/MenuSection.js"
import { rankingObj } from "./components/RankingSection.js";
import { formObj } from "./components/FormSection.js";
import { gameObj} from "./components/GameSection.js";

const initialize = () => {


}

menuObj.newGameBtn.addEventListener('click', () => {
  toHide(menuObj.section);
  toggleHide(formObj.section);
});

menuObj.rankingBtn.addEventListener('click', () => {
  toHide(menuObj.section);
  toggleHide(rankingObj.section);
})

rankingObj.backBtn.addEventListener('click',() =>{
  toHide(rankingObj.section);
  toggleHide(menuObj.section);
} )

formObj.form.addEventListener('submit', e  => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  toHide(formObj.section);
  toggleHide(gameObj.section);
  console.log(data);
})

initialize()









