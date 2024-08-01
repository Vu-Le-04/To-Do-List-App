const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adds task to list
function addTask(){
    // Error message if input is blank
    if(inputBox.value === ''){
        alert("You must write someting!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Remove button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function clearTasks(){
    listContainer.innerHTML = "";
    saveData();
}

// Adds task when "ENTER" key is pressed
inputBox.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        addTask();
    }
});

// When task or remove button is clicked
listContainer.addEventListener("click", function(e){
    // Marks task as complete
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // Removes task from list
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Saves list after any updates
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Loads preexisting list on website load
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
