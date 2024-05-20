const customerCards = document.querySelectorAll('#customers aside ul.client-card li');
const outerSection = document.querySelector('#customers');

customerCards.forEach(card => {
    card.setAttribute("onclick","cardclicked(this)");
})



function cardclicked(card) {
    outerSection.classList.add('show-mobile-details');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function goBack() {
    outerSection.classList.remove('show-mobile-details');
}