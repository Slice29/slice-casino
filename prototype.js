function getCoordinates(array, char) {
    for (let i = 0; i < array.length; i++) {
        const i2 = array[i].indexOf(char);
        if (i2 !== -1)

            return [i, i2]
    }
    return undefined
}


function v1(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (x - 1 > -1) {
        if (element.innerHTML == matriceSimboluri[x - 1][y].innerHTML && !isMarked(matriceSimboluri[x - 1][y])) return matriceSimboluri[x - 1][y];
    }
    return false;
}

function v2(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (x - 1 > -1 && y + 1 < 3) {
        if (element.innerHTML == matriceSimboluri[x - 1][y + 1].innerHTML && isMarked(matriceSimboluri[x - 1][y + 1]) === false) {

            return matriceSimboluri[x - 1][y + 1];
        }
    }
    return false;
}

function v3(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (y + 1 < 3) {
        if (element.innerHTML == matriceSimboluri[x][y + 1].innerHTML && !isMarked(matriceSimboluri[x][y + 1])) return matriceSimboluri[x][y + 1];
    }
    return false;
}
function v4(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (x + 1 < 3 && y + 1 < 3) {
        if (element.innerHTML == matriceSimboluri[x + 1][y + 1].innerHTML && !isMarked(matriceSimboluri[x + 1][y + 1])) return matriceSimboluri[x + 1][y + 1];
    }
    return false;
}

function v5(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (x + 1 < 3) {
        if (element.innerHTML == matriceSimboluri[x + 1][y].innerHTML && !isMarked(matriceSimboluri[x + 1][y])) return matriceSimboluri[x + 1][y];
    }
    return false;
}

function v6(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (x + 1 < 3 && y - 1 > -1) {
        if (element.innerHTML == matriceSimboluri[x + 1][y - 1].innerHTML && !isMarked(matriceSimboluri[x + 1][y - 1])) return matriceSimboluri[x + 1][y - 1];
    }
    return false;
}
function v7(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (y - 1 > -1) {
        if (element.innerHTML == matriceSimboluri[x][y - 1].innerHTML && !isMarked(matriceSimboluri[x][y - 1])) return matriceSimboluri[x][y - 1];
    }
    return false;
}

function v8(element) {
    let x = getCoordinates(matriceSimboluri, element)[0];
    let y = getCoordinates(matriceSimboluri, element)[1];
    if (x - 1 > -1 && y - 1 > -1) {
        if (element.innerHTML == matriceSimboluri[x - 1][y - 1].innerHTML && !isMarked(matriceSimboluri[x - 1][y - 1])) return matriceSimboluri[x - 1][y - 1];
    }
    return false;
}



function vecin(element) {
    if (v1(element)) v1(element)
    if (v2(element)) v2(element)
    if (v3(element)) v3(element)
    if (v4(element)) v4(element)
    if (v5(element)) v5(element)
    if (v6(element)) v6(element)
    if (v7(element)) v7(element)
    if (v8(element)) v8(element)
    return false;

}


function simboluriHack() {
    matriceSimboluri[0][0].innerHTML = 'plum';
    matriceSimboluri[0][1].innerHTML = 'plum';
    matriceSimboluri[0][2].innerHTML = 'plum';

    matriceSimboluri[1][0].innerHTML = 'lemon';
    matriceSimboluri[1][1].innerHTML = 'plum';
    matriceSimboluri[1][2].innerHTML = 'plum';

    matriceSimboluri[2][0].innerHTML = 'lemon';
    matriceSimboluri[2][1].innerHTML = 'cherry';
    matriceSimboluri[2][2].innerHTML = 'plum';
}


function disableButon() {
    spinButton.style.color = 'red'
    spinButton.disabled = true;
}

function enableButon() {
    spinButton.style.color = 'white'
    spinButton.disabled = false;
}


function isMarked(element) {
    if (element.ariaCheked == 1) return true;
    return false;
}

function mark(element) {
    element.ariaCheked = 1;
}



function lookFor(simbol, linie) {
    let winAdditions = [];
    for (let i = 0; i < 3; i++) {
        if (i !== linie) {
            for (let j = 0; j < 3; j++) {
                // console.log(i, j, matriceSimboluri[i][j].innerHTML);
                if (matriceSimboluri[i][j].innerHTML === simbol.innerHTML && Math.abs(i - linie) === 1) {
                    winAdditions.push(matriceSimboluri[i][j])
                    mark(matriceSimboluri[i][j]);
                }
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