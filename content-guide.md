# GHAR — Global Comfort Food Content Guide

> **Purpose:** Source-of-truth content for the coding AI implementing GHAR.

> **Core idea:** Different kitchens. Different recipes. Same love.

GHAR is an editorial archive of comfort-food memories. Every dish is presented as **memory → person → food → recipe**, not as a generic recipe card.

---

# 1. Content Matrix

GHAR contains **8 kitchens × 8 memories = 64 curated stories**.

**Countries:** India, Japan, Italy, Mexico, South Korea, Morocco, Greece, United States.

**Memories:** Coming Home, Bad Day, Sick Day, Sunday, I Miss Home, Celebration, Just Because, Late Night.

Do not render all 64 large experiences at once. Store them as structured data and render/filter only the relevant subset.

---

# 2. Content Object Schema

Every recipe should contain:

- country
- region/context
- mood
- dish
- who made it
- relationship
- dialogue
- memory
- recipe summary
- CSS visual recipe
- CSS animation behavior

The emotional stories are editorially written for GHAR. Do not present them as universal claims about an entire culture.

---

# 3. Global CSS Food Animation Language

Food should feel alive but never cartoonish. Reuse a small set of animation primitives instead of creating 64 unique systems.

### Steam

Use 2–4 pseudo-elements with staggered delays. Steam should move upward, fade out, and slightly widen.

### Simmer

Use very small vertical movement and opacity changes on liquid dishes. Add occasional tiny bubble elements rather than constant motion.

### Warm Glow

Use a slow opacity/pulse animation for hot bowls, tea, candles and kitchen-light accents.

### Plate Arrival

Recipe visuals enter with `translateY(20–30px)`, slight rotation and opacity, then settle naturally.

### Food-Specific Motion

- **Soups:** ripple + steam + occasional bubble.
- **Rice:** steam + tiny grain highlights.
- **Noodles:** subtle strand movement + steam.
- **Bread:** gentle rise + warm highlight.
- **Fried food:** crisp highlight + tiny settling movement.
- **Desserts:** syrup movement + powder particles.
- **Tea:** surface reflection + steam.

Never use large spins, excessive bouncing, neon glow, or particle explosions.

---

# 4. The 64 GHAR Stories

## India 🇮🇳

### Coming Home — Dal Chawal

**Who Made It?** Maa

**Dialogue:** “Wash your hands first. Then eat. You can tell me everything later.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Rice with simple lentil dal, tempering and ghee.

**CSS Food Visual:** Plate + rice mound + golden dal bowl + coriander + steam + ghee glow.

**CSS Animation:** Dal gently simmers; ghee melts; steam rises; spoon slides 3px on hover.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Aloo Paratha with Dahi

**Who Made It?** Dad

**Dialogue:** “Bad day? Fine. Eat first. Then we'll complain about it together.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Stuffed potato flatbread served with yogurt.

**CSS Food Visual:** Layered paratha + browned spots + yogurt bowl.

**CSS Animation:** Butter melts across paratha; steam appears; yogurt bowl slides in.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Moong Dal Khichdi

**Who Made It?** Grandmother

**Dialogue:** “No spicy food today. This is all you need.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Soft rice and yellow moong cooked together with mild seasoning.

**CSS Food Visual:** Golden khichdi in a deep bowl.

**CSS Animation:** Slow steam; tiny ghee dot expands and settles; bowl gently glows.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Chole Bhature

**Who Made It?** Mom

**Dialogue:** “Today nobody is counting how many you ate.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Spiced chickpea curry with fluffy fried bhature.

**CSS Food Visual:** Dark chickpea curry + inflated golden bhatura.

**CSS Animation:** Bhatura subtly puffs; curry shimmers; coriander falls.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Kadhibhat

**Who Made It?** Mom

**Dialogue:** “You don't need to explain. I know you're missing home.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Yogurt-based kadhi served with rice.

**CSS Food Visual:** White rice + pale yellow kadhi.

**CSS Animation:** Kadhi ripples; rice steams; spoon rocks once.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Gulab Jamun

**Who Made It?** Grandmother

**Dialogue:** “Take one more. It's a celebration.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Soft fried milk-solid dumplings soaked in fragrant syrup.

