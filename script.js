document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 200);
    }, 550);

    const categoryButtons = document.querySelectorAll('.category-btn');
    const categorySections = document.querySelectorAll('.category-section');

    // Function to apply theme
    function applyTheme() {
        const themes = [
            {
                background: '#1a1a2e',
                heading: '#e94560',
                button: '#16213e',
                buttonHover: '#0f3460',
                buttonText: '#ffffff',
                buyButton: '#e94560',
                buyButtonHover: '#ff6b81'
            },
            {
                background: '#2c3e50',
                heading: '#3498db',
                button: '#34495e',
                buttonHover: '#2980b9',
                buttonText: '#ecf0f1',
                buyButton: '#3498db',
                buyButtonHover: '#5dade2'
            },
            {
                background: '#2d3436',
                heading: '#00b894',
                button: '#636e72',
                buttonHover: '#00b894',
                buttonText: '#dfe6e9',
                buyButton: '#00b894',
                buyButtonHover: '#55efc4'
            },
            {
                background: '#2c1810',
                heading: '#e17055',
                button: '#6d4c41',
                buttonHover: '#e17055',
                buttonText: '#f5f6fa',
                buyButton: '#e17055',
                buyButtonHover: '#ff9f7f'
            },
            {
                background: '#2d3436',
                heading: '#6c5ce7',
                button: '#636e72',
                buttonHover: '#6c5ce7',
                buttonText: '#dfe6e9',
                buyButton: '#6c5ce7',
                buyButtonHover: '#a29bfe'
            },
            {
                background: '#2c3e50',
                heading: '#e74c3c',
                button: '#34495e',
                buttonHover: '#e74c3c',
                buttonText: '#ecf0f1',
                buyButton: '#e74c3c',
                buyButtonHover: '#ff6b6b'
            }
        ];

        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        
        document.body.style.backgroundColor = randomTheme.background;
        document.querySelector('h1').style.color = randomTheme.heading;
        
        categoryButtons.forEach(button => {
            button.style.backgroundColor = randomTheme.button;
            button.style.color = randomTheme.buttonText;
            button.style.setProperty('--button-hover', randomTheme.buttonHover);
            button.style.setProperty('--button-active', randomTheme.buttonHover);
        });

        const buyButtons = document.querySelectorAll('.buy-button');
        buyButtons.forEach(button => {
            button.style.backgroundColor = randomTheme.buyButton;
            button.style.setProperty('--button-hover', randomTheme.buyButtonHover);
        });
    }

    // Apply theme on page load
    applyTheme();

    // Category button click handler
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Hide all sections
            categorySections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            document.getElementById(category).style.display = 'grid';
        });
    });

    // Show/hide search bars based on active category
    const searchBars = {
        shirts: document.getElementById('shirts-search-bar'),
        pants: document.getElementById('pants-search-bar'),
        sarees: document.getElementById('sarees-search-bar')
    };
    function showOnlySearchBar(category) {
        Object.keys(searchBars).forEach(key => {
            if (searchBars[key]) {
                searchBars[key].style.display = (key === category) ? '' : 'none';
            }
        });
    }
    // Initial state: show only shirts search bar
    showOnlySearchBar('shirts');
    // Update when category button is clicked
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showOnlySearchBar(category);
        });
    });

    // Search for shirts
    const searchInput = document.getElementById('shirt-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const shirtsSection = document.getElementById('shirts');
            if (!shirtsSection) return;
            const productBoxes = shirtsSection.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                const title = box.querySelector('h3');
                if (title && title.textContent.toLowerCase().includes(query)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Search for pants
    const pantsSearchInput = document.getElementById('pants-search');
    if (pantsSearchInput) {
        pantsSearchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const pantsSection = document.getElementById('pants');
            if (!pantsSection) return;
            const productBoxes = pantsSection.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                const title = box.querySelector('h3');
                if (title && title.textContent.toLowerCase().includes(query)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Search for sarees
    const sareesSearchInput = document.getElementById('sarees-search');
    if (sareesSearchInput) {
        sareesSearchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const sareesSection = document.getElementById('sarees');
            if (!sareesSection) return;
            const productBoxes = sareesSection.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                const title = box.querySelector('h3');
                if (title && title.textContent.toLowerCase().includes(query)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Show/hide dropdowns based on active category
    const dropdownBars = {
        shirts: document.getElementById('shirts-dropdown-bar'),
        pants: document.getElementById('pants-dropdown-bar'),
        sarees: document.getElementById('sarees-dropdown-bar'),
        gadgets: document.getElementById('gadgets-dropdown-bar')
    };
    function showOnlyDropdownBar(category) {
        Object.keys(dropdownBars).forEach(key => {
            if (dropdownBars[key]) {
                dropdownBars[key].style.display = (key === category) ? '' : 'none';
            }
        });
    }
    // Initial state: show only shirts dropdown
    showOnlyDropdownBar('shirts');
    // Update when category button is clicked
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showOnlyDropdownBar(category);
        });
    });

    // Dropdown filter for shirts
    const shirtsDropdown = document.getElementById('shirts-dropdown');
    if (shirtsDropdown) {
        shirtsDropdown.addEventListener('change', function() {
            const value = this.value;
            const shirtsSection = document.getElementById('shirts');
            if (!shirtsSection) return;
            const productBoxes = shirtsSection.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                const title = box.querySelector('h3');
                if (value === 'all' || (title && title.textContent === value)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }
    // Dropdown filter for pants
    const pantsDropdown = document.getElementById('pants-dropdown');
    if (pantsDropdown) {
        pantsDropdown.addEventListener('change', function() {
            const value = this.value;
            const pantsSection = document.getElementById('pants');
            if (!pantsSection) return;
            const productBoxes = pantsSection.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                const title = box.querySelector('h3');
                if (value === 'all' || (title && title.textContent === value)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }
    // Dropdown filter for sarees
    const sareesDropdown = document.getElementById('sarees-dropdown');
    if (sareesDropdown) {
        sareesDropdown.addEventListener('change', function() {
            const value = this.value;
            const sareesSection = document.getElementById('sarees');
            if (!sareesSection) return;
            const productBoxes = sareesSection.querySelectorAll('.product-box');
            productBoxes.forEach(box => {
                const title = box.querySelector('h3');
                if (value === 'all' || (title && title.textContent === value)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Custom dropdown for shirts
    const customDropdown = document.getElementById('custom-shirts-dropdown');
    if (customDropdown) {
        const selected = customDropdown.querySelector('.selected-option');
        const options = customDropdown.querySelector('.dropdown-options');
        const optionItems = customDropdown.querySelectorAll('.dropdown-option');
        selected.addEventListener('click', function(e) {
            e.stopPropagation();
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });
        optionItems.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                selected.textContent = this.textContent;
                selected.className = 'selected-option' + (this.classList.contains('all-option') ? ' all-option' : '');
                options.style.display = 'none';
                const value = this.getAttribute('data-value');
                const shirtsSection = document.getElementById('shirts');
                if (!shirtsSection) return;
                const productBoxes = shirtsSection.querySelectorAll('.product-box');
                productBoxes.forEach(box => {
                    const title = box.querySelector('h3');
                    if (value === 'all' || (title && title.textContent === value)) {
                        box.style.display = '';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
        document.addEventListener('click', function() {
            options.style.display = 'none';
        });
    }

    // Custom dropdown for pants
    const customPantsDropdown = document.getElementById('custom-pants-dropdown');
    if (customPantsDropdown) {
        const selected = customPantsDropdown.querySelector('.selected-option');
        const options = customPantsDropdown.querySelector('.dropdown-options');
        const optionItems = customPantsDropdown.querySelectorAll('.dropdown-option');
        selected.addEventListener('click', function(e) {
            e.stopPropagation();
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });
        optionItems.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                selected.textContent = this.textContent;
                selected.className = 'selected-option' + (this.classList.contains('all-option') ? ' all-option' : '');
                options.style.display = 'none';
                const value = this.getAttribute('data-value');
                const pantsSection = document.getElementById('pants');
                if (!pantsSection) return;
                const productBoxes = pantsSection.querySelectorAll('.product-box');
                productBoxes.forEach(box => {
                    const title = box.querySelector('h3');
                    if (value === 'all' || (title && title.textContent === value)) {
                        box.style.display = '';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
        document.addEventListener('click', function() {
            options.style.display = 'none';
        });
    }

    // Custom dropdown for sarees
    const customSareesDropdown = document.getElementById('custom-sarees-dropdown');
    if (customSareesDropdown) {
        const selected = customSareesDropdown.querySelector('.selected-option');
        const options = customSareesDropdown.querySelector('.dropdown-options');
        const optionItems = customSareesDropdown.querySelectorAll('.dropdown-option');
        selected.addEventListener('click', function(e) {
            e.stopPropagation();
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });
        optionItems.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                selected.textContent = this.textContent;
                selected.className = 'selected-option' + (this.classList.contains('all-option') ? ' all-option' : '');
                options.style.display = 'none';
                const value = this.getAttribute('data-value');
                const sareesSection = document.getElementById('sarees');
                if (!sareesSection) return;
                const productBoxes = sareesSection.querySelectorAll('.product-box');
                productBoxes.forEach(box => {
                    const title = box.querySelector('h3');
                    if (value === 'all' || (title && title.textContent === value)) {
                        box.style.display = '';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
        document.addEventListener('click', function() {
            options.style.display = 'none';
        });
    }

    // Custom dropdown for gadgets
    const customGadgetsDropdown = document.getElementById('custom-gadgets-dropdown');
    if (customGadgetsDropdown) {
        const selected = customGadgetsDropdown.querySelector('.selected-option');
        const options = customGadgetsDropdown.querySelector('.dropdown-options');
        const optionItems = customGadgetsDropdown.querySelectorAll('.dropdown-option');
        selected.addEventListener('click', function(e) {
            e.stopPropagation();
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });
        optionItems.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                selected.textContent = this.textContent;
                selected.className = 'selected-option' + (this.classList.contains('all-option') ? ' all-option' : '');
                options.style.display = 'none';
                const value = this.getAttribute('data-value');
                const gadgetsSection = document.getElementById('gadgets');
                if (!gadgetsSection) return;
                const productBoxes = gadgetsSection.querySelectorAll('.product-box');
                productBoxes.forEach(box => {
                    const title = box.querySelector('h3');
                    if (value === 'all' || (title && title.textContent === value)) {
                        box.style.display = '';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
        document.addEventListener('click', function() {
            options.style.display = 'none';
        });
    }
});
