let item = document.getElementById("add_item");
let Text_line = document.getElementById("Text_line");

item.addEventListener("click", () => {
    addItems("Add items");
  });
  
  function addItems(heading, parentNode = "") {
    console.log(heading);

    //   creating pop_up
  let pop = document.createElement("div");
  pop.className = "popup-box";

//heading
  let pop_upHead = document.createElement("div");
  pop_upHead.id = "popupHeading";
  pop_upHead.textContent = heading;

//input
  let popInput = document.createElement("input");
  popInput.id = "p_Input";
  popInput.type = "text";
 
  let buttons = document.createElement("div");
  buttons.className = "button";
//add
  let pop_Add = document.createElement("button");
  pop_Add.id = "Add_p";
  pop_Add.textContent = "Add";

  //close
  let popClose = document.createElement("button");
  popClose.id = "Close_p";
  popClose.textContent = "Close";

  // add items to pop up
  document.body.appendChild(pop);
  pop.appendChild(pop_upHead);
  pop.appendChild(popInput);
  pop.appendChild(buttons);
  buttons.appendChild(pop_Add);
  buttons.appendChild(popClose);


if (heading === "Add new subitems") {
    pop_Add.addEventListener("click", () => {
      creatingSubTask(popInput.value, parentNode);
      close_Popup();
    });
  } else if (heading === "Add your items") {
    pop_Add.addEventListener("click", () => {
      createNewTask(popInput.value);
     
      Text_line.style.display = "none";
      close_Popup();
      pg1();
    });
  }

  //close pop up
  popClose.addEventListener("click", () => {
    close_Popup();
  });

// for making bacground blur

for (let i = 0; i < document.body.children.length; i++) {
  document.body.children[i].style.filter = "blur(5px)";
}
pop.style.filter = "blur(0)";



//close
  function close_Popup() {
    pop.remove();
    popInput.value = "";

    for (let i = 0; i < document.body.children.length; i++) {
      document.body.children[i].style.filter = "blur(0)";
    }
  }

}
