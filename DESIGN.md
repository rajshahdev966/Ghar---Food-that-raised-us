---
version: "1.0"
name: "GHAR UI"
description: "GHAR — Food that raised us is an editorial, emotionally driven food-memory experience celebrating comfort food from kitchens around the world. The interface combines a handmade recipe-book aesthetic, global illustrated cartography, tactile paper materials, intimate storytelling, and a final family-table experience."
theme: "Warm Editorial / Handcrafted Memory Book"
---

## Overview

GHAR is not designed as a conventional recipe platform or restaurant website.

It is a digital archive of comfort-food memories: the meals, people, kitchens, and small moments that made childhood feel like home.

The central emotional statement is:

> **Different kitchens. Different recipes. Same love.**

The visual system should feel like a contemporary editorial publication built from the materials of a family kitchen: parchment, recipe cards, ceramic, walnut, linen, ink, handwritten notes, soft natural light, and food.

The experience should remain visually rich while being technically efficient. The interface should rely heavily on CSS, SVG, typography, lightweight illustrations, and restrained JavaScript rather than large media assets or heavy UI libraries.

---

## Design Principles

- **Emotion before information:** A recipe begins with a memory and the person who made it before presenting ingredients and instructions.
- **Global, not generic:** Represent different cultures through food, stories, materials, and regional context rather than stereotypes or excessive flags.
- **Human imperfection:** Slightly irregular paper, handwriting, illustrations, and positioning should make the interface feel touched by people.
- **Editorial, not commercial:** Avoid the visual language of restaurant booking sites, food-delivery apps, and generic recipe platforms.
- **Warm, not saturated:** Food provides color, while the surrounding interface remains restrained.
- **Whitespace is emotional:** Quiet spaces should be intentionally preserved around major statements.
- **One continuous story:** The page should feel like a journey from the world, to memories, to individual dishes, to the shared family table.
- **Performance is part of the design:** Visual richness should come from CSS, SVG, optimized assets, and typography rather than heavy photography or video.

---

## Page Narrative

The complete page follows this sequence:

1. **Hero — The World of Ghar**
   - Brand statement
   - Hand-drawn world map
   - Global kitchen markers
   - Invitation to explore

2. **Memories — What Were You Feeling?**
   - Emotional memory filters
   - Recipes reorganized around memories rather than cuisine alone
   - Examples: Coming Home, Bad Day, Sick Day, Sunday, I Miss Home, Celebration, Just Because

3. **Recipes — Stories Before Instructions**
   - Dish identity
   - Emotional introduction
   - Origin
   - Who Made It?
   - Ingredients
   - Method

4. **Family Table — There's Room for One More**
   - Long dining table
   - Comfort dishes from multiple cultures
   - Warm physical materials
   - One empty chair

5. **Contribution — Leave a Seat at the Table**
   - Country
   - Dish
   - Who made it?
   - Memory
   - Optional recipe
   - CTA: Pull Up a Chair / Place It on the Table

6. **Footer — The Quiet Ending**
   - Minimal closing statement
   - Navigation
   - Final emotional line

---

## Colors

The GHAR color system is intentionally warm and material-driven.

### Core Palette

- **Parchment (`#F5EFE3`)** — primary page background and paper surfaces.
- **Soft Cream (`#FFF9EF`)** — recipe cards, forms, elevated paper surfaces.
- **Deep Ink (`#29231D`)** — primary text, illustrations, navigation, strong contrast.
- **Walnut (`#5A3E2B`)** — table surfaces, deep environmental framing, rich shadows.
- **Burnt Clay (`#A65D3B`)** — food-inspired accent, active states, selected memory states.
- **Turmeric (`#D69A32`)** — restrained highlight for warmth, kitchen lights, selected details.
- **Herb Green (`#69745A`)** — secondary natural accent for herbs, map details, metadata.
- **Muted Stone (`#8B8377`)** — secondary text and quiet interface information.
- **Hairline Border (`#D8CDBB`)** — subtle paper and component separation.

### Color Usage

- Background: `#F5EFE3`
- Primary surface: `#FFF9EF`
- Primary text: `#29231D`
- Secondary text: `#8B8377`
- Strong environmental surface: `#5A3E2B`
- Primary accent: `#A65D3B`
- Warm highlight: `#D69A32`
- Natural secondary accent: `#69745A`
- Border: `#D8CDBB`

