let item = document.getElementById("add_item");
let Text_line = document.getElementById("Text_line");

item.addEventListener("click", () => {
    addItems("Add items");
  });
  
  function addItems(heading, parentNode = "") {
    console.log(heading);

    //   creating pop_up
  let pop = document.createElement("div");
  pop.className = "popup";


  let pop_upHead = document.createElement("div");
  pop_upHead.id = "popupHead";


  pop_upHead.textContent = heading;
  let popInput = document.createElement("input");
  popInput.id = "popupInput";
  popInput.type = "text";
  popInput.placeholder = heading;

  let buttons = document.createElement("div");
  buttons.className = "buttons";

  let pop_Add = document.createElement("button");
  pop_Add.id = "popupAdd";
  pop_Add.textContent = "Add";

  let popClose = document.createElement("button");
  popClose.id = "popupClose";
  popClose.textContent = "Close";

  // add items to pop up
  document.body.appendChild(pop);
  pop.appendChild(pop_upHead);
  pop.appendChild(popInput);
  pop.appendChild(buttons);
  buttons.appendChild(pop_Add);
  buttons.appendChild(popClose);

}