**CSS Food Visual:** Three glossy brown spheres + syrup.

**CSS Animation:** Syrup highlight moves; warm glow pulses; pistachio accent appears.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Pakora & Chai

**Who Made It?** Auntie

**Dialogue:** “I made too many. Help me finish them.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Crispy fritters with spiced tea.

**CSS Food Visual:** Irregular fritters + steaming tea glass.

**CSS Animation:** Tea steam rises; fritters settle into plate; tea ripples.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Masala Maggi

**Who Made It?** Older Sibling

**Dialogue:** “Don't tell Mom we're still awake.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Instant noodles cooked with vegetables and Indian spices.

**CSS Food Visual:** Small steel saucepan/bowl + noodles.

**CSS Animation:** Noodles wiggle; steam rises; garnish drops; kitchen glow pulses.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## Japan 🇯🇵

### Coming Home — Oyakodon

**Who Made It?** Mother

**Dialogue:** “You're home. Sit down. It's still warm.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Chicken and softly cooked egg over rice in a light sweet-savory broth.

**CSS Food Visual:** White rice bowl + golden egg + chicken + scallion.

**CSS Animation:** Egg surface moves; steam rises; scallion settles.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Japanese Curry Rice

**Who Made It?** Dad

**Dialogue:** “No need to talk about today yet.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Rice with thick Japanese-style curry and vegetables.

**CSS Food Visual:** Half rice / half curry bowl.

**CSS Animation:** Curry ripples; steam rises; spoon shifts slightly.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Okayu

**Who Made It?** Grandmother

**Dialogue:** “Small bites. Take your time.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Soft rice porridge cooked with extra water.

**CSS Food Visual:** Minimal white bowl + pale porridge.

**CSS Animation:** Slow steam; tiny ripple; bowl warmth increases on selection.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Nikujaga

**Who Made It?** Mother

**Dialogue:** “Sunday smells like this.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Simmered meat and potatoes in a sweet-savory broth.

**CSS Food Visual:** Deep bowl + potato chunks + translucent broth.

**CSS Animation:** Broth shimmers; steam rises; potato pieces shift.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Onigiri

**Who Made It?** Mother

**Dialogue:** “I put the filling you like inside.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Hand-shaped rice balls with filling and nori.

**CSS Food Visual:** Rice triangle + dark nori wrapper.

**CSS Animation:** Nori texture shifts; rice highlights; handwritten note appears.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Mochi

**Who Made It?** Grandmother

**Dialogue:** “Careful. They're softer than they look.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Chewy rice-cake sweets with optional filling.

**CSS Food Visual:** Soft rounded mochi pieces.

**CSS Animation:** Gentle elastic movement; powder specks shimmer.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Tamagoyaki

**Who Made It?** Dad

**Dialogue:** “I made extra. Obviously.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Layered rolled Japanese omelet.

**CSS Food Visual:** Stacked golden slices.

**CSS Animation:** Layers reveal sequentially; steam wisps; plate slides in.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Miso Soup & Rice

**Who Made It?** Older Sister

**Dialogue:** “You're hungry again?”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Miso soup with tofu/seaweed/scallion alongside rice.

**CSS Food Visual:** Small dark bowl + white rice bowl.

**CSS Animation:** Soup steams; surface ripples; kitchen-light glow pulses.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## Italy 🇮🇹

### Coming Home — Pasta al Pomodoro

**Who Made It?** Nonna

**Dialogue:** “You're home. Sit. Pasta first.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Pasta with tomato, olive oil, garlic and basil.

**CSS Food Visual:** White plate + red sauce + pasta ribbons + basil.

**CSS Animation:** Pasta moves subtly; sauce gleams; basil drops; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Lasagna

**Who Made It?** Mother

**Dialogue:** “Today deserves another layer.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Layered pasta baked with sauce, cheese and filling.

**CSS Food Visual:** Visible layered cross-section.

**CSS Animation:** Cheese stretches; heat shimmer rises; cheese highlight moves.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Pastina in Brodo

**Who Made It?** Grandmother

**Dialogue:** “Just a little. You don't have to finish.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Tiny pasta served in light broth.