### Color Ratio

Target approximately:

- 65–70% parchment / cream
- 15–20% deep ink / walnut
- 5–8% clay
- 3–5% herb
- 1–3% turmeric

Food illustrations may introduce natural ingredient colors, but the interface itself should remain restrained.

### Color Rules

- Never turn every section into a different color theme.
- Clay and turmeric are accents, not backgrounds.
- Avoid neon colors.
- Avoid glossy gradients.
- Avoid generic orange food-site palettes.
- Avoid excessive use of national flag colors.
- Allow photographs or illustrations to provide natural food color when necessary.

---

## Typography

Typography should combine editorial sophistication with human handwritten details.

### Display

**Recommended family:** Cormorant Garamond, Playfair Display, or another high-quality editorial serif.

- Weight: 400
- Large hero display: approximately 96–180px desktop depending on viewport
- Line height: 0.85–1.0
- Letter spacing: -0.04em to -0.06em
- Case: natural title case or sentence case
- Use for major emotional statements and dish names

Example:

> **Food that raised us.**

### Body

**Recommended family:** Inter, DM Sans, or Manrope.

- Weight: 400–500
- Size: 14–18px
- Line height: 1.5–1.7
- Use for descriptions, recipe instructions, navigation, and forms.

### Labels

Use the body sans in compact uppercase styling.

- Size: 10–12px
- Weight: 500–600
- Letter spacing: 0.12em–0.18em
- Use for metadata such as:
  - ORIGIN
  - WHO MADE IT?
  - INGREDIENTS
  - MEMORY
  - PREPARATION

### Handwritten Accent

Use a restrained handwriting font such as Caveat or another natural handwritten typeface.

Use only for:

- recipe annotations
- emotional notes
- tiny labels
- margin comments
- handwritten quotes

Handwriting should never be used for large blocks of body text.

---

## Layout

### Composition

The page uses a strong editorial grid but should not feel like a rigid dashboard.

- Desktop: 12-column grid
- Tablet: 8-column grid
- Mobile: 4-column grid
- Full-bleed backgrounds are allowed.
- Content should sit inside a controlled max-width container.
- Major visual objects such as the world map and family table may intentionally break the container.

### Recommended Width

- Max content width: 1280–1440px
- Comfortable reading width: 620–760px
- Hero content may use near-full viewport width.
- Recipe text should never become excessively wide.

### Base Spacing

Use an 8px primary rhythm with 4px micro adjustments.

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 40px
- 48px
- 64px
- 80px
- 120px
- 160px

### Section Spacing

Large editorial sections should have generous vertical spacing.

- Desktop: 96–160px
- Tablet: 72–120px
- Mobile: 56–96px

Do not compress emotional sections simply to fit more content above the fold.

---

## Hero

### Concept

The hero represents the world as a collection of kitchens.

The primary visual is a hand-drawn world map rather than a conventional digital map.

### Composition

- GHAR wordmark
- Navigation
- Large statement: **Food that raised us.**
- Supporting line: **Different kitchens. Different recipes. Same love.**
- Large illustrated world map
- Small kitchen markers
- Prompt: **Where did comfort begin for you?**

### Map Style

- Thin imperfect ink lines
- Parchment background
- Muted brown/olive geography
- Warm kitchen-light markers
- No blue ocean
- No Google Maps visual language
- No dense geographic labels

### Interaction

Hovering or focusing a kitchen marker may reveal:

- city / country
- dish name
- one emotional sentence

The interaction should feel like discovering a memory rather than inspecting map data.

---

## Memories

### Concept

The memory section asks:

> **What were you feeling?**

Memory is the primary organizing principle; country is secondary.

### Memory Categories

- Coming Home
- Bad Day
- Sick Day
- Sunday
- I Miss Home
- Celebration
- Just Because
- Late Night

### Visual Treatment

Memory options should resemble physical recipe cards, notes, or pinned memories.

Avoid standard rounded SaaS cards.

Use:

- paper surfaces
- subtle rotations
- imperfect offsets
- small illustrations
- handwritten annotations
- thin borders
- restrained shadows

### Interaction

Selecting a memory filters or reorganizes the recipe collection.

The page should not require a full route change for every memory.

