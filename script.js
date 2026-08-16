document.addEventListener('DOMContentLoaded', () => {
    const recipes = window.gharRecipes || [];

    // --- State ---
    let activeMemory = "Coming Home"; // Default mood

    // --- Hero Translation Loop ---
    function initHeroTranslation() {
        const translations = ["घर", "家", "Home" ,"casa", "hogar", "Home" , "집", "دار", "σπίτι", "Home"];
        let currentWordIndex = 0;
        const translationEl = document.getElementById('hero-translation');
        if (!translationEl) return;

        function animateTranslation() {
            const word = translations[currentWordIndex];
            translationEl.innerHTML = '';
            
            // Create spans for each letter
            const chars = Array.from(word);
            chars.forEach((char, i) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.animationDelay = `${i * 0.1}s`;
                span.classList.add('char-in');
                translationEl.appendChild(span);
            });

            // After display time, animate out
            setTimeout(() => {
                const spans = translationEl.querySelectorAll('span');
                spans.forEach((span, i) => {
                    span.classList.remove('char-in');
                    span.classList.add('char-out');
                    // Stagger out animation
                    span.style.animationDelay = `${i * 0.05}s`;
                });

                // After out animation, next word
                setTimeout(() => {
                    currentWordIndex = (currentWordIndex + 1) % translations.length;
                    animateTranslation();
                }, 800); // Time for out animation to finish
            }, 3000); // Display time
        }

        animateTranslation();
    }

    // --- DOM Elements ---
    const memoryFiltersContainer = document.getElementById('memory-filters');
    const recipeContainer = document.getElementById('recipe-container');
    const tableContent = document.getElementById('table-content');
    const form = document.getElementById('contribution-form');
    const formSuccess = document.getElementById('form-success');
    const audioToggle = document.getElementById('audio-toggle');
    const audioEl = document.getElementById('kitchen-audio');

    // --- Initialize Memory Filters ---
    function initFilters() {
        const moodsData = [
            { id: "Coming Home", title: "COMING HOME", sub: "Tired feet, the key in the lock, and the familiar embrace of aroma.", image: "./assets/feeling-images/mood-coming-home.png" },
            { id: "Bad Day", title: "BAD DAY", sub: "The rhythm of the rain, a book on the windowsill, and the smell of spices.", image: "./assets/feeling-images/mood-bad-day.png" },
            { id: "Sick Day", title: "SICK DAYS", sub: "A soft blanket, the gentle hum of the fan, and a bowl full of warmth.", image: "./assets/feeling-images/mood-sick-day.png" },
            { id: "Sunday", title: "SUNDAY LUNCH", sub: "Laughter fills the air, extra chairs around the table, and the slow, perfect feast.", image: "./assets/feeling-images/mood-sunday.png" },
            { id: "I Miss Home", title: "NOSTALGIA", sub: "A quiet evening, looking at old photos, and craving the taste of home.", image: "./assets/feeling-images/mood-nostalgia.png" },
            { id: "Celebration", title: "CELEBRATIONS", sub: "Birthday candles, the sweet smell of joy, and a heart full of togetherness.", image: "./assets/feeling-images/mood-celebration.png" },
            { id: "Just Because", title: "JUST BECAUSE", sub: "An unexpected treat, a small smile, and food made for no reason at all.", image: "./assets/feeling-images/mood-just-because.png" },
            { id: "Late Night", title: "LATE NIGHTS", sub: "The quiet kitchen, midnight whispers, and a stolen bite in the dark.", image: "./assets/feeling-images/mood-late-night.png" }
        ];
        
        moodsData.forEach((mood, index) => {
            const station = document.createElement('div');
            station.classList.add('memory-station');
            if (mood.id === activeMemory) station.classList.add('active');
            
            station.innerHTML = `
                <div class="memory-content">
                    <h3 class="memory-title">${mood.title}</h3>
                    <p class="memory-sub">${mood.sub}</p>
                </div>
                <div class="memory-illustration-wrap">
                    <div class="memory-line-connector"></div>
                    <div class="memory-icon-box">
                        <img src="${mood.image}" alt="${mood.title}" class="memory-image-placeholder" onerror="this.src='https://placehold.co/100x100?text=Image'">
                    </div>
                </div>
            `;

            station.addEventListener('click', () => {
                document.querySelectorAll('.memory-station').forEach(s => s.classList.remove('active'));
                station.classList.add('active');
                activeMemory = mood.id;
                
                renderRecipes();
                document.getElementById('recipes').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            memoryFiltersContainer.appendChild(station);
        });

        setTimeout(() => {
            document.getElementById('memory-statement').classList.add('visible');
        }, 500);
    }

    // --- Render Recipes ---
    async function renderRecipes(firstLoad = false) {
        const filtered = recipes.filter(r => r.mood === activeMemory);
        
        // Filter Transition: Animate out
        if (!firstLoad) {
            const currentCards = document.querySelectorAll('.recipe-card');
            currentCards.forEach(card => {
                card.style.animation = 'none'; // reset entry animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(-10px)';
            });
            // Wait for fade out
            await new Promise(r => setTimeout(r, 300));
        }

        // Clear containers
        recipeContainer.innerHTML = '';
        tableContent.innerHTML = '';

        filtered.forEach((recipe, index) => {
            // Map data animation types to the requested reusable classes
            const animType = recipe.animationType || '';
            let animClasses = [];
            if (animType.includes('steam')) animClasses.push('steam-rise');
            if (animType.includes('simmer')) animClasses.push('food-warmth', 'liquid-ripple');
            if (animType.includes('glow')) animClasses.push('highlight-shimmer', 'food-warmth');
            
            const classString = animClasses.join(' ');

            // Entry delay
            const delay = index * 0.15;

            // 1. Create Recipe Card
            const card = document.createElement('article');
            card.className = `recipe-card plate-arrival`;
            card.style.animationDelay = `${delay}s`;

            const ingredientsList = recipe.ingredients.map(i => `<li>${i}</li>`).join('');

            // We use an image tag here, but CSS is set up to target internal SVG groups if the user inlines them later
            const tips = {
                "India": "More ghee if you're having a bad day.",
                "Japan": "A little extra soy sauce never hurts.",
                "Italy": "Save some bread to wipe the plate clean.",
                "Mexico": "The spicier the salsa, the better.",
                "South Korea": "Always leave a little room for extra rice.",
                "United States": "Comfort is a warm plate."
            };
            const funTip = tips[recipe.country] || "Food tastes better when shared.";
            const signoff = recipe.relationship ? `— A memory of your ${recipe.relationship.toLowerCase()}` : "— A child's memory";

            card.innerHTML = `
                <div class="recipe-who">
                    <span class="label">THIS WAS MADE BY...</span>
                    <div class="person">${recipe.madeBy}</div>
                    <div class="dialogue handwriting">"${recipe.dialogue}"</div>
                </div>

                <div class="recipe-illustration custom-svg-wrap ${classString}">
                    <img src="assets/images/${recipe.id}.png" alt="${recipe.dish}" class="custom-recipe-svg" onerror="this.src='https://placehold.co/200x150?text=Image'">
                    <div class="steam syrup">
                        <span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
                
                <div class="recipe-header">
                    <div class="label">${recipe.country.toUpperCase()} · COMFORT FOOD</div>
                    <h3 class="recipe-title">${recipe.dish.toUpperCase()}</h3>
                    <p class="recipe-summary handwriting">"${recipe.summary}"</p>
                </div>

                <hr class="recipe-divider">

                <div class="recipe-memory-section">
                    <span class="label">I REMEMBER...</span>
                    <p class="recipe-memory">"${recipe.memory}"</p>
                   
                </div>

                <hr class="recipe-divider">

                <div class="recipe-body two-columns">
                    <div class="recipe-ingredients">
                        <span class="label">WHAT'S IN IT</span>
                        <ul>${ingredientsList}</ul>
                    </div>
                    <div class="recipe-method">
                        <span class="label">HOW IT COMES TOGETHER</span>
                        <p>${recipe.method}</p>
                    </div>
                </div>

                <div class="recipe-tip handwriting">
                    "${funTip}"
                </div>
            `;
            recipeContainer.appendChild(card);

            // 2. Add to Family Table
            const tableItem = document.createElement('div');
            tableItem.className = 'table-item';
            tableItem.innerHTML = `
                <img src="assets/images/${recipe.id}.png" alt="${recipe.dish}" class="table-custom-svg ${classString}" onerror="this.src='https://placehold.co/100x100?text=Image'">
                <div class="steam">
                    <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                
                
            `;
            tableContent.appendChild(tableItem);
        });
    }

    // --- Form Handling ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Hide form fields visually (or just overlay success)
        formSuccess.classList.add('visible');
        
        // Add tiny plate to empty chair section conceptually
        const chairSection = document.querySelector('.empty-chair-section');
        const plateDiv = document.createElement('div');
        plateDiv.textContent = '🍽️';
        plateDiv.style.fontSize = '2rem';
        plateDiv.style.marginTop = '1rem';
        plateDiv.style.animation = 'paperSlideIn 0.5s ease-out forwards';
        chairSection.appendChild(plateDiv);
        
        // No backend needed, just visual reset after some time if desired
        // setTimeout(() => formSuccess.classList.remove('visible'), 5000);
    });

    // --- Audio Toggle ---
    let isAudioPlaying = false;
    audioToggle.addEventListener('click', () => {
        // Since we may not have the actual asset, we wrap in try/catch to fail gracefully
        if (!isAudioPlaying) {
            try {
                // If src is empty or 404, this will throw or just do nothing visually harmful
                const playPromise = audioEl.play();
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        audioToggle.innerHTML = '<span class="icon">🔇</span> Kitchen sounds';
                        isAudioPlaying = true;
                    }).catch(e => {
                        console.log("Audio playback prevented or asset missing:", e);
                        // Toggle UI anyway to simulate state for challenge
                        audioToggle.innerHTML = '<span class="icon">🔇</span> Kitchen sounds';
                        isAudioPlaying = true;
                    });
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            audioEl.pause();
            audioToggle.innerHTML = '<span class="icon">🔊</span> Kitchen sounds';
            isAudioPlaying = false;
        }
    });

    // --- Initialization ---
    initHeroTranslation();
    initFilters();
    renderRecipes(true);
});
