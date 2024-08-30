let maincontainer = document.querySelector(".container")
let boxes = document.querySelectorAll(".box")
let restart = document.querySelector(".restart-btn")
let newgamebtn = document.querySelector(".new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn0 = true; 
let count = 0;



let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const drawgame = () =>{
        count=0;
        maincontainer.classList.add("hide")
        msgcontainer.classList.remove("hide")
        restart.classList.add("hide")
        msg.innerText= `Ohh No, no one is win`
    }
``
const restartgame = () =>{
    count=0
    turn0=true
    enableboxes()
    msgcontainer.classList.add("hide")
    maincontainer.classList.remove("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        count++;  
         
         if(turn0){
            box.innerText = "o"
            box.classList.add("color")
            turn0 = false;
        }else{
            box.innerText = "x"
            box.classList.remove("color")
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        
    })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
        restart.classList.remove("hide")
        
    }
}

const showWinner = (winner) =>{
    msg.innerText= `Congratulations, Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    restart.classList.add("hide")
    maincontainer.classList.add("hide")
    disableboxes()
}


const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val)
            }else if(count>=9 && pos1val !== ""){
                drawgame();
            }
            }
        }
    }

restart.addEventListener("click",restartgame)
newgamebtn.addEventListener("click",restartgame)