Use lightweight JavaScript to update the visible recipe state.

---

## Recipe Section

### Content Hierarchy

Every recipe follows this order:

1. Memory
2. Person
3. Dish
4. Recipe

The emotional story must appear before the technical recipe information.

### Recipe Structure

- Dish name
- Emotional subtitle
- Origin
- Short story
- Who Made It?
- Ingredients
- Method
- Optional cultural note

### Example

**DAL CHAWAL**

*The meal that never needed an occasion.*

Then:

> “Some days you didn't ask what was for dinner. You just smelled the tadka.”

Then:

**WHO MADE IT?**

**Amma**

> “She never measured the spices. She measured the people at the table.”

Then the recipe.

### Recipe Surface

Recipe details should resemble a physical recipe card.

- Parchment
- Soft cream
- Subtle paper grain
- Tiny handwritten notes
- Very subtle stains
- Soft natural shadows
- Slight rotation where appropriate

Do not over-texture the interface.

---

## Who Made It?

This is the emotional engine of each recipe.

The section represents the person behind the dish.

Possible roles:

- Mom
- Dad
- Grandma
- Grandpa
- Aunt
- Sibling
- Guardian
- Neighbor
- Family friend

### Visual Options

Use one of three treatments depending on the recipe:

1. Illustrated portrait
2. Illustrated hands preparing food
3. Handwritten note attached to the recipe

### Emotional Copy

Copy should be short and specific.

Example:

> “She never followed the recipe. She followed us.”

Avoid generic inspirational language.

The writing should feel like a real memory.

---

## Family Table

### Concept

The family table is the emotional climax.

The visual environment transitions from paper/editorial space into a warm dining-table scene.

### Table Composition

- Walnut table surface
- Ceramic plates
- Bowls
- Wooden spoons
- Linen napkins
- Small recipe notes
- Crumbs
- Multiple comfort dishes from different cultures

Possible dishes:

- Indian dal and rice
- Japanese okayu
- Italian pasta
- Mexican soup
- Korean stew
- Moroccan soup
- Greek comfort food

### Cultural Treatment

Food should represent cultures naturally.

Do not fill the scene with flags or stereotypical decorations.

The food itself is the cultural language.

---

## Empty Chair

The empty chair is a symbolic interaction, not a decorative object.

Text:

> **There's always room for one more.**

Then:

> **What did home taste like for you?**

The chair should remain visually quiet.

Avoid excessive animation.

A very subtle reveal or movement is enough.

---

## Contribution Form

### Concept

Do not present this as a generic “Submit Recipe” form.

Use:

**Leave a Seat at the Table**

or:

**Pull Up a Chair**

### Fields

- Your country
- Dish
- Who made it?
- What do you remember?
- Recipe (optional)

### CTA

**PULL UP A CHAIR**

Alternative:

**PLACE IT ON THE TABLE**

### Interaction

The challenge does not require a backend.

A successful submission can produce a visual response such as:

> **A seat has been saved.**

The empty chair can receive a small plate or subtle table setting.

Use local state or localStorage only if persistence is useful.

---

## Audio

GHAR may include optional natural kitchen ambience.

### Audio Character

- distant utensils
- quiet plates
- faint pan sizzle
- kettle
- subtle room tone
- soft family ambience

Avoid prominent music.

Audio must never autoplay without explicit user interaction.

Provide a compact sound control.

The sound should feel like entering a kitchen, not like background music on a marketing website.

---

## Components

### Navigation

- Minimal
- Editorial
- Transparent or parchment surface depending on scroll position
- Links:
  - Memories
  - Kitchens
  - Recipes
  - Our Table

### Buttons

Primary:

- Background: `#29231D`
- Text: `#FFF9EF`
- Padding: 14px 20px
- Radius: 0–2px
- Typography: uppercase label
- Hover: clay underline / background transition

Secondary:

- Transparent
- Deep ink text
- 1px parchment/ink border
- Minimal hover movement

Text links:

- Deep ink
- Underline or small animated line
- No pill styling

### Memory Card

- Cream paper surface
- 1px `#D8CDBB` border
- 0–4px radius
- Subtle irregular transform
- Padding: 24–32px

### Recipe Card

- Soft cream surface
- Paper-like border
- Large editorial title
- Generous whitespace
- Handwritten annotation layer

