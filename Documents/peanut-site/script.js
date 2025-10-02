document.addEventListener('DOMContentLoaded', function() {
    const peanuts = document.querySelectorAll('.peanut-img');

    peanuts.forEach(peanut => {
        peanut.addEventListener('click', function() {
            this.style.filter = 'brightness(2) saturate(2)'; // Brighten and saturate for "pop" effect
            setTimeout(() => {
                this.style.filter = 'none'; // Back to normal
            }, 500);
        });
    });

    const translateBtn = document.querySelector('.translate-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    translateBtn.addEventListener('click', function() {
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
        searchInput.style.display = 'none'; // Close search if open
    });

    searchBtn.addEventListener('click', function() {
        searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
        languageDropdown.style.display = 'none'; // Close language if open
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!translateBtn.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.style.display = 'none';
        }
        if (!searchBtn.contains(event.target) && !searchInput.contains(event.target)) {
            searchInput.style.display = 'none';
        }
    });
});