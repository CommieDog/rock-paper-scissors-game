var computerMove;
var playerMove = prompt("Enter a letter: R, P, or S");
playerMove = playerMove.toUpperCase(); // Makes comparisons easier
if(validateUserInput())
{
    alert("You chose " + playerMove);
    computerMove = getComputerMove();
    alert("The computer chose " + computerMove)
}

function validateUserInput()
{
    return playerMove === "R" || playerMove === "P" || playerMove === "S";
}

function getComputerMove()
{
    const possibleMoves = ["R", "P", "S"]
    var move = Math.random(); // 0 to 1, floating point
    move = move * possibleMoves.length; // 0 to 3, floating point
    move = Math.floor(move); // 0, 1, or 2
    return possibleMoves[move]; // Reaches inside array to grab random value
}