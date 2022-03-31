# Rock Paper Scissors Game

## Introduction

This project presents a simple webpage prompting the user to play games of Rock Paper Scissors against a basic AI opponent.

A sample deployment of the website is available on [GitHub Pages](https://commiedog.github.io/rock-paper-scissors-game/).


## Table of Contents

* [Description](#description)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Future Work](#future-work)
* [License](#license)


## Description

Upon opening the webpage, the loaded JavaScript code immediately starts a game of Rock Paper Scissors. The user is asked to input either an "R" (Rock), "P" (Paper), or "S" (Scissors). into a prompt box displayed by the browser. The program validates the input and then picks a random value of its own, displaying both values to the user. The program then compares the two values against each other to determine the winner of the game. Finally, the program displays a dialog box tallying up the results of all the sessions played so far and asks the user if they want to play again.


## Features

* Use of `alert()`, `confirm()`, and `prompt()` functions
* Use of basic conditional statements
* Custom functions
* Variables used across global and local scopes
* Use of built-in RNG to contol AI
    ```JavaScript
    function getComputerMove()
    {
        const possibleMoves = ["R", "P", "S"]
        var move = Math.random(); // 0 to 1, floating point
        move = move * possibleMoves.length; // 0 to 3, floating point
        move = Math.floor(move); // 0, 1, or 2
        return possibleMoves[move]; // Reaches inside array to grab random value
    }
    ```
* `do while` loop

## Technologies Used

* HTML
* JavaScript


## Credits

* Lucca Martins
* John Netzel


## License
&copy; 2022 Lucca Martins and John Netzel. All Rights Reserved.