**CSS Food Visual:** Small pasta shapes in pale broth.

**CSS Animation:** Broth ripples; pasta drifts; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Sunday Ragù

**Who Made It?** Dad

**Dialogue:** “It has been cooking all morning.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Slow-cooked meat-and-tomato sauce with pasta.

**CSS Food Visual:** Deep red sauce + pasta + herbs.

**CSS Animation:** Slow simmer; steam; sauce surface movement.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Minestrone

**Who Made It?** Mother

**Dialogue:** “It tastes better tomorrow. Like everything at home.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Vegetable soup with broth; ingredients vary by household and season.

**CSS Food Visual:** Vegetables floating in clear broth.

**CSS Animation:** Ingredients bob; steam rises; spoon moves.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Tiramisù

**Who Made It?** Aunt

**Dialogue:** “Nobody gets the last piece.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Coffee-soaked layers with mascarpone cream and cocoa.

**CSS Food Visual:** Layered square dessert.

**CSS Animation:** Cocoa dust falls; cream settles; coffee glow appears.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Focaccia

**Who Made It?** Dad

**Dialogue:** “It's still warm. Take some.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Olive-oil-rich baked bread with herbs and salt.

**CSS Food Visual:** Golden rectangular bread with dimples.

**CSS Animation:** Oil highlights move; herbs sway; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Aglio e Olio

**Who Made It?** Older Brother

**Dialogue:** “Five minutes. That's all we need.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Spaghetti with olive oil, garlic and chili.

**CSS Food Visual:** Golden noodles + garlic + red chili.

**CSS Animation:** Noodles wiggle; oil shimmers; chili settles.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## Mexico 🇲🇽

### Coming Home — Arroz con Pollo

**Who Made It?** Mamá

**Dialogue:** “You're late. Good thing dinner waited.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Rice cooked with chicken, vegetables, tomato and seasoning.

**CSS Food Visual:** Golden rice + chicken + vegetables.

**CSS Animation:** Steam rises; rice shifts; lime wedge rotates.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Quesadillas

**Who Made It?** Dad

**Dialogue:** “Cheese fixes more than people admit.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Toasted tortillas folded around melted cheese and optional fillings.

**CSS Food Visual:** Golden folded tortilla + cheese.

**CSS Animation:** Cheese stretches; tortilla glow; cilantro appears.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Caldo de Pollo

**Who Made It?** Abuela

**Dialogue:** “Drink the broth. It'll help.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Chicken soup with vegetables and broth.

**CSS Food Visual:** Large bowl + golden broth + vegetables.

**CSS Animation:** Broth ripples; steam; vegetables drift.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Pozole

**Who Made It?** Mamá

**Dialogue:** “Sunday starts when the pot starts.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Hominy-based soup/stew with meat and garnishes.

**CSS Food Visual:** Large bowl + hominy + meat + lime.

**CSS Animation:** Steam; broth movement; garnishes drop in.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Sopa de Fideo

**Who Made It?** Mamá

**Dialogue:** “It's the same one I made when you were little.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Short noodles toasted and cooked in tomato broth.

**CSS Food Visual:** Red-orange soup + fine noodles.

**CSS Animation:** Noodles move; soup ripples; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Tres Leches Cake

**Who Made It?** Aunt

**Dialogue:** “Don't pretend you're too full for dessert.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Light sponge soaked in three milks and topped with cream.

**CSS Food Visual:** Soft white cake + cream.

**CSS Animation:** Milk sheen moves; cream settles; cinnamon falls.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Elote

**Who Made It?** Older Sister

**Dialogue:** “I saw it and thought of you.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Corn with creamy, savory, spicy toppings.

**CSS Food Visual:** Corn cob + cream + cheese + lime + chili.

**CSS Animation:** Lime shines; chili particles appear; corn rotates slightly.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Chilaquiles

**Who Made It?** Older Brother

**Dialogue:** “Breakfast? Dinner? Who cares.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Tortilla chips softened in salsa with toppings.

**CSS Food Visual:** Layered chips + salsa.

**CSS Animation:** Salsa spreads; cheese melts; cilantro drops.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## South Korea 🇰🇷

