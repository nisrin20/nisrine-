 // Display tea items in a catalog based on the button clicked by the user

const catalogueBtns = document.querySelectorAll('.catalogue-btn');
const teaItems = document.querySelectorAll('.tea-item');
let activeBtn = "featured";

showTeaCatalogue(activeBtn);

catalogueBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showTeaCatalogue(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn() {
    catalogueBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showTeaCatalogue(newCatalogueBtn) {
    activeBtn = newCatalogueBtn;
    teaItems.forEach((item) => {
        if (item.classList.contains(activeBtn)) {
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}
// More About Us Button
const moreAboutBtn = document.getElementById('moreAboutBtn');
const moreAboutInfo = document.getElementById('moreAboutInfo');

moreAboutBtn.addEventListener('click', function(event) {
    event.preventDefault();

    // Toggle the display of additional information
    if (moreAboutInfo.style.display === 'none' || moreAboutInfo.style.display === '') {
        // Display the additional information if it is hidden
        moreAboutInfo.style.display = 'block';
    } else {
        // Hide the additional information if it's visible
        moreAboutInfo.style.display = 'none';
    }
});


