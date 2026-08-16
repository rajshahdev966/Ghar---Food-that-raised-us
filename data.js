const recipes = [
    // INDIA 🇮🇳
    {
        id: "india-coming-home", country: "India", flag: "🇮🇳", mood: "Coming Home", dish: "Dal Chawal",
        madeBy: "Maa", relationship: "Mother", dialogue: "Wash your hands first. Then eat. You can tell me everything later.",
        memory: "You could arrive exhausted, irritated, hungry...",
        summary: "Rice with simple lentil dal, tempering and ghee.",
        ingredients: ["Rice", "Toor Dal", "Ghee", "Cumin", "Turmeric"], method: "Boil lentils until soft. Prepare tempering with ghee and cumin, pour over dal. Serve with hot rice.",
        visualType: "dal-rice", animationType: "steam-ghee"
    },
    {
        id: "india-bad-day", country: "India", flag: "🇮🇳", mood: "Bad Day", dish: "Aloo Paratha with Dahi",
        madeBy: "Dad", relationship: "Father", dialogue: "Bad day? Fine. Eat first. Then we'll complain about it together.",
        memory: "He always made sure the edges were crispy.",
        summary: "Stuffed potato flatbread served with yogurt.",
        ingredients: ["Wheat flour", "Potatoes", "Yogurt", "Butter", "Spices"], method: "Mash spiced potatoes. Stuff into dough, roll out, and cook on hot tawa with butter.",
        visualType: "bread-plate", animationType: "steam"
    },
    {
        id: "india-sick-day", country: "India", flag: "🇮🇳", mood: "Sick Day", dish: "Moong Dal Khichdi",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "No spicy food today. This is all you need.",
        memory: "The warmth that started from the stomach and spread everywhere.",
        summary: "Soft rice and yellow moong cooked together with mild seasoning.",
        ingredients: ["Rice", "Moong Dal", "Ghee", "Turmeric", "Salt"], method: "Cook rice and dal together until very soft. Top with a dot of ghee.",
        visualType: "bowl-yellow", animationType: "simmer"
    },
    {
        id: "india-sunday", country: "India", flag: "🇮🇳", mood: "Sunday", dish: "Chole Bhature",
        madeBy: "Mom", relationship: "Mother", dialogue: "Today nobody is counting how many you ate.",
        memory: "The smell of frying that woke the whole house.",
        summary: "Spiced chickpea curry with fluffy fried bhature.",
        ingredients: ["Chickpeas", "Flour", "Onions", "Tomatoes", "Spices"], method: "Simmer chickpeas in dark spiced gravy. Fry rolled dough until puffed.",
        visualType: "curry-bread", animationType: "steam"
    },
    {
        id: "india-miss-home", country: "India", flag: "🇮🇳", mood: "I Miss Home", dish: "Kadhibhat",
        madeBy: "Mom", relationship: "Mother", dialogue: "You don't need to explain. I know you're missing home.",
        memory: "The sour, comforting tang of yogurt and besan.",
        summary: "Yogurt-based kadhi served with rice.",
        ingredients: ["Yogurt", "Gram flour", "Rice", "Curry leaves", "Mustard seeds"], method: "Whisk yogurt and flour, simmer with tempering. Serve over rice.",
        visualType: "bowl-yellow", animationType: "simmer"
    },
    {
        id: "india-celebration", country: "India", flag: "🇮🇳", mood: "Celebration", dish: "Gulab Jamun",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "Take one more. It's a celebration.",
        memory: "Sticky fingers and the scent of cardamom.",
        summary: "Soft fried milk-solid dumplings soaked in fragrant syrup.",
        ingredients: ["Khoya", "Flour", "Sugar", "Cardamom", "Rose water"], method: "Fry small dough balls slowly, then soak in warm sugar syrup.",
        visualType: "bowl-brown", animationType: "glow"
    },
    {
        id: "india-just-because", country: "India", flag: "🇮🇳", mood: "Just Because", dish: "Pakora & Chai",
        madeBy: "Auntie", relationship: "Aunt", dialogue: "I made too many. Help me finish them.",
        memory: "Rain hitting the window and the sound of hot oil.",
        summary: "Crispy fritters with spiced tea.",
        ingredients: ["Gram flour", "Onions", "Potatoes", "Tea leaves", "Spices"], method: "Fry battered vegetables. Serve with freshly brewed spiced tea.",
        visualType: "plate-glass", animationType: "steam"
    },
    {
        id: "india-late-night", country: "India", flag: "🇮🇳", mood: "Late Night", dish: "Masala Maggi",
        madeBy: "Older Sibling", relationship: "Sibling", dialogue: "Don't tell Mom we're still awake.",
        memory: "Eating directly from the pan under dim kitchen lights.",
        summary: "Instant noodles cooked with vegetables and Indian spices.",
        ingredients: ["Instant noodles", "Tastemaker", "Onion", "Tomato", "Chili"], method: "Boil noodles with chopped vegetables and spice mix until water reduces.",
        visualType: "bowl-noodles", animationType: "steam"
    },

    // JAPAN 🇯🇵
    {
        id: "japan-coming-home", country: "Japan", flag: "🇯🇵", mood: "Coming Home", dish: "Oyakodon",
        madeBy: "Mother", relationship: "Mother", dialogue: "You're home. Sit down. It's still warm.",
        memory: "The savory steam fogging up my glasses.",
        summary: "Chicken and softly cooked egg over rice in a light sweet-savory broth.",
        ingredients: ["Chicken", "Eggs", "Rice", "Dashi", "Soy sauce"], method: "Simmer chicken in broth, add beaten egg until barely set, pour over rice.",
        visualType: "bowl-rice-egg", animationType: "steam"
    },
    {
        id: "japan-bad-day", country: "Japan", flag: "🇯🇵", mood: "Bad Day", dish: "Japanese Curry Rice",
        madeBy: "Dad", relationship: "Father", dialogue: "No need to talk about today yet.",
        memory: "Thick, warm, and unapologetically comforting.",
        summary: "Rice with thick Japanese-style curry and vegetables.",
        ingredients: ["Curry roux", "Potatoes", "Carrots", "Onion", "Rice"], method: "Simmer vegetables, add roux to thicken. Pour generously next to rice.",
        visualType: "plate-curry", animationType: "steam"
    },
    {
        id: "japan-sick-day", country: "Japan", flag: "🇯🇵", mood: "Sick Day", dish: "Okayu",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "Small bites. Take your time.",
        memory: "The gentle, almost flavorless warmth that healed everything.",
        summary: "Soft rice porridge cooked with extra water.",
        ingredients: ["Rice", "Water", "Salt", "Umeboshi (optional)"], method: "Slowly simmer rice in ample water until grains burst and soften.",
        visualType: "bowl-white", animationType: "steam"
    },
    {
        id: "japan-sunday", country: "Japan", flag: "🇯🇵", mood: "Sunday", dish: "Nikujaga",
        madeBy: "Mother", relationship: "Mother", dialogue: "Sunday smells like this.",
        memory: "The sweet soy aroma filling the entire house.",
        summary: "Simmered meat and potatoes in a sweet-savory broth.",
        ingredients: ["Beef/Pork", "Potatoes", "Carrots", "Soy sauce", "Mirin"], method: "Simmer ingredients in dashi broth until tender and deeply flavored.",
        visualType: "bowl-stew", animationType: "simmer"
    },
    {
        id: "japan-miss-home", country: "Japan", flag: "🇯🇵", mood: "I Miss Home", dish: "Onigiri",
        madeBy: "Mother", relationship: "Mother", dialogue: "I put the filling you like inside.",
        memory: "Unwrapping the seaweed and finding home in the center.",
        summary: "Hand-shaped rice balls with filling and nori.",
        ingredients: ["Rice", "Salmon/Plum", "Nori", "Salt"], method: "Salt hands, shape warm rice around filling into triangles, wrap with nori.",
        visualType: "plate-rice-triangle", animationType: "glow"
    },
    {
        id: "japan-celebration", country: "Japan", flag: "🇯🇵", mood: "Celebration", dish: "Mochi",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "Careful. They're softer than they look.",
        memory: "The sweet, chewy reward for a good year.",
        summary: "Chewy rice-cake sweets with optional filling.",
        ingredients: ["Glutinous rice", "Sweet red bean", "Kinako powder"], method: "Pound rice until elastic, form into soft cakes.",
        visualType: "plate-mochi", animationType: "glow"
    },
    {
        id: "japan-just-because", country: "Japan", flag: "🇯🇵", mood: "Just Because", dish: "Tamagoyaki",
        madeBy: "Dad", relationship: "Father", dialogue: "I made extra. Obviously.",
        memory: "The perfect sweet-savory golden layers.",
        summary: "Layered rolled Japanese omelet.",
        ingredients: ["Eggs", "Dashi", "Sugar", "Soy sauce"], method: "Pour thin layers of egg into a rectangular pan, rolling sequentially.",
        visualType: "plate-egg-roll", animationType: "steam"
    },
    {
        id: "japan-late-night", country: "Japan", flag: "🇯🇵", mood: "Late Night", dish: "Miso Soup & Rice",
        madeBy: "Older Sister", relationship: "Sibling", dialogue: "You're hungry again?",
        memory: "The quiet clink of the bowl at 2 AM.",
        summary: "Miso soup with tofu/seaweed alongside rice.",
        ingredients: ["Dashi", "Miso paste", "Tofu", "Wakame", "Rice"], method: "Warm broth, whisk in miso, add tofu. Serve with leftover rice.",
        visualType: "bowls-miso-rice", animationType: "steam"
    },

    // ITALY 🇮🇹
    {
        id: "italy-coming-home", country: "Italy", flag: "🇮🇹", mood: "Coming Home", dish: "Pasta al Pomodoro",
        madeBy: "Nonna", relationship: "Grandmother", dialogue: "You're home. Sit. Pasta first.",
        memory: "The smell of garlic hitting olive oil.",
        summary: "Pasta with tomato, olive oil, garlic and basil.",
        ingredients: ["Spaghetti", "Tomatoes", "Garlic", "Olive oil", "Basil"], method: "Sauté garlic, add tomatoes. Toss al dente pasta in sauce.",
        visualType: "plate-pasta-red", animationType: "steam"
    },
    {
        id: "italy-bad-day", country: "Italy", flag: "🇮🇹", mood: "Bad Day", dish: "Lasagna",
        madeBy: "Mother", relationship: "Mother", dialogue: "Today deserves another layer.",
        memory: "The crispy corner piece with burnt cheese.",
        summary: "Layered pasta baked with sauce, cheese and filling.",
        ingredients: ["Pasta sheets", "Ragù", "Béchamel", "Parmesan"], method: "Layer ingredients in a dish, bake until bubbling and golden.",
        visualType: "plate-lasagna", animationType: "glow"
    },
    {
        id: "italy-sick-day", country: "Italy", flag: "🇮🇹", mood: "Sick Day", dish: "Pastina in Brodo",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "Just a little. You don't have to finish.",
        memory: "Tiny stars floating in golden chicken broth.",
        summary: "Tiny pasta served in light broth.",
        ingredients: ["Pastina", "Chicken broth", "Parmesan"], method: "Boil pastina in rich broth. Serve hot with grated cheese.",
        visualType: "bowl-broth", animationType: "simmer"
    },
    {
        id: "italy-sunday", country: "Italy", flag: "🇮🇹", mood: "Sunday", dish: "Sunday Ragù",
        madeBy: "Dad", relationship: "Father", dialogue: "It has been cooking all morning.",
        memory: "The heavy, slow simmer that defined the day of rest.",
        summary: "Slow-cooked meat-and-tomato sauce with pasta.",
        ingredients: ["Beef/Pork", "Tomatoes", "Onion/Celery/Carrot", "Wine", "Pasta"], method: "Brown meat, add wine and tomatoes, simmer for hours.",
        visualType: "plate-pasta-meat", animationType: "steam"
    },
    {
        id: "italy-miss-home", country: "Italy", flag: "🇮🇹", mood: "I Miss Home", dish: "Minestrone",
        madeBy: "Mother", relationship: "Mother", dialogue: "It tastes better tomorrow. Like everything at home.",
        memory: "The familiar mix of whatever vegetables were in season.",
        summary: "Vegetable soup with broth; ingredients vary by household.",
        ingredients: ["Beans", "Carrots", "Celery", "Tomatoes", "Pasta/Rice"], method: "Simmer vegetables and beans until tender. Add pasta at the end.",
        visualType: "bowl-soup", animationType: "steam"
    },
    {
        id: "italy-celebration", country: "Italy", flag: "🇮🇹", mood: "Celebration", dish: "Tiramisù",
        madeBy: "Aunt", relationship: "Aunt", dialogue: "Nobody gets the last piece.",
        memory: "The sharp cocoa powder dusting my lips.",
        summary: "Coffee-soaked layers with mascarpone cream and cocoa.",
        ingredients: ["Savoiardi", "Coffee", "Mascarpone", "Eggs", "Cocoa"], method: "Dip biscuits in coffee, layer with sweet mascarpone cream, chill.",
        visualType: "plate-tiramisu", animationType: "glow"
    },
    {
        id: "italy-just-because", country: "Italy", flag: "🇮🇹", mood: "Just Because", dish: "Focaccia",
        madeBy: "Dad", relationship: "Father", dialogue: "It's still warm. Take some.",
        memory: "The salt crystals and the pools of olive oil.",
        summary: "Olive-oil-rich baked bread with herbs and salt.",
        ingredients: ["Flour", "Yeast", "Olive oil", "Salt", "Rosemary"], method: "Dimple risen dough, drench in oil and salt, bake until golden.",
        visualType: "plate-bread", animationType: "glow"
    },
    {
        id: "italy-late-night", country: "Italy", flag: "🇮🇹", mood: "Late Night", dish: "Aglio e Olio",
        madeBy: "Older Brother", relationship: "Sibling", dialogue: "Five minutes. That's all we need.",
        memory: "Midnight pan-tossing and the sting of chili.",
        summary: "Spaghetti with olive oil, garlic and chili.",
        ingredients: ["Spaghetti", "Garlic", "Olive oil", "Chili flakes", "Parsley"], method: "Toast garlic and chili in oil. Toss with pasta and pasta water.",
        visualType: "plate-pasta-oil", animationType: "steam"
    },

    // MEXICO 🇲🇽
    {
        id: "mexico-coming-home", country: "Mexico", flag: "🇲🇽", mood: "Coming Home", dish: "Arroz con Pollo",
        madeBy: "Mamá", relationship: "Mother", dialogue: "You're late. Good thing dinner waited.",
        memory: "The orange-tinted rice hiding tender pieces of chicken.",
        summary: "Rice cooked with chicken, vegetables, tomato and seasoning.",
        ingredients: ["Chicken", "Rice", "Tomato", "Onion", "Peas/Carrots"], method: "Brown chicken, add rice and tomato broth, simmer until absorbed.",
        visualType: "plate-rice-chicken", animationType: "steam"
    },
    {
        id: "mexico-bad-day", country: "Mexico", flag: "🇲🇽", mood: "Bad Day", dish: "Quesadillas",
        madeBy: "Dad", relationship: "Father", dialogue: "Cheese fixes more than people admit.",
        memory: "The blistered tortilla spots.",
        summary: "Toasted tortillas folded around melted cheese.",
        ingredients: ["Tortillas", "Oaxaca/Monterey Jack Cheese", "Salsa"], method: "Melt cheese between tortillas on a hot comal until golden.",
        visualType: "plate-quesadilla", animationType: "glow"
    },
    {
        id: "mexico-sick-day", country: "Mexico", flag: "🇲🇽", mood: "Sick Day", dish: "Caldo de Pollo",
        madeBy: "Abuela", relationship: "Grandmother", dialogue: "Drink the broth. It'll help.",
        memory: "Squeezing lime into the steaming golden liquid.",
        summary: "Chicken soup with vegetables and broth.",
        ingredients: ["Chicken", "Carrots", "Potatoes", "Zucchini", "Cilantro"], method: "Boil chicken and vegetables until tender. Serve with lime.",
        visualType: "bowl-broth-veg", animationType: "steam"
    },
    {
        id: "mexico-sunday", country: "Mexico", flag: "🇲🇽", mood: "Sunday", dish: "Pozole",
        madeBy: "Mamá", relationship: "Mother", dialogue: "Sunday starts when the pot starts.",
        memory: "The mountain of radishes and cabbage on top.",
        summary: "Hominy-based soup/stew with meat and garnishes.",
        ingredients: ["Pork/Chicken", "Hominy", "Chiles", "Cabbage", "Radishes"], method: "Simmer meat and hominy in red chile broth. Garnish heavily.",
        visualType: "bowl-stew-red", animationType: "steam"
    },
    {
        id: "mexico-miss-home", country: "Mexico", flag: "🇲🇽", mood: "I Miss Home", dish: "Sopa de Fideo",
        madeBy: "Mamá", relationship: "Mother", dialogue: "It's the same one I made when you were little.",
        memory: "The toasted noodles in bright red broth.",
        summary: "Short noodles toasted and cooked in tomato broth.",
        ingredients: ["Fideo noodles", "Tomato", "Onion", "Garlic", "Broth"], method: "Toast noodles in oil, blend tomato mixture, simmer together.",
        visualType: "bowl-soup-red", animationType: "simmer"
    },
    {
        id: "mexico-celebration", country: "Mexico", flag: "🇲🇽", mood: "Celebration", dish: "Tres Leches Cake",
        madeBy: "Aunt", relationship: "Aunt", dialogue: "Don't pretend you're too full for dessert.",
        memory: "The cold, sweet milk pooling at the bottom of the plate.",
        summary: "Light sponge soaked in three milks and topped with cream.",
        ingredients: ["Sponge cake", "Evaporated milk", "Condensed milk", "Heavy cream"], method: "Bake cake, pierce, soak in milk mixture, top with whipped cream.",
        visualType: "plate-cake", animationType: "glow"
    },
    {
        id: "mexico-just-because", country: "Mexico", flag: "🇲🇽", mood: "Just Because", dish: "Elote",
        madeBy: "Older Sister", relationship: "Sibling", dialogue: "I saw it and thought of you.",
        memory: "Messy hands and the kick of chili powder.",
        summary: "Corn with creamy, savory, spicy toppings.",
        ingredients: ["Corn", "Mayonnaise", "Cotija cheese", "Chili powder", "Lime"], method: "Grill corn, slather with mayo, roll in cheese, sprinkle with chili.",
        visualType: "plate-corn", animationType: "glow"
    },
    {
        id: "mexico-late-night", country: "Mexico", flag: "🇲🇽", mood: "Late Night", dish: "Chilaquiles",
        madeBy: "Older Brother", relationship: "Sibling", dialogue: "Breakfast? Dinner? Who cares.",
        memory: "The crunch giving way to soft, salsa-soaked chips.",
        summary: "Tortilla chips softened in salsa with toppings.",
        ingredients: ["Tortilla chips", "Salsa (red/green)", "Crema", "Cheese", "Onion"], method: "Simmer chips briefly in hot salsa. Top with crema, cheese, and onion.",
        visualType: "plate-chips", animationType: "steam"
    },

    // SOUTH KOREA 🇰🇷
    {
        id: "korea-coming-home", country: "South Korea", flag: "🇰🇷", mood: "Coming Home", dish: "Doenjang Jjigae",
        madeBy: "Eomma", relationship: "Mother", dialogue: "Eat while it's bubbling.",
        memory: "The intense, earthy smell of soybean paste.",
        summary: "Soybean-paste stew with tofu and vegetables.",
        ingredients: ["Doenjang", "Tofu", "Zucchini", "Onion", "Anchovy broth"], method: "Boil broth, dissolve paste, add vegetables and tofu.",
        visualType: "bowl-stew", animationType: "simmer"
    },
    {
        id: "korea-bad-day", country: "South Korea", flag: "🇰🇷", mood: "Bad Day", dish: "Kimchi Fried Rice",
        madeBy: "Dad", relationship: "Father", dialogue: "I know you're hungry.",
        memory: "The perfectly fried egg on top with crispy edges.",
        summary: "Rice stir-fried with kimchi and optional additions.",
        ingredients: ["Kimchi", "Rice", "Spam/Pork", "Egg", "Sesame oil"], method: "Fry chopped kimchi and meat, add rice, top with fried egg.",
        visualType: "plate-rice-red", animationType: "steam"
    },
    {
        id: "korea-sick-day", country: "South Korea", flag: "🇰🇷", mood: "Sick Day", dish: "Dakjuk",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "Slowly. You have all day.",
        memory: "The thick, comforting chicken and garlic warmth.",
        summary: "Soft chicken porridge.",
        ingredients: ["Rice", "Chicken", "Garlic", "Sesame oil"], method: "Simmer chicken until tender, shred, cook with rice until porridge forms.",
        visualType: "bowl-white", animationType: "steam"
    },
    {
        id: "korea-sunday", country: "South Korea", flag: "🇰🇷", mood: "Sunday", dish: "Bulgogi",
        madeBy: "Mother", relationship: "Mother", dialogue: "Everyone is coming. Make room.",
        memory: "The sweet sear of marinated beef on the pan.",
        summary: "Thin marinated meat cooked until tender and caramelized.",
        ingredients: ["Beef", "Soy sauce", "Sugar", "Pear juice", "Garlic"], method: "Marinate thinly sliced beef, pan-fry quickly over high heat.",
        visualType: "plate-meat", animationType: "steam"
    },
    {
        id: "korea-miss-home", country: "South Korea", flag: "🇰🇷", mood: "I Miss Home", dish: "Gimbap",
        madeBy: "Mother", relationship: "Mother", dialogue: "I packed the pieces you like.",
        memory: "The sesame oil shining on the seaweed.",
        summary: "Rice and fillings rolled in seaweed and sliced.",
        ingredients: ["Rice", "Seaweed", "Egg", "Danmuji (radish)", "Spinach"], method: "Season rice, lay on seaweed with fillings, roll tightly and slice.",
        visualType: "plate-roll", animationType: "glow"
    },
    {
        id: "korea-celebration", country: "South Korea", flag: "🇰🇷", mood: "Celebration", dish: "Tteok",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "This means something good happened.",
        memory: "The colorful, chewy pieces passed around the table.",
        summary: "Korean rice cakes with varied shapes and flavors.",
        ingredients: ["Rice flour", "Water", "Sugar", "Sesame/Bean powder"], method: "Steam rice flour, pound until chewy, shape and coat.",
        visualType: "plate-mochi", animationType: "glow"
    },
    {
        id: "korea-just-because", country: "South Korea", flag: "🇰🇷", mood: "Just Because", dish: "Pajeon",
        madeBy: "Dad", relationship: "Father", dialogue: "Rain? Then we make pancakes.",
        memory: "The sizzle that sounded like the rain outside.",
        summary: "Savory pancake containing scallions.",
        ingredients: ["Scallions", "Flour", "Water", "Egg", "Seafood/Meat"], method: "Mix batter, lay scallions in hot oiled pan, pour batter, fry crisp.",
        visualType: "plate-pancake", animationType: "steam"
    },
    {
        id: "korea-late-night", country: "South Korea", flag: "🇰🇷", mood: "Late Night", dish: "Ramyeon",
        madeBy: "Older Sister", relationship: "Sibling", dialogue: "One bowl. Then sleep.",
        memory: "Eating from the lid of the pot so it wouldn't drip.",
        summary: "Korean-style instant noodle soup.",
        ingredients: ["Instant noodles", "Water", "Egg", "Scallions"], method: "Boil water, add noodles and powder, drop egg at the very end.",
        visualType: "bowl-noodles-red", animationType: "steam"
    },

    // UNITED STATES 🇺🇸
    {
        id: "us-coming-home", country: "United States", flag: "🇺🇸", mood: "Coming Home", dish: "Chicken Pot Pie",
        madeBy: "Mom", relationship: "Mother", dialogue: "You got home just in time.",
        memory: "Breaking the crust to let the steam escape.",
        summary: "Savory chicken and vegetable filling under flaky pastry.",
        ingredients: ["Chicken", "Peas & Carrots", "Creamy gravy", "Pie crust"], method: "Mix chicken and vegetables in gravy, top with pastry, bake until golden.",
        visualType: "plate-pie", animationType: "steam"
    },
    {
        id: "us-bad-day", country: "United States", flag: "🇺🇸", mood: "Bad Day", dish: "Grilled Cheese & Tomato Soup",
        madeBy: "Dad", relationship: "Father", dialogue: "Sit down. We don't have to solve everything tonight.",
        memory: "Dipping the crispy buttery bread into the red soup.",
        summary: "Toasted cheese sandwich with tomato soup.",
        ingredients: ["Bread", "Cheese", "Butter", "Tomato soup"], method: "Butter bread, grill with cheese. Heat soup. Serve together.",
        visualType: "plate-soup-sandwich", animationType: "steam"
    },
    {
        id: "us-sick-day", country: "United States", flag: "🇺🇸", mood: "Sick Day", dish: "Chicken Noodle Soup",
        madeBy: "Mom", relationship: "Mother", dialogue: "You don't have to eat much. Just have some broth.",
        memory: "The soft noodles slipping off the spoon.",
        summary: "Chicken, noodles and vegetables in broth.",
        ingredients: ["Chicken broth", "Egg noodles", "Chicken", "Carrots", "Celery"], method: "Simmer vegetables and chicken in broth, add noodles until soft.",
        visualType: "bowl-broth-noodles", animationType: "steam"
    },
    {
        id: "us-sunday", country: "United States", flag: "🇺🇸", mood: "Sunday", dish: "Pancakes",
        madeBy: "Dad", relationship: "Father", dialogue: "Wake up. Breakfast is ready.",
        memory: "The sweet smell of maple syrup masking the weekend chores.",
        summary: "Stacked griddle cakes with butter and maple syrup.",
        ingredients: ["Flour", "Eggs", "Milk", "Butter", "Maple syrup"], method: "Cook batter on hot griddle, flip when bubbly. Top with butter and syrup.",
        visualType: "plate-pancakes", animationType: "steam"
    },
    {
        id: "us-miss-home", country: "United States", flag: "🇺🇸", mood: "I Miss Home", dish: "Macaroni and Cheese",
        madeBy: "Mom", relationship: "Mother", dialogue: "I made the kind you like.",
        memory: "The creamy, sharp cheddar pulling away from the fork.",
        summary: "Macaroni with creamy cheese sauce.",
        ingredients: ["Macaroni pasta", "Cheddar cheese", "Milk", "Butter", "Flour"], method: "Make a cheese sauce (roux base), toss with cooked macaroni, optionally bake.",
        visualType: "bowl-maccheese", animationType: "steam"
    },
    {
        id: "us-celebration", country: "United States", flag: "🇺🇸", mood: "Celebration", dish: "Apple Pie",
        madeBy: "Grandmother", relationship: "Grandmother", dialogue: "Let it cool first.",
        memory: "The cinnamon scent that meant everyone was happy.",
        summary: "Baked pastry filled with spiced apples.",
        ingredients: ["Apples", "Sugar", "Cinnamon", "Pie crust", "Butter"], method: "Toss apples in sugar and spices, pile into crust, bake until bubbly.",
        visualType: "plate-pie-slice", animationType: "steam"
    },
    {
        id: "us-just-because", country: "United States", flag: "🇺🇸", mood: "Just Because", dish: "Chocolate Chip Cookies",
        madeBy: "Older Sister", relationship: "Sibling", dialogue: "I made them for no reason.",
        memory: "The molten chocolate chips burning my tongue just a little.",
        summary: "Cookies with chocolate chips.",
        ingredients: ["Flour", "Butter", "Brown sugar", "Chocolate chips", "Vanilla"], method: "Cream butter and sugar, mix in dry ingredients, fold in chips, bake.",
        visualType: "plate-cookies", animationType: "glow"
    },
    {
        id: "us-late-night", country: "United States", flag: "🇺🇸", mood: "Late Night", dish: "Peanut Butter & Banana Toast",
        madeBy: "Older Brother", relationship: "Sibling", dialogue: "Kitchen's closed after this.",
        memory: "The quick, quiet assembly in the dark kitchen.",
        summary: "Toast with peanut butter and banana.",
        ingredients: ["Bread", "Peanut butter", "Banana"], method: "Toast bread, spread peanut butter, top with sliced banana.",
        visualType: "plate-toast-pb", animationType: "glow"
    }
];

window.gharRecipes = recipes;
