let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let newGameBtn=document.querySelector("#new-game");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
           box.innerText="X";
           turnO=true; 
        }
        box.disabled=true;
        count++;
        checkwinner();
    })
})
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let s1=boxes[pattern[0]].innerText;
        let s2=boxes[pattern[1]].innerText;
        let s3=boxes[pattern[2]].innerText;
        if(s1!="" &&s2!="" &&s3!=""){
            if(s1==s2 && s2==s3){
                showWinner(s1);
                
            }
            else if(count==9){
                msg.innerText="Match is Draw";
                msgcontainer.classList.remove("hide");
                disableboxes();
            }
        }
        
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