### Form

- No floating-label SaaS treatment
- Text fields should resemble lines on a recipe card or letter
- Clear focus state
- Large touch targets
- Strong labels for accessibility

---

## Shapes

GHAR should intentionally avoid excessive rounded UI.

### Corner Radius

- Main editorial surfaces: 0–4px
- Recipe cards: 0–4px
- Buttons: 0–2px
- Small illustrations: natural geometry
- Pills: only when a semantic reason exists

The design language is based on paper, cards, plates, tables, and physical objects rather than soft SaaS components.

---

## Elevation & Depth

Depth should feel natural and physical.

### Shadows

Use soft warm shadows rather than black UI shadows.

Example:

`0 18px 40px rgba(41, 35, 29, 0.10)`

For paper:

`0 8px 24px rgba(41, 35, 29, 0.08)`

For table objects:

`0 12px 30px rgba(41, 35, 29, 0.16)`

### Borders

Prefer subtle warm borders:

`#D8CDBB`

Avoid strong gray borders.

### Blur

Use blur sparingly.

Glassmorphism is not part of the GHAR visual language.

Natural depth should come from:

- paper layering
- shadows
- overlapping objects
- color contrast
- scale
- rotation

---

## Illustration

Illustrations should feel editorial and handmade.

### Preferred Styles

- ink drawing
- restrained watercolor
- pencil/charcoal accents
- flat editorial food illustration
- imperfect linework

### Avoid

- generic AI food photography
- hyper-realistic 3D food
- cartoon emoji style
- overly detailed decorative illustrations
- stereotypical cultural imagery

Food should be recognizable but artistically simplified.

---

## Imagery & Asset Strategy

Performance is a priority.

### Prefer

1. CSS-generated effects
2. SVG illustrations
3. Optimized WebP/AVIF images
4. Small raster textures
5. Carefully selected food imagery

### Avoid

- large hero videos
- full-screen background videos
- huge unoptimized photographs
- multiple heavy animation libraries
- unnecessary external embeds

The visual richness of GHAR should come primarily from composition, typography, SVG, CSS, and motion.

---

## Motion

Motion should feel slow, tactile, and organic.

### Motion Level

Expressive but restrained.

### Typical Durations

- Micro interaction: 150–250ms
- Hover: 250–400ms
- Section reveal: 600–1000ms
- Emotional transition: 1000–1600ms
- Ambient motion: 4–8 seconds

### Easing

Prefer:

- `ease-out`
- `cubic-bezier(0.16, 1, 0.3, 1)`
- gentle linear loops for steam or ambient effects

### Hero Motion

- Map fades/reveals gradually
- Kitchen markers appear sequentially
- Typography rises subtly
- Markers gently pulse

### Memory Motion

- Cards shift into position
- Selected memory receives subtle emphasis
- Recipes reorganize rather than abruptly disappear

### Recipe Motion

- Paper slides into place
- Steam rises slowly
- Handwritten notes reveal with slight delay

### Family Table Motion

- Dishes settle onto the table
- Small environmental movement
- Empty chair remains almost still

### Reduced Motion

Respect `prefers-reduced-motion`.

When enabled:

- disable looping ambient motion
- remove large parallax effects
- use simple opacity transitions
- keep all content immediately accessible

---

## Accessibility

Accessibility is part of the visual system.

### Requirements

- Semantic HTML
- Proper heading hierarchy
- Keyboard-accessible map markers
- Visible focus states
- Accessible labels for all form fields
- Sufficient color contrast
- No information conveyed by color alone
- Audio controls must be clearly labeled
- Reduced-motion support
- Touch targets approximately 44px or larger
- Decorative illustrations should use appropriate alt handling

The emotional experience must never come at the expense of usability.

---

## Responsive Design

### Desktop

The primary artistic composition.

Use:

- large editorial typography
- wide map
- generous whitespace
- horizontal family table
- layered recipe cards

### Tablet

Reduce:

- hero map scale
- heading size
- table density
- decorative layers

Preserve:

- emotional hierarchy
- editorial typography
- card composition

### Mobile

Mobile is not a compressed desktop.

Recompose the experience.

Hero:

- vertical typography
- simplified map
- fewer visible kitchen markers

Memories:

- horizontal scroll or stacked cards

Recipes:

