const symbols = ["lemon", "orange", "cherry", "plum", "watermelon", "grape", "bell", "seven", "dice"];

const spinButton = document.querySelector("#spinButton");
const resetButton = document.querySelector("#resetButton");

let simboluriAfisate = document.querySelectorAll(".simbol");

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

    while (element.innerHTML === v1.innerHTML && y < 2) {
        winLine.push(v1);
        element = v1;
        y++;
        if (y < 2)
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
    while (x < 2 && y < 2) {
        if (matriceSimboluri[x][y].innerHTML === matriceSimboluri[x + 1][y + 1].innerHTML) {
            winLine.push(matriceSimboluri[x + 1][y + 1]);

        }
        x++;
        y++;
    }
    if (winLine.length === 3) {
        for (let i = 0; i < 3; i++) {
            mark(winLine[i]);
        }
        return winLine;
    }

    return false;
}

function winProcedure(winningArray) {

    let winnings = 0;
    winnings += winningArray.length * bet;
    lastWinUpdate(winnings);
    console.log(winnings)
    updateElement(balanceElement, winnings + balance);
    for (let i = 0; i < winningArray.length; i++) {
        //console.log(element)
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
    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        for (var j = 0; j < 3; j++) {
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
    for (let i = 0; i < 3; i++) {
        
            for (let j = 0; j < 3; j++) {
                
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
        for (element of winLocal) {
            if (vecin(element)) {
                winLocal.push(vecin(element));
                mark(vecin(element));
            }
        }
        ok++;
    }


    if (amWin == 0) {
        for (let i = 0; i < 3 && haveWinningLine === 0; i++) {
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
    if (balance >= bet) {
        playHand(bet);
        updateSimboluri();
        //simboluriHack();
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




