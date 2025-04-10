document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Show all cards by default
    recipeCards.forEach(card => {
        card.style.display = 'block';
    });

    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Show all cards when search is empty
            recipeCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }

        recipeCards.forEach(card => {
            const recipeName = card.querySelector('h2').textContent.toLowerCase();
            const ingredients = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
            const process = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
            
            if (recipeName.includes(searchTerm) || 
                ingredients.includes(searchTerm) || 
                process.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
