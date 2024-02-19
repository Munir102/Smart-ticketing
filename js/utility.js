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

function addSeat(element) {
    const currentSelectSeat = document.getElementById('select-seat');
    const currentSelectSeatText = currentSelectSeat.innerText;
    const currentSelected = parseInt(currentSelectSeatText);
    const totalSeat = currentSelected + 1;
    currentSelectSeat.innerText = totalSeat;
    return element;
}

function substactionElementById(element) {
    const currentAvailableSeat = document.getElementById('available-seat');
    const currentAvailableSeatText = currentAvailableSeat.innerText;
    const currentSeat = parseInt(currentAvailableSeatText);
    const updateSeat = currentSeat - 1;
    currentAvailableSeat.innerText = updateSeat;
    return element;
}

function subSeat(element) {
    const currentSelectSeat = document.getElementById('select-seat');
    const currentSelectSeatText = currentSelectSeat.innerText;
    const currentSelected = parseInt(currentSelectSeatText);
    const totalSeat = currentSelected - 1;
    currentSelectSeat.innerText = totalSeat;
    return element;
}
