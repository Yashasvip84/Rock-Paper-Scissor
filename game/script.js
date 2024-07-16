const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.choice');
const playerChoiceImg = document.getElementById('player-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');
const resultPopup = document.getElementById('result-popup');
const resultMessage = document.getElementById('result-message');
const resultEmoji = document.getElementById('result-emoji');
const closeBtn = document.querySelector('.close-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        playerChoiceImg.src = `images/${playerChoice}.png`;
        computerChoiceImg.src = `images/${computerChoice}.png`;

        resultMessage.textContent = winner.message;
        resultEmoji.textContent = winner.emoji;
        resultPopup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    resultPopup.style.display = 'none';
    resetChoices();
});

function resetChoices() {
    playerChoiceImg.src = 'images/placeholder.png';
    computerChoiceImg.src = 'images/placeholder.png';
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return { message: "It's a tie!", emoji: "😐" };
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return { message: 'Player wins!', emoji: "😊" };
    }

    return { message: 'Computer wins!', emoji: "😜" };
}