### Coming Home — Doenjang Jjigae

**Who Made It?** Eomma

**Dialogue:** “Eat while it's bubbling.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Soybean-paste stew with tofu, vegetables and other ingredients.

**CSS Food Visual:** Earthenware bowl + bubbling stew.

**CSS Animation:** Bubbles pop; steam rises; bowl glow pulses.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Kimchi Fried Rice

**Who Made It?** Dad

**Dialogue:** “I know you're hungry.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Rice stir-fried with kimchi and optional additions.

**CSS Food Visual:** Red-orange rice mound + egg.

**CSS Animation:** Rice shifts; egg shines; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Dakjuk

**Who Made It?** Grandmother

**Dialogue:** “Slowly. You have all day.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Soft chicken porridge.

**CSS Food Visual:** Pale porridge in ceramic bowl.

**CSS Animation:** Slow steam; surface ripple; bowl gently breathes.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Bulgogi

**Who Made It?** Mother

**Dialogue:** “Everyone is coming. Make room.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Thin marinated meat cooked until tender and caramelized.

**CSS Food Visual:** Glossy browned meat + green garnish.

**CSS Animation:** Gloss moves; steam rises; garnish falls.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Gimbap

**Who Made It?** Mother

**Dialogue:** “I packed the pieces you like.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Rice and fillings rolled in seaweed and sliced.

**CSS Food Visual:** Neat circular slices.

**CSS Animation:** Roll rotates; slices settle; seaweed texture shifts.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Tteok

**Who Made It?** Grandmother

**Dialogue:** “This means something good happened.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Korean rice cakes with varied shapes, textures and flavors.

**CSS Food Visual:** Small colorful geometric rice cakes.

**CSS Animation:** Soft elastic bounce; powder particles; highlight.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Pajeon

**Who Made It?** Dad

**Dialogue:** “Rain? Then we make pancakes.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Savory pancake commonly containing scallions.

**CSS Food Visual:** Irregular golden pancake + scallions.

**CSS Animation:** Pancake rotates slightly; scallions sway; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Ramyeon

**Who Made It?** Older Sister

**Dialogue:** “One bowl. Then sleep.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Korean-style instant noodle soup with optional toppings.

**CSS Food Visual:** Red broth bowl + noodles + egg.

**CSS Animation:** Noodles wiggle; steam rises; egg shines.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## Morocco 🇲🇦

### Coming Home — Harira

**Who Made It?** Mama

**Dialogue:** “You're home. Have some while it's hot.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Tomato, legume, herb and spice soup; recipes vary.

**CSS Food Visual:** Terracotta bowl + rich red-brown soup.

**CSS Animation:** Steam; gentle simmer; herb flecks move.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Vegetable Tagine

**Who Made It?** Mother

**Dialogue:** “Sit. The kitchen can wait.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Slow-cooked vegetables and/or meat with aromatic spices.

**CSS Food Visual:** Conical tagine silhouette.

**CSS Animation:** Lid lifts slightly; steam escapes; warm glow.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Chicken & Vegetable Soup

**Who Made It?** Grandmother

**Dialogue:** “Warm food. Small spoonfuls.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Light chicken and vegetable soup with herbs.

**CSS Food Visual:** Golden broth bowl.

**CSS Animation:** Steam; broth ripple; herb movement.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Couscous with Vegetables

**Who Made It?** Mother

**Dialogue:** “Everyone eats from the same table today.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Steamed couscous with vegetables and flavorful broth/stew.

**CSS Food Visual:** Large couscous mound + vegetables.

**CSS Animation:** Grains shimmer; steam; vegetables settle.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Bissara

**Who Made It?** Mother

**Dialogue:** “You remember this one, don't you?”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Fava-bean or split-pea soup/purée with olive oil and spices.

**CSS Food Visual:** Creamy pale bowl.

**CSS Animation:** Olive-oil swirl; steam; surface movement.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Pastilla

**Who Made It?** Aunt

**Dialogue:** “This one takes time. That's why we make it for today.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Layered pastry with savory-sweet filling.

**CSS Food Visual:** Golden flaky pastry.

**CSS Animation:** Layers separate slightly; powdered sugar falls; warm glow.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Mint Tea

