const textarea = document.getElementById("makeCard");
const container = document.querySelector("#cardContainer");
let cardNumber = 0;


document.querySelector("#cardFactory").addEventListener("click", function() {
    let cardText = textarea.value;
    cardNumber++;
    cardFactory(cardText);
    addDeleteEvent();
})

const cardFactory = (cardText) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="cardText">${cardText}</div> <div><button id="remove--${cardNumber}">delete</div>`;
    newCard.id = `card--${cardNumber}`;
    newCard.setAttribute("class", "card")
    container.appendChild(newCard);
}

const addDeleteEvent = () => {
    const deleteButtons = container.querySelectorAll("button");
    const cardList = container.querySelectorAll(".card");
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", function() {
            let cardID = "";
            let delNumber = event.target.id.split("--")[1];
            cardList.forEach(element => {
                if (element.id === `card--${delNumber}`) {
                    cardID = element.id;
                }
            });
            container.removeChild(container.querySelector(`#${cardID}`));
        })
    }
}