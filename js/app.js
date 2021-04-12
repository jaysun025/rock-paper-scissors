let rockBtn;
let paperBtn;
let scissorsBtn;
let playerImage;
let computerImage;
let playerChoice;
let resultText;
const rockImg = "https://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg";
const paperImg = "https://bpimediagroup.com/wp-content/uploads/2018/04/61qSdyDYbZL._SL1185_.jpg";
const scissorsImg = "https://upload.wikimedia.org/wikipedia/commons/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg"


// Page loads 
document.addEventListener("DOMContentLoaded", (e) => {
    // this is where we do the stuff once the page is loaded
    rockBtn = document.querySelector('.js-rock');
    paperBtn = document.querySelector('.js-paper');
    scissorsBtn = document.querySelector('.js-scissors');
    playerImage = document.querySelector(".js-playerImage")
    computerImage = document.querySelector(".js-computerImage")
    resultText = document.querySelector(".midBox h3")

    rockBtn.addEventListener("click", (e) => {
        // set the player choice variable
        playerChoice = rockBtn.getAttribute("data-value")
        // change he image
        playerImage.src = rockImg;
        // apply some visual indicator to the element
        // start the game
        checkForWin();
    })

    paperBtn.addEventListener("click", (e) => {
        // set the player choice variable
        playerChoice = paperBtn.getAttribute("data-value")
        // change he image
        playerImage.src = paperImg;
        // apply some visual indicator to the element
        // start the game
        checkForWin();

    })

    scissorsBtn.addEventListener("click", (e) => {
        // set the player choice variable
        playerChoice = scissorsBtn.getAttribute("data-value")
        // change he image
        playerImage.src = scissorsImg;
        // apply some visual indicator to the element
        // start the game
        checkForWin();
    })
})

function checkForWin() {
    // Computer chooses (randomly)
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);

    switch(index) {
        case 0:
            computerImage.src = rockImg;
            break;
        case 1:
            computerImage.src = paperImg;
            break;
        case 2: 
            computerImage.src = scissorsImg;
            break;
                
    }
    if (choices[index] === playerChoice) {
        //this is a tie
        resultText.textContent = "TIE"
        //reset the game
    } else if ((choices[index] === "rock" && playerChoice === "scissors") || 
    (choices[index] === "paper" && playerChoice === "rock") ||
    (choices[index] === 'scissors' && playerChoice === "paper")) {
        //we lost
        resultText.textContent = "LOSS"
    } else {
        // we won
        resultText.textContent = "WIN"
    }
   
    setTimeout(reset, 3000)
}


function reset() {
    playerChoice = "";
    computerImage.src = "";
    resultText.textcontent = "";
}

