// window.onload = function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// };

function scrollToSection() {
    const tergetSection = document.getElementById("ticket-section");
    tergetSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}


let totalSetNow = 0;
let totalCost = 0;
let discountAmounts = 0;
const amountHeader = document.getElementById("total-cost");
const grandTotal = document.getElementById("grand-total");
const discountTotal = document.getElementById("discountAmount");

document.getElementById('bus-seat').addEventListener('click', function(event) {
    const clickedSeatId = event.target.id;
    const currentSeat = event.target.innerText;
    if (clickedSeatId) {
        const parentDiv = event.target.parentNode;
        checkBgColor = parentDiv.classList.contains('bg-[#1DD100]');
        if (checkBgColor) {
            removeBackgroundColotById(parentDiv);
            addElementById();
            subSeat();
            totalSetNow = totalSetNow - 1;
            totalCost = totalSetNow * 550;
            amountHeader.innerHTML = totalCost;
            grandTotal.innerHTML = totalCost
            removeCurrentSeat(currentSeat);
        }else{
            setBackgroundColotById(parentDiv);
            substactionElementById();
            addSeat();
            totalSetNow = totalSetNow + 1;
            totalCost = totalSetNow * 550;
            amountHeader.innerHTML = totalCost;
            grandTotal.innerHTML = totalCost;
            addCurrentSeat(currentSeat, "Business", "550");
        }
    }
});

function toggleButton() {
    let inputField = document.getElementById('cuponInput');
    let button = document.getElementById('CupponButton');
    button.disabled = !inputField.value;
}

document.getElementById('cuponInput').addEventListener('input', toggleButton);

document.getElementById('CupponButton').addEventListener('click', ()=>{
    let inputField = document.getElementById('cuponInput');
    let cupponDiv = document.getElementById('cuppon-section');
    let cupponDiv1 = document.getElementById('cuppon-section1');
    let value = inputField.value;
    if(value == "NEW15"){
        cupponDiv.classList.add('hidden')
        cupponDiv1.classList.remove('hidden')
        // cupponDiv.classList.add('hidden')
        alert("Your cuppon has been added successfully!!")
        const grandCost = totalCost - (totalCost * (15/100))
        grandTotal.innerHTML = grandCost;
        discountAmounts = totalCost - grandCost;
        discountTotal.innerHTML = discountAmounts;
    }

    if (value == "Couple 20") {
        cupponDiv.classList.add('hidden')
        cupponDiv1.classList.remove('hidden')
        // cupponDiv.classList.add('hidden')
        alert("Your cuppon has been added successfully!!")
        const grandCost = totalCost - (totalCost * (20/100))
        grandTotal.innerHTML = grandCost;
        discountAmounts = totalCost - grandCost;
        discountTotal.innerHTML = discountAmounts;
    }
});