- single-column
- story before recipe

Family Table:

- horizontally scrollable table scene or carefully composed vertical table

Form:

- full-width inputs
- large touch targets

The empty chair should remain a clear visual climax.

---

## Performance

### Core Principle

**Make the interface feel expensive without making it heavy.**

### Priorities

- Optimize all images.
- Prefer SVG for maps and illustrations.
- Lazy-load below-the-fold imagery.
- Use CSS for steam, shadows, paper effects, and small decorative details.
- Avoid unnecessary JavaScript.
- Avoid large UI frameworks unless required by implementation.
- Use system or optimized web fonts where possible.
- Keep map SVG paths optimized.
- Avoid rendering dozens of recipe cards simultaneously.
- Use lightweight state management for memory filtering.

### JavaScript Scope

JavaScript should primarily handle:

- memory filtering
- map marker selection
- recipe state
- audio toggle
- contribution form interaction
- optional localStorage
- small scroll/intersection interactions

CSS should handle most visual motion.

---

## Do's and Don'ts

### Do

- Do make food feel personal before making it informational.
- Do use parchment, ink, ceramic, linen, and walnut as visual references.
- Do preserve large areas of whitespace.
- Do use editorial serif typography for emotional statements.
- Do use handwritten details sparingly.
- Do represent cultures through food and stories rather than stereotypes.
- Do keep the world map artistic and lightweight.
- Do make the family table the emotional climax.
- Do make the empty chair meaningful.
- Do keep interactions subtle and tactile.
- Do prioritize accessibility and performance.

### Don't

- Don't make GHAR look like a restaurant booking website.
- Don't make it resemble a food-delivery application.
- Don't use excessive rounded cards.
- Don't use glassmorphism.
- Don't cover the page with food photographs.
- Don't overload the page with flags.
- Don't use stereotypical cultural decorations.
- Don't make every section colorful.
- Don't autoplay sound.
- Don't add a backend unless genuinely necessary.
- Don't build dozens of recipes just to create content volume.
- Don't let AI-generated components drift away from the core visual language.

---

## Content Tone

Copy should sound intimate, observant, and human.

### Preferred

> “She never measured the spices. Somehow, it was always right.”

> “You didn't know it then, but someone was making sure you'd remember this.”

> “The bowl placed in front of you when you were sick.”

> “The plate waiting when you came home.”

### Avoid

> “Discover delicious recipes from around the world!”

> “Our amazing collection of authentic cuisine!”

> “Explore mouthwatering dishes!”

The site should sound like someone remembering their childhood, not a marketing department.

---

## Design Tokens

```css
:root {
  --color-parchment: #F5EFE3;
  --color-cream: #FFF9EF;
  --color-ink: #29231D;
  --color-walnut: #5A3E2B;
  --color-clay: #A65D3B;
  --color-turmeric: #D69A32;
  --color-herb: #69745A;
  --color-stone: #8B8377;
  --color-border: #D8CDBB;

  --font-display: "Cormorant Garamond", "Playfair Display", serif;
  --font-body: "Inter", "DM Sans", sans-serif;
  --font-hand: "Caveat", cursive;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 80px;
  --space-11: 120px;
  --space-12: 160px;

  --radius-paper: 2px;
  --radius-control: 2px;

  --shadow-paper: 0 8px 24px rgba(41, 35, 29, 0.08);
  --shadow-object: 0 12px 30px rgba(41, 35, 29, 0.16);

  --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## Implementation Priority

Build in this order:

1. Global design tokens
2. Typography and base layout
3. Hero and world map
4. Memory interaction
5. Recipe storytelling
6. Who Made It?
7. Family table
8. Empty chair
9. Contribution form
10. Audio control
11. Footer
12. Responsive refinement
13. Accessibility pass
14. Performance optimization
15. Motion polish

Do not polish every component simultaneously.

The visual hierarchy should be established from top to bottom.

---

## Final Creative Standard

Every section should pass the same test:

> **Does this feel like GHAR?**

GHAR should feel like:

**a family cookbook + an illustrated world atlas + an editorial magazine + an interactive memory archive.**

It should not feel like:

**a recipe app + a restaurant website + a generic AI-generated landing page.**

The final emotional destination is simple:

> **Different kitchens.  
> Different recipes.  
> Same love.**
