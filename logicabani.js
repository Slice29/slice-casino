const balanceElement = document.querySelector('#balance');
const betElement = document.querySelector('#bet');
const lastWinElement = document.querySelector('#lastWin')

const panel = document.querySelector("#panel");
const rows = document.querySelectorAll(".gambleRow")


let balance = parseInt(balanceElement.innerHTML);
let bet = parseInt(betElement.innerHTML);
let lastWin = parseInt(lastWinElement.innerHTML);

let gambleButton = document.querySelector("#gambleButton");
let gambleWindow = document.querySelector("#gamble-container")


gambleButton.addEventListener('click', e => {
    if (gambleWindow.classList.contains("d-none")) {
        for (row of rows) {
            row.style.opacity = "0.3";
        }
        gambleWindow.classList.remove("d-none");
        gambleWindow.classList.add("d-flex");

    }
    else {
        gambleWindow.classList.remove("d-flex");
        gambleWindow.classList.add("d-none");
    }

})


// gambleButton.addEventListener('click', (e) => {
//     console.log("sunt aici");
//     console.log(gambleWindow.style.display);


// })

function updateElement(element, info) {
    element.innerHTML = info;
}

const up = document.querySelector('#up');
const down = document.querySelector('#down');


up.addEventListener('click', (e) => {
    if (bet <= balance - 10) {
        bet = bet + 10;
        updateElement(betElement, bet)
    }


})

down.addEventListener('click', (e) => {
    if (bet >= 10) {
        bet = bet - 10;
        updateElement(betElement, bet)
    }


})

function lastWinUpdate(winnings) {
    updateElement(lastWinElement, winnings);
}

function gamble(sum) {

}

function playHand(bet) {
    updateElement(balanceElement, balance - bet)
    balance -= bet
}