**Who Made It?** Grandfather

**Dialogue:** “Sit. Tea first.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Green tea with fresh mint and sugar.

**CSS Food Visual:** Tall glass + amber-green tea + mint.

**CSS Animation:** Surface shimmer; steam; mint sways; reflection moves.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Msemen

**Who Made It?** Older Sister

**Dialogue:** “There's still some left.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Layered Moroccan flatbread with sweet or savory accompaniment.

**CSS Food Visual:** Folded golden square.

**CSS Animation:** Layers subtly unfold; honey thread falls; warm highlight.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## Greece 🇬🇷

### Coming Home — Avgolemono Soup

**Who Made It?** Yia-Yia

**Dialogue:** “Come sit. You look tired.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Greek egg-lemon soup, often with chicken and rice/orzo.

**CSS Food Visual:** Creamy pale soup + lemon.

**CSS Animation:** Steam; lemon glow; surface ripple.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Spanakopita

**Who Made It?** Mother

**Dialogue:** “Take a piece. Then tell me what happened.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Phyllo pastry filled with spinach, herbs and often feta.

**CSS Food Visual:** Golden triangular pastry.

**CSS Animation:** Phyllo layers shift; steam; feta crumble appears.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Chicken Soup with Lemon

**Who Made It?** Grandmother

**Dialogue:** “The lemon will wake you up.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Chicken soup with lemon and rice/orzo.

**CSS Food Visual:** Golden broth bowl.

**CSS Animation:** Steam; lemon slice rotates; surface ripple.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Moussaka

**Who Made It?** Mother

**Dialogue:** “Lunch is going to take a while.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Layered baked dish with eggplant, meat sauce and béchamel.

**CSS Food Visual:** Layered cross-section.

**CSS Animation:** Béchamel highlight moves; steam; layers reveal.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Fasolada

**Who Made It?** Yia-Yia

**Dialogue:** “You can always come home.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Bean soup/stew with vegetables, tomato and olive oil.

**CSS Food Visual:** Rustic bean bowl.

**CSS Animation:** Oil shimmers; steam; beans subtly move.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Baklava

**Who Made It?** Aunt

**Dialogue:** “One more piece. It's a celebration.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Layered pastry with nuts and sweet syrup.

**CSS Food Visual:** Golden square + pistachio.

**CSS Animation:** Syrup highlight; pistachio particles; layers shift.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Tzatziki & Warm Pita

**Who Made It?** Dad

**Dialogue:** “I was hungry. So I made some.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Yogurt-cucumber-garlic dip with warm pita.

**CSS Food Visual:** Cream dip + folded pita.

**CSS Animation:** Oil spiral; pita steam; herb flecks.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Toast with Feta & Tomato

**Who Made It?** Older Brother

**Dialogue:** “It's not really dinner, but it'll do.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Toast with tomato, feta, herbs and olive oil.

**CSS Food Visual:** Rustic toast.

**CSS Animation:** Toast slides in; oil glints; tomato highlight.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

## United States 🇺🇸

### Coming Home — Chicken Pot Pie

**Who Made It?** Mom

**Dialogue:** “You got home just in time.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Savory chicken and vegetable filling under flaky pastry.

**CSS Food Visual:** Golden pie + crust.

**CSS Animation:** Steam escapes; crust highlight shifts; filling glows.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Bad Day — Grilled Cheese & Tomato Soup

**Who Made It?** Dad

**Dialogue:** “Sit down. We don't have to solve everything tonight.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Toasted cheese sandwich with tomato soup.

**CSS Food Visual:** Triangle sandwich + soup bowl.

**CSS Animation:** Cheese stretches; soup ripples; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sick Day — Chicken Noodle Soup

**Who Made It?** Mom

**Dialogue:** “You don't have to eat much. Just have some broth.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Chicken, noodles and vegetables in broth.

**CSS Food Visual:** Clear golden soup + noodles.

**CSS Animation:** Noodles drift; steam rises; surface ripples.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Sunday — Pancakes

**Who Made It?** Dad

**Dialogue:** “Wake up. Breakfast is ready.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Stacked griddle cakes with butter and maple syrup.

