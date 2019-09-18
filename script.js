const letters = ["D", "E", "V", "I", "N", "E", "R"];
const guess = ["_", "_", "_", "_", "_", "_", "_"];
let tab = [];

function guessLetter () {
    let input = document.querySelector("#input").value.toUpperCase();
    letters.forEach((elem, index) => {
        if(elem == input) {
            guess[index] = elem;
            guess[index].split(",");
            document.querySelector("#guess-word").innerText = guess;
        }
    });
}

document.querySelector("#try").addEventListener("click", () => {

    guessLetter();
    document.querySelector("#try").value = "";
});