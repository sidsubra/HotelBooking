
const profileCards = document.querySelectorAll('#profile aside .tab');
const outerSection = document.querySelector('#profile');

function showSection(clickedTab){
    document.querySelectorAll('#profile section').forEach(tab => {
        if(tab.classList.contains('activeSection')){
            tab.classList.remove('activeSection');
        }
    })

    let activeSection = document.getElementById(`${clickedTab.getAttribute('data-tab-for')}`);
    activeSection.classList.add('activeSection');
}


profileCards.forEach(card => {
    card.setAttribute("onclick","cardclicked(this)");
})

function cardclicked(card) {
    selectedsection = document.getElementById(`${card.getAttribute("data-tab-for")}`);

    document.querySelectorAll('#profile section').forEach(tab => {
        if(tab.classList.contains('activeSection')){
            tab.classList.remove('activeSection');
        }
    })


    outerSection.classList.add('show-mobile-details');
    selectedsection.classList.add("activeSection");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function goBack() {
    outerSection.classList.remove('show-mobile-details');
}