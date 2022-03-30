const winResult = "Win";
const lossResult = "Loss";
const tieResult = "Tie";

var computerMove;
var playerMove = prompt("Enter a letter: R, P, or S");
playerMove = playerMove.toUpperCase(); // Makes comparisons easier
if(validateUserInput())
{
    alert("You chose " + playerMove);
    computerMove = getComputerMove();
    alert("The computer chose " + computerMove)
    var result = getWinner();
    if (result === tieResult)
    {
        alert("You tied.");
    }
    else if (result === winResult)
    {
        alert("You Win!");
    }
    else if (result === lossResult)
    {
        alert("You lost!");
    }
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

function getWinner()
{
    if (playerMove === computerMove)
    {
        return tieResult;
    }
    // Player win conditions
    else if (playerMove === "P" && computerMove === "R")
    {
        return winResult;
    }
    else if (playerMove === "S" && computerMove === "P")
    {
        return winResult;
    }
    else if (playerMove === "R" && computerMove === "S")
    {
        return winResult;
    }

    // Player loss conditions
    else if (playerMove === "P" && computerMove === "S")
    {
        return lossResult;
    }
    else if (playerMove === "S" && computerMove === "R")
    {
        return lossResult;
    }
    else if (playerMove === "R" && computerMove === "P")
    {
        return lossResult;
    }
}