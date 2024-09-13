const webpage = document.querySelector("body");



async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetched = await response.json();
    console.log(fetched)
    showUsers(fetched);
}


function showUsers(details) {
    for (user of details) {
        
        const userCard = document.createElement("div");
        userCard.className = "card";
        userCard.innerHTML = `
        <h1> Name : ${user.name}<h1>
        <h2 id = "username"> Username : ${user.username} <h2>
        <h3> Email : ${user.email} <h3>
        <p class = "deets"> Address : ${user.address.street}, ${user.address.suite} <br>
        
        </p>
        
        
        `;
        const button = document.createElement("button");
        button.className = "userDetails";
        // webpage.innerHTML = ``;
        webpage.appendChild(userCard)
    }
    
}


// meant to display user cards if both username and pssword is correct, dont forget to put back method that calls async function for fnctionlaity

const username = "hazel";
const password = "hazel";

const access = document.getElementById("myForm");

access.addEventListener("submit", showDeets());

const entry = document.getElementById("username").value;
const pass = document.getElementById("password").value;
function showDeets(){
    if (entry === username && pass === password){
        fetchUser();

    }
    else{
        alert("Access is denied !!")
    }
}




// function changeweb(e){
//     document.getElementsByClassName(deets)
// }


