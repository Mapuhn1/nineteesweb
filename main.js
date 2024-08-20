const select = document.querySelector("select");
const output = document.querySelector("p");

select.addEventListener("change" , BusTiming);

function BusTiming(){
    const choice = select.value;

    if (choice == "morning"){
        output.textContent = "The buses passing are as follows : 0600 - 0859 "
    }
    else if (choice == "afternoon"){
        output.textContent = "The buses passing are as follows : 1159 - 1759 "
    }
    else if (choice == "evening"){
        output.textContent = "The buses passing are as follows : 1759 - 2359 "
    }
    else {
        output.textContent = "";
    }
}
let from = prompt("Where are you traveling from?");
let to = prompt("Where are you traveling to?");
let journey = "Finding you a bus from "+ from + " to " + to;
alert(journey);
