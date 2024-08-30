

const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');
 
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