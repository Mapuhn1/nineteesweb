const display = "Hello World";
console.log("Hello Wolrddd");
alert("I am learning JavaScript")
// JavaScript code to change the paragraph text
document.getElementById('myButton').addEventListener('click', function()
 {
    document.getElementById('myH1').innerText = 'The header has been changed!';
    
});


// for changing the color of background with button click 

document.getElementById('myButton2').addEventListener('click', function() {
    // Set a new background color for the body but making it random that each time button is clicked the user gets a new color 
    // function for random color 

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.body.style.backgroundColor = getRandomColor();
});

function MathFn(a, b, operator){
const display = "Which operator would you like to use?"
console.log(display);
let result = 0;

switch (operator){
    case "+" :
    result = a + b
    break;
    case "-":
        result= a - b;
        break;
        case "*":
            result = a * b;
            case "/":
                result = a / b;
                break;
                case "%":
                    result = a % b;
                    break;
                    default :
                    console.log("Invalid operator");
                    break;

}
}
document.getElementById('MathBtn').addEventListener('click', function() {
    
    MathFn(10, 5, "+");
});



