window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function scrollToSection() {
    const tergetSection = document.getElementById("ticket-section");
    tergetSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}


document.addEventListener('click', function(event) {
    const clickedSeatId = event.target.id;
    const currentSeat = event.target.innerText;
    console.log(currentSeat);
    if (clickedSeatId) {
        const parentDiv = event.target.parentNode;
        console.log(parentDiv);
        checkBgColor = parentDiv.classList.contains('bg-[#1DD100]');
        if (checkBgColor) {
            removeBackgroundColotById(parentDiv);
            addElementById();
            subSeat();
        }else{
            setBackgroundColotById(parentDiv);
            substactionElementById();
            addSeat();
        }
    }
});