**CSS Food Visual:** Three pancakes + butter + syrup.

**CSS Animation:** Syrup drips; butter melts; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### I Miss Home — Macaroni and Cheese

**Who Made It?** Mom

**Dialogue:** “I made the kind you like.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Macaroni with creamy cheese sauce.

**CSS Food Visual:** Golden creamy macaroni bowl.

**CSS Animation:** Cheese stretches; surface glows; steam rises.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Celebration — Apple Pie

**Who Made It?** Grandmother

**Dialogue:** “Let it cool first.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Baked pastry filled with spiced apples.

**CSS Food Visual:** Pie slice + lattice crust.

**CSS Animation:** Steam; cinnamon particles; apple filling glows.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Just Because — Chocolate Chip Cookies

**Who Made It?** Older Sister

**Dialogue:** “I made them for no reason.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Cookies with chocolate chips.

**CSS Food Visual:** Cookie stack + melted chocolate.

**CSS Animation:** Chocolate shines; warm air rises; cookie slides in.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

### Late Night — Peanut Butter & Banana Toast

**Who Made It?** Older Brother

**Dialogue:** “Kitchen's closed after this.”

**Memory:**
> The emotional story should be a short 1–3 sentence memory written around the selected mood, the person who made the dish, and the feeling of being cared for. Keep it intimate and specific rather than culturally universal.

**Recipe Summary:** Toast with peanut butter and banana.

**CSS Food Visual:** Diagonal toast slices.

**CSS Animation:** Banana highlight shifts; peanut butter gloss; toast settles.

**Implementation note:** Render the food as reusable HTML/CSS/SVG primitives. Prefer lightweight vector/CSS construction over large raster images.

---

# 5. Data Model for the Coding AI

Use one reusable recipe schema:

```js
const recipe = {
  id: "india-dal-chawal-coming-home",
  country: "India",
  flag: "🇮🇳",
  mood: "Coming Home",
  dish: "Dal Chawal",
  madeBy: "Maa",
  relationship: "Mother",
  dialogue: "Wash your hands first. Then eat. You can tell me everything later.",
  summary: "Rice with simple lentil dal, tempering and ghee.",
  visualType: "dal-rice",
  animationType: "steam-ghee"
};
```

Create reusable renderers such as:

- `RecipeCard`
- `FoodIllustration`
- `SteamEffect`
- `MemoryFilter`
- `CountryFilter`
- `WhoMadeIt`
- `RecipeDetails`

---

# 6. Filtering Experience

### Country-first

Selecting **India** reveals its eight memory stories.

### Memory-first

Selecting **Sick Day** reveals eight culturally different dishes:

- India — Moong Dal Khichdi
- Japan — Okayu
- Italy — Pastina in Brodo
- Mexico — Caldo de Pollo
- South Korea — Dakjuk
- Morocco — Chicken & Vegetable Soup
- Greece — Chicken Soup with Lemon
- United States — Chicken Noodle Soup

The emotional comparison is the point: different food, same human need for care.

---

# 7. Performance Rules

- Do not create 64 bespoke DOM structures.
- Store content in data objects.
- Use reusable food primitives.
- Render only visible/selected recipe content.
- Prefer CSS/SVG over photographs for animated food.
- Lazy-load any real imagery.
- Use IntersectionObserver for section reveals.
- Keep JavaScript for state and interaction, not decorative animation.
- Respect `prefers-reduced-motion`.

Example reduced-motion rule:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 8. Accessibility

Every CSS food illustration needs a meaningful accessible description when it communicates information.

Example:

```html
<div role="img" aria-label="A warm bowl of dal with rice, coriander and melted ghee."></div>
```

Interactive map markers, mood filters and recipe controls must be keyboard accessible and have visible focus states.

---

# 9. Final Creative Rule

Do not think of these as **64 recipes**.

Think of them as:

> **64 reasons someone once sat down at a table.**

An Indian grandmother's khichdi and a Korean grandmother's dakjuk should look culturally distinct, but emotionally related.

The food is the vehicle.

The person is the story.

The memory is the emotion.

The family table is the destination.

## Different kitchens.
## Different recipes.
## Same love.