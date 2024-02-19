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



