var playerMove = prompt("Enter a letter: R, P, or S");
playerMove = playerMove.toUpperCase(); // Makes comparisons easier
if(validateUserInput())
{
    alert("Input is valid.");
}

function validateUserInput()
{
    return playerMove === "R" || playerMove === "P" || playerMove === "S";
}