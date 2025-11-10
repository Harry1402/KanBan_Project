const todoboard = document.getElementById('todoboard');

 function addElement(){
    var newitem =document.createElement("p");
    let text = prompt("Please Enter The Task");
    if(text != null){
        newitem.innerHTML = text;
    }

    todoboard.appendChild(newitem);
    newitem.setAttribute("class","item");
    newitem.setAttribute("draggable",true);
    newitem.classList.add("item");

    attachDragEvents(newitem);
   
   
}

// ----------------------2nd Functionality------------------------

const DropWalaBoard =document.querySelectorAll('.Board');
const Dragwalaitem =document.querySelectorAll('.item');
// console.log("Item selected");



function attachDragEvents(Dragwalaitem){
    Dragwalaitem.addEventListener("dragstart",()=>{
    Dragwalaitem.classList.add("flying");
    console.log("Being Dragged");
    
})

Dragwalaitem.addEventListener("dragend",()=>{
    Dragwalaitem.classList.remove('flying');
    console.log("Dragg End");
    
})
}


Dragwalaitem.forEach((item) => attachDragEvents(item));

DropWalaBoard.forEach(Board => {
  Board.addEventListener('dragover', () => {
    // e.preventDefault();
     const flyingElement = document.querySelector('.flying');
    console.log(Board, 'Kuch toh mere upper se gya', flyingElement);
    Board.appendChild(flyingElement);
});
});

DropWalaBoard.forEach((Board )=> {
    //hovering Over
    Board.addEventListener( "dragover",()=>{
        Board.classList.add("hoverover");
    } );

    // no longer hover over 

    Board.addEventListener("dragleave",()=>{
        Board.classList.remove("hoverover");
    })
});



// --------------------------DarkMode Functionality--------------------------

const togglebutton =document.getElementById("theme-toggle");
const body =document.body ;

body.classList.add('light-mode');

togglebutton.addEventListener("click",()=>{
    if(body.classList.contains("light-mode")){
        body.classList.replace("light-mode","dark-mode");
        togglebutton.textContent ="switch to   light mode";
    }else{
        body.classList.replace("dark-mode","light-mode");
        togglebutton.textContent ="Switch to dark mode";
    }
})



