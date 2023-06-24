const a = document.getElementById(`span`);
const computer_score = document.getElementById(`computer_score`);
const your_score = document.getElementById(`your_score`);
const button = document.querySelectorAll(`button`);
var targeted;
let computer;
let  b ;
let score=0;
let score_computer=0;

function reset(){
    score=0;
    score_computer=0;
    a.innerHTML = `Bot Choosed `;
    computer_score.innerHTML = parseInt(score_computer);
    your_score.innerHTML = parseInt(score);
    

}




button.forEach(myfunction=>{
    myfunction.addEventListener(`click`,function(e){
                targeted= e.target.id;
                computerchoice();
                resultcome();
         
    })
});

function computerchoice()
{
    const computerChoic = Math.floor(Math.random() * 3) + 1;
    
    switch (computerChoic) {
      case 3:
        computer = "scissor";
        break;
      case 2:
        computer = "paper";
        break;
      case 1:
        computer = "Rock";
        break;
    }
    
    a.innerHTML = `Bot chose ${computer}`;
    
 //console.log(computer);

}
function resultcome()
{
      

    if(computer === targeted )
    {
        alert("The match is draw!!");
    }
     if(computer === "Rock" && targeted ==="paper")
    {
        score++;
        your_score.innerHTML = parseInt(score);

    }
    if(computer === "Rock" && targeted ==="scissor")
    {
        score_computer++;
        computer_score.innerHTML = parseInt(score_computer);

    }
    if(computer === "paper" && targeted ==="scissor")
    {
        score++;
        your_score.innerHTML = parseInt(score);

    }
    if(computer === "paper" && targeted ==="Rock")
    {
        score_computer++;
        computer_score.innerHTML = parseInt(score_computer);

    }
    if(computer === "scissor" && targeted ==="Rock")
    {
        score++;
        your_score.innerHTML = parseInt(score);

    }
    if(computer === "scissor" && targeted ==="paper")
    {
        score_computer++;
        computer_score.innerHTML = parseInt(score_computer);

    }
}

