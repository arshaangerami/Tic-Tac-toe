const gameCell = document.querySelector('#cell')
const resetMyGame = document.querySelector("#reset-game")
const message = document.querySelector("#message")

let isEnd = false
let turn = "X"

let winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//make function to check winner
const checkWin =() => {
    let turnClass = (`fill- ${turn}`)
    let isWon = winningCondition.some(function(winningCondition){
        let winning = winningCondition.every(function(index) {
            return square[index].classList.contains(turnClass)
        })
        return winning
    })
    return isWon;
}


//make function to check draw
const checkDraw = () => {
    filledCount =0
    let square = squares[i]
    if (square.classList.contains("fill-x") || square.classList.contains("fill-O")){
        filledCount++
    }
    if (filledCount === 9)return true;
    else return false;

}
//
const resetGame =() =>{
    while(gameCell.firstChild){
        //if the
        gameCell.removeChild(gameCell.firstChild)
    }
    message.innerText ="Reset GAME"

}



//The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using id and/or class on clickable elements will help you wire this up in JavaScript afterwards
const makeGameBoard = () => {
    while(gameCell.firstChild){
        gameCell.removeChild(gameCell.firstChild)
    }
    //cell create loop
    for (let i= 0 ; i< 9 ; i++){
        //console.log make sure loop run correctly
        console.log('Make a square')
        //if there is any letter in in gameCell,clear them out
    
        //generate a div every loop
        const square = document.createElement('div')
        //make that div a square
        square.classList.add('square')
        //append those divs to square
        gameCell.appendChild(square)
        //give each square X or O
        // const filledWithx = Math.floor(math.random() * x)//I couldn't make random letter between x or y
        // const filledWithy = Math.floor(math.random() * y)
        // square.innerText= `(${filledWithx} ${filledWithy})`
        square.addEventListener('click',function(event){
            if (isEnd) return;
            let square = event.target
            console.log(` fill- ${turn}`)
            
        })
        if (checkWin()){
            message.innerText =turn.toUpperCase() +"is winner."
            isEnd =true;
        }else if(checkDraw()){
            message.innerText = "That's a tie"
        }else {
             turn = turn === "X"? "O" : "X";
            message.innerText = "It's" + turn.toUpperCase + "turn"
        }
    }

    {once :true}
}



//that mean I want to do it bunch of time so need loop


//add event listener
// listener will wait for the Dom content to load, then make a gameboard
document.addEventListener('DOMContentLoaded', () => {
    resetGame.addEventListener('click', makeGameBoard)
    makeGameBoard()


})