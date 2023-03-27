const symbols = ["lemon", "orange", "cherry", "plum", "watermelon", "grape", "bell", "seven", "dice"];

const spinButton = document.querySelector("#spinButton");
const resetButton = document.querySelector("#resetButton");

let simboluriAfisate = document.querySelectorAll(".simbol");

const balanceElement = document.querySelector('#balance');
const betElement = document.querySelector('#bet');
const lastWinElement = document.querySelector('#lastWin')

const panel = document.querySelector("#panel");
const rows = document.querySelectorAll(".gambleRow")


let balance = parseInt(balanceElement.innerHTML);
let bet = parseInt(betElement.innerHTML);
let lastWin = parseInt(lastWinElement.innerHTML);



function addWin(winnings)
{
    updateElement(balanceElement,winnings + balance);
    balance += winnings;
}

function newBalance()
{
    return balance;
}


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
    console.log("Balance din logicabani:" + balance);
    updateElement(balanceElement, balance - bet)
    balance -= bet;
}



let textSimboluri = [];
let matriceSimboluri;

function simbol_random(vector) {
    let randNumber = Math.floor(Math.random() * vector.length)
    return vector[randNumber];
}

function updateSimboluri() {
    textSimboluri = [];
    for (simbol of simboluriAfisate) {
        simbol.innerHTML = simbol_random(symbols);
        textSimboluri.push(simbol.innerHTML);
    }
    matriceSimboluri = matrixRepresentation(simboluriAfisate);
    matriceText = matrixRepresentation(textSimboluri);
}


function line(matrix, line) {
    let winLine = [];
    let element = matrix[line][0];
    winLine.push(element);
    let x = getCoordinates(matrix, element)[0];
    let y = getCoordinates(matrix, element)[1];

    let v1 = matrix[x][y + 1];

    while (element.innerHTML === v1.innerHTML && y < 4) {
        winLine.push(v1);
        element = v1;
        y++;
        if (y < 4)
            v1 = matrix[x][y + 1];
    }
    if (winLine.length === 3) {
        for (element of winLine) {
            mark(element);
            element.style.fontWeight = 'bold';
            element.style.color = 'red';
        }
        return winLine;
    }
    return false;
}

function diagonal() {
    let x = 0;
    let y = 0;
    let winLine = [];
    winLine.push(matriceSimboluri[x][y])
    while (x < 4 && y < 4) {
        if (matriceSimboluri[x][y].innerHTML === matriceSimboluri[x + 1][y + 1].innerHTML) {
            winLine.push(matriceSimboluri[x + 1][y + 1]);

        }
        x++;
        y++;
    }
    if (winLine.length >= 3) {
        for (let i = 0; i < winLine.length; i++) {
            mark(winLine[i]);
        }
        return winLine;
    }

    return false;
}

function winProcedure(winningArray) {

    let winnings = 0;
    winnings += winningArray.length * bet * 1000;
    lastWinUpdate(winnings);
   addWin(winnings);
    for (let i = 0; i < winningArray.length; i++) {
        winningArray[i].style.fontWeight = 'bold';
        winningArray[i].style.color = 'red';
    }
}




function resetElements() {
    for (element of simboluriAfisate) {
        element.style.fontWeight = 'normal';
        element.style.color = 'black';
    }
}


function matrixRepresentation(array) {
    let matrix = [];
    let index = 0;
    for (let i = 0; i < 5; i++) {
        matrix[i] = [];
        for (var j = 0; j < 5; j++) {
            matrix[i][j] = array[index];
            index++;
        }
    }
    return matrix;

}


function getCoordinates(array, char) {
    for (let i = 0; i < array.length; i++) {
        const i2 = array[i].indexOf(char);
        if (i2 !== -1)

            return [i, i2]
    }
    return undefined
}



function lookFor(simbol, linie) {
    let winAdditions = [];
    for (let i = 0; i < 5; i++) {
        
            for (let j = 0; j < 5; j++) {
                
                if (matriceSimboluri[i][j].innerHTML === simbol.innerHTML && Math.abs(i - linie) === 1) {
                    winAdditions.push(matriceSimboluri[i][j])
                    mark(matriceSimboluri[i][j]);
                }
            }
    }
    for (element of winAdditions) {
        if (vecin(element)) {
            winAdditions.push(vecin(element));
            mark(vecin(element))
        }


    }
    return winAdditions;
}

function win() {

    let haveWinningLine = 0;
    let ok = 0;
    let winLocal = [];
    let amWin = 0;
    if (winLocal = diagonal()) {
        amWin = 1;
        let simbolulBuclucas = winLocal[0];
        let winAdditions = lookFor(simbolulBuclucas, i)
        if (winAdditions.length) {
            for (element of winAdditions) {
                winLocal.push(element)
            }
        }
        ok++;
    }


    if (amWin == 0) {
        for (let i = 0; i < 5 && haveWinningLine === 0; i++) {
            if (line(matriceSimboluri, i)) {
                haveWinningLine = 1;
                winLocal = line(matriceSimboluri, i)
                let simbolulBuclucas = winLocal[0];
                let winAdditions = lookFor(simbolulBuclucas, i)
                if (winAdditions.length) {
                    for (element of winAdditions) {
                        winLocal.push(element)
                    }
                }
                ok++;
            }
        }
    }

    if (ok > 0) return winLocal;
    return false;
}

spinButton.addEventListener('click', (e) => {
    console.log("Balance din event listener:" + balance)
    if (balance >= bet) {
        playHand(bet);
        updateSimboluri();
        if (winArray = win()) {

            winProcedure(winArray);

            disableButon();
        }
    }
    else {
        disableButon();
    }
})

resetButton.addEventListener('click', (e) => {
    resetElements();
    enableButon();
    console.clear();
})




