let i_start = document.getElementById("icon");
let Text_line = document.getElementById("text_line");


i_start.addEventListener("click", () => {
  addItems("Add your items");
});

function addItems(heading, parentNode = "") {
  console.log(heading);

  
  let pop = document.createElement("div");
  pop.className = "popup";
  let popHead = document.createElement("div");
  popHead.id = "popupHead";
  popHead.textContent = heading;
  let popInput = document.createElement("input");
  popInput.id = "popupInput";
  popInput.type = "text";
  
  let buttons = document.createElement("div");
  buttons.className = "buttons";

  let popAdd = document.createElement("button");
  popAdd.id = "popupAdd";
  popAdd.textContent = "Add";

  let popClose = document.createElement("button");
  popClose.id = "popupClose";
  popClose.textContent = "Close";

  
  document.body.appendChild(pop);
  pop.appendChild(popHead);
  pop.appendChild(popInput);
  pop.appendChild(buttons);
  buttons.appendChild(popAdd);
  buttons.appendChild(popClose);

  if (heading === "Add new subitems") {
    popAdd.addEventListener("click", () => {
      creatingSubTask(popInput.value, parentNode);
      closingPop();
    });
  } else if (heading === "Add your items") {
    popAdd.addEventListener("click", () => {
      createNewTask(popInput.value);
      
      Text_line.style.display = "none";
      closingPop();
      pg1();
    });
  }

  
  popClose.addEventListener("click", () => {
    closingPop();
  });

  
  function closingPop() {
    pop.remove();
    popInput.value = "";

    for (let i = 0; i < document.body.children.length; i++) {
      document.body.children[i].style.filter = "blur(0)";
    }
  }


  for (let i = 0; i < document.body.children.length; i++) {
    document.body.children[i].style.filter = "blur(5px)";
  }
  pop.style.filter = "blur(0)";
}

let section = document.querySelector("section");

function createNewTask(cardHeading) {
 
  let todoCard = document.createElement("div");
  todoCard.className = "todoCard";
 

  let cardHead = document.createElement("div");
  cardHead.className = "cardHead";
  cardHead.textContent = cardHeading;

  let subTaskButtons = document.createElement("div");
  subTaskButtons.className = "subTaskButtons";

  let trash = document.createElement("span");
  
  trash.textContent = "-";
  trash.className = "remove";
  
  trash.id = "trash";
  let createSubTask = document.createElement("button");
  createSubTask.className = "createSubTask";
  createSubTask.textContent = "+";

  
  section.appendChild(todoCard);
  todoCard.appendChild(cardHead);
  todoCard.appendChild(subTaskButtons);
  subTaskButtons.appendChild(trash);
  subTaskButtons.appendChild(createSubTask);

 

  createSubTask.addEventListener("click", () => {
    addItems("Add new subitems", todoCard);
  });
  
  trash.addEventListener("click", () => {
    todoCard.remove();
    
    if (section.children.length === 0) {
      todoText.style.display = "block";
    }
  });

 

  cardHead.addEventListener("click", () => {
    pg2(todoCard);
  });
}



function creatingSubTask(subTaskDesc, parentNode) {
 
  let subTaskRow = document.createElement("div");
  subTaskRow.className = "subTaskRow";

  let subTask = document.createElement("span");
  subTask.className = "subTask";
  subTask.textContent = subTaskDesc;

  let markDone = document.createElement("button");
  markDone.className = "markDone";
  markDone.textContent = "Mark Done";

  
  parentNode.appendChild(subTaskRow);
  subTaskRow.appendChild(subTask);
  subTaskRow.appendChild(markDone);

  

  markDone.addEventListener("click", () => {
    subTask.classList.add("checkedSubTask");
    markDone.remove();
  });
}



let back = document.getElementsByClassName("box")[0];
let headtoAdd = document.getElementById("adding_1");

back.addEventListener("click", () => {
  pg1();
});



headtoAdd.addEventListener("click", () => {
  addItems("Add your items");
});

let head1 = document.getElementsByTagName("header")[0];
let head2 = document.getElementsByTagName("header")[1];
let pg2Head = document.getElementById("heading2");

function pg2(parentNode) {
  head1.style.display = "none";
  head2.style.display = "flex";
  parentNode.classList.add("centerCard");
  section.style.visibility = "hidden";
  pg2Head.textContent = parentNode.children[0].textContent;
}

function pg1() {
  head1.style.display = "flex";
  head2.style.display = "none";
  section.style.visibility = "visible";
  removeClass();
}


function removeClass() {
  for (let i = 0; i < section.children.length; i++) {
    section.children[i].classList.remove("centerCard");
  }
}
