const add1=document.getElementById("popupbox")
const cardCon=document.getElementById("cardcontainer")
const newCardName=document.getElementById("newCardName")
const popupbox2=document.getElementById("popupbox1")
const main=document.getElementById("main")


//p2
//const carditem= document.getElementById("newCardName1")
//const addList= document.getElementById("add1")
//const delitem= document.getElementById("close1")

//function for add new task

function addTask(){
 add1.classList.remove("hide")
 main.style.filter="blur"

}


//function for back button

function hideTask(){
 add1.classList.add("hide")
}

//function for adding card

function cardAdd(){
    //for main div
    var newCard =document.createElement("div")
    

    //for heading
     var title =document.createElement("h2")
     title.classList.add("title")

     //for list 
     var listItem =document.createElement("div")
     listItem.classList.add("Listitem")

     //for deletebutton
     var delBut =document.createElement("button")
     delBut.classList.add("delbut")

     //for adding  loist item button
     var addItem=document.createElement("button")
     addItem.classList.add("addbut")


     newCard.appendChild(title)
     newCard.appendChild(listItem)
     newCard.appendChild(delBut)
     newCard.appendChild(addItem)

     cardCon.appendChild(newCard)

     newCard.classList.add("card")

     title.innerHTML=newCardName.value
     delBut.innerHTML="Delete"
     addItem.innerText="+"
     
     delBut.addEventListener("click",function (){
        newCard.remove()
     })
     //popup create

    //P_BOX
     newCard.addEventListener("click",function(){
      var pop2=document.createElement("div")
      pop2.classList.add("pop2")
        newCard.appendChild(pop2)


     //HEADING
      var heading2=document.createElement("p")
      heading2.classList.add("hd2")
      pop2.appendChild(heading2)
      heading2.innerHTML="ADD TASK"

      
    //input
      var input= document.createElement("input")
      input.classList.add("input")
      pop2.appendChild(input)

   //add button
   var  add_1=document.createElement("button")
   add_1.classList.add("add1")
   pop2.appendChild(add_1)
   add_1.innerHTML="ADD"


   add_1.addEventListener("click",function(){
      listItem.innerHTML=input.value
   })

   //back
    var back=document.createElement("button")
    back.classList.add("close1")
    pop2.appendChild(back)
    back.innerHTML="BACK"
   
 
    back.addEventListener("click",function (){
      pop2.remove()
   })









     })




     hideTask()

     

 
}

//const carditem= document.getElementById("newCardName1")
//const addList= document.getElementById("add1")
//const delitem= document.getElementById("close1")

// second pop up...........

//function bucket(){
//listItem.innerHTML=carditem.value
   
//}