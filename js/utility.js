// import { totalSetNow } from './smart-ticket.js';
// console.log(totalSetNow);

function setBackgroundColotById(element) {
    element.classList.add('bg-[#1DD100]');
}

function removeBackgroundColotById(element) {
    element.classList.remove('bg-[#1DD100]');
}

function addElementById(element) {
    const currentAvailableSeat = document.getElementById('available-seat');
    const currentAvailableSeatText = currentAvailableSeat.innerText;
    const currentSeat = parseInt(currentAvailableSeatText);
    const updateSeat = currentSeat + 1;
    currentAvailableSeat.innerText = updateSeat;
    return element;
}

function addSeat() {
    const currentSelectSeat = document.getElementById('select-seat');
    const currentSelectSeatText = currentSelectSeat.innerText;
    const currentSelected = parseInt(currentSelectSeatText);
    const totalSeat = currentSelected + 1;
    currentSelectSeat.innerText = totalSeat;
    // totalSetNow= totalSeat
    return totalSeat;
}

function substactionElementById(element) {
    const currentAvailableSeat = document.getElementById('available-seat');
    const currentAvailableSeatText = currentAvailableSeat.innerText;
    const currentSeat = parseInt(currentAvailableSeatText);
    const updateSeat = currentSeat - 1;
    currentAvailableSeat.innerText = updateSeat;
    return element;
}

function subSeat() {
    const currentSelectSeat = document.getElementById('select-seat');
    const currentSelectSeatText = currentSelectSeat.innerText;
    const currentSelected = parseInt(currentSelectSeatText);
    const totalSeat = currentSelected - 1;
    currentSelectSeat.innerText = totalSeat;
    // totalSetNow= totalSeat
    return totalSeat;
}

function addCurrentSeat(element, businessclass, price) {
    const currentSeatsElement = document.getElementById('current-seats');
    const businessElement = document.getElementById('business-class');
    const priceElement = document.getElementById('price');

    const seatPTag = document.createElement('p');
    const classPTag = document.createElement('p');
    const pricePTag = document.createElement('p');

    seatPTag.textContent = element;
    classPTag.textContent = businessclass;
    pricePTag.textContent = price;

    currentSeatsElement.appendChild(seatPTag);
    businessElement.appendChild(classPTag);
    priceElement.appendChild(pricePTag);
}

// function removeCurrentSeat(element) {
//     const currentSeatsElement = document.getElementById('current-seats');
//     const seatElements = currentSeatsElement.querySelectorAll('div');
//     seatElements.forEach(seatElement => {
//         if (seatElement.textContent === element) {
//             seatElement.remove();
//         }
//     });
// }


