
const startGame=document.querySelector(".startGame")
const restartGame=document.querySelector(".restart")
const Gameboard = (function (){
  let gameboard=[]
  let moveMade=0
  let players=[]
  
 
   let currentPlayer;  
     const text=document.querySelector(".text")
     let board=document.querySelectorAll(".cell")
     
      let currentTurn
    const render=()=>{
      currentTurn=0;

       players=[
        PlayerModule.createPlayer(document.getElementById('player1').value, "X"),
    
    
        PlayerModule.createPlayer(document.getElementById('player2').value, "O")
       ]
      

      board.forEach(b=>{
        b.addEventListener("click",handleClick,{once:"true"})
         console.log(b)
      })
     
    }
   


const handleClick=(e) =>{
 
  let cellData=e.target.id
  console.log(e)
  if (!isCellClicked(cellData)) {
   playerSelection();
   markCell(e.target,cellData)
   
    whoTurnNext();

    if (checkWinner()) {
      
      currentPlayer = players[currentTurn ? 1 : 0].name
      text.textContent = `${currentPlayer} wins the game`;

    
      board.forEach(b => {
        b.removeEventListener('click', handleClick);
      });
      restart();
    }



if( checkDraw()){
    text.textContent="Draw"
  }
}
}

const isCellClicked = (cellId) => {
  return gameboard[cellId] !== undefined;
};

    const playerSelection=()=>{
      currentPlayer = players[currentTurn ? 1 : 0].symbol
    
      currentTurn=!currentTurn  
  }


    const markCell=(b,id)=>{
      moveMade++
    gameboard[id]=currentPlayer;
    b.textContent=currentPlayer;
    
    }

  
    const whoTurnNext=()=>{
      const nextPlayer = players[currentTurn ? 1 : 0].symbol; 
     text.textContent=`${nextPlayer} turns`

    }

  
    const checkWinner=()=>{

      if(gameboard[0]==currentPlayer&&gameboard[1]==currentPlayer&&gameboard[2]==currentPlayer){
        
        
        return true;

    }
    if(gameboard[3]==currentPlayer&&gameboard[4]==currentPlayer&&gameboard[5]==currentPlayer){
        

        return true;
    }
    if(gameboard[6]==currentPlayer&&gameboard[7]==currentPlayer&&gameboard[8]==currentPlayer){
       
        return true;
    }
    if(gameboard[0]==currentPlayer&&gameboard[3]==currentPlayer&&gameboard[6]==currentPlayer){
        
        return true;
    }
    if(gameboard[1]==currentPlayer&&gameboard[4]==currentPlayer&&gameboard[7]==currentPlayer){
       
        return true;
    }
    if(gameboard[2]==currentPlayer&&gameboard[5]==currentPlayer&&gameboard[8]==currentPlayer){
       
        return true;
    }
    if(gameboard[0]==currentPlayer&&gameboard[4]==currentPlayer&&gameboard[8]==currentPlayer){
       
        return true;
    }
    if(gameboard[2]==currentPlayer&&gameboard[4]==currentPlayer&&gameboard[6]==currentPlayer){
       
        return true;
    }
    
  
 
    }
 

const checkDraw=()=>{
  if(moveMade===9&&!checkWinner()){
    
  return true;
  }
}




   
   const restart=()=>{
    let btn=document.createElement('button')  
    btn.textContent="Restart"
    restartGame.appendChild(btn)
    restartGame.addEventListener("click",()=>{
    window.location.reload(false)
})
   }
  

return{

    render,handleClick,checkWinner,checkDraw,markCell
}



})()

const PlayerModule = (function () {
const createPlayer=(name, symbol)=> {
return {
    name,
    symbol
  }
}

return {
  createPlayer,
};
})();


const Game=(function(){

 
      const playGame=()=>{
        Gameboard.render()
  
      }


      return{playGame}
})()



 startGame.addEventListener("click",
  Game.playGame,{once:"true"}


)
