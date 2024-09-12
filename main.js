

const addNewSoldier = document.getElementById("addButton")
const inputFullName =document.getElementById("fullNameInput")
const allSoldiers = JSON.parse(localStorage.getItem('soldier'))|| [];
const table = document.getElementById("tableOfAll")
const  form = document.getElementById("mainForm")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    saveToLocalStorage(form);
})
function saveToLocalStorage(form){
   let  NewSoldier = {

    fullName : form.fullNameInput.value,
    rank: form.rankInput.value,
    position: form.positionInput.value,
    Platoon: form.platoonInput.value,
    missionTime :form. missionTimeInput.value,
    status: form.statusInput.value
   }
   allSoldiers.push(NewSoldier)
   localStorage.setItem("soldier", JSON.stringify(allSoldiers));
   
   showAllSoldier()
}

function showAllSoldier(){
    
    allSoldiers.forEach(element => {
      const soldier =  document.createElement("tr")
      const fullName = document.createElement("td")
      const rank = document.createElement("td")
      const position = document.createElement("td")
      const Platoon = document.createElement("td")
      const missionTime = document.createElement("td")
      const status = document.createElement("td")
      const action = document.createElement("td")


      fullName.textContent = element.fullName
      rank.textContent = element.rank
      position.textContent = element.position
      Platoon.textContent = element.Platoon
      missionTime.textContent = element.missionTime
      status.textContent = element.status

      console.log(element);
      
      const removeButton = document.createElement("button");
      const missionButton = document.createElement("button");
      const editButton = document.createElement("button");

      removeButton.innerText = "remove";
      missionButton.innerText = "mission";
      editButton.innerText = "edit";

      removeButton.classList.add("greenBtn")
      missionButton.classList.add("greenBtn")
      editButton.classList.add("greenBtn")

      action.appendChild(removeButton)
      action.appendChild(missionButton)
      action.appendChild(editButton)

      soldier.appendChild(fullName)
      soldier.appendChild(rank)
      soldier.appendChild(position)
      soldier.appendChild(Platoon)
      soldier.appendChild(missionTime)
      soldier.appendChild(status)
      soldier.appendChild(action)
      table.appendChild(soldier)




        
    });
    
}
