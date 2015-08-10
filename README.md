##To run:

Open the index.html file in a browser.

## Steps taken to optimize the site

Within index.html:
- Made CSS inline
- Made non-essential script resources asynchronous
- Removed several unused fonts that were loading unnecessarily


Within views/js/main.js:
- Edited to remove various instances of layout thrashing (changePizzaSizes function, UpdatePositions function )
- Changed order of Timing API requests in changePizzaSize function to improve performance
- Changed the way the requisite number of pizzas were calculated to improve performance



Within css/style.css:
- added will-change: transform and transform: translateZ(0)properties to the randomPizzaContainer
