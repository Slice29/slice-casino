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









