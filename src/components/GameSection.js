const section = document.querySelector('#game-section');

const gameBoard = document.querySelector('#game-board');

const gArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const nArray = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const bArray = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const oArray = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const ginboBoard = [gArray, iArray, nArray, bArray, oArray];

ginboBoard.forEach((e) => console.log(e))

const createArray = (boardSize) => {
    return Array(boardSize).fill(Array(boardSize).fill(0));
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

const chooseRandomFromArry = (indexArray, array) =>{
    let random = ginboBoard[indexArray][getRandomInt(0,array.length)];

}

const generateBoard = (boardSize) => {
    const copyG = [...gArray];
    const copyI = [...iArray];
    const copyN = [...nArray];
    const copyB = [...bArray];
    const copyO = [...oArray];
    const copyGingoBoard = [copyG,copyI,copyN,copyB,copyO];

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) { 
        }

    }
}



export const gameObj = {
    section
}

