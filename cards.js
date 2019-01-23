const textarea = document.getElementById("makeCard");
const container = document.querySelector("#cardContainer");
let cardNumber = 0;


document.querySelector("#cardFactory").addEventListener("click", function() {
    let cardText = textarea.value;
    cardNumber++;
    cardFactory(cardText);
})

const cardFactory = (cardText) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `${cardText} <div><button id="remove--${cardNumber}">delete</div>`;
    newCard.id = `"card--${cardNumber}"`;
    newCard.setAttribute("class", "card")
    container.appendChild(newCard);
}

const deleteButtons = container.querySelectorAll("button");

deleteButtons.forEach(element => {
    element.addEventListener("click", function() {
        let chosenCard = element.parentNode.nodeName;
        container.removeChild(chosenCard);
    })
});

// document.querySelector(`#remove--${cardNumber}`).addEventListener("click", function() {
//     let chosenCard = document.querySelector(`#card--${cardNumber}`);
//     console.log(chosenCard);
//     container.removeChild(chosenCard);
// })