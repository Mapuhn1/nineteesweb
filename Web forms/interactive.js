// drag and 

const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.dropzone');
 
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});
 
dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});
 
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}
 
function dragOver(event) {
    event.preventDefault();
}
 
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.textContent = document.getElementById(data).textContent;
    document.getElementById(data).style.display = "none";
}

// for questions 1 to 3
let score = 0;
let result = "";

function checkAns(){
    // Question 1
    const q1 = document.querySelectorAll('input[name="q1"]:checked');
    let q1Correct = ["Helium", "Oxygen"];
    let q1UserAnswers = Array.from(q1).map(input => input.value);
    if (arraysEqual(q1UserAnswers, q1Correct)) {
        score++;
    }

    //Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "Mars") {
        score++;
    }
    //question3
    const q3 = document.getElementsByTagName('q3').value.trim().toLowerCase();
    if (q3 === "twiglight") {
        score++;
    }
}
function showResults(){
    document.getElementById('result').textContent = `You scored ${score} out of 4.`;

}