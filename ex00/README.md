# Personal Portfolio (ex00)

A responsive personal portfolio built from scratch with HTML5, CSS3 and plain JavaScript.
No frameworks, no templates, no UI libraries.

## Files

- `index.html` - page structure (navbar, hero, about, skills, projects, hobbies, contact, footer)
- `style.css` - styling, light/dark theme variables, Flexbox layout, mobile media query
- `script.js` - theme switcher and contact form handling
- `assets/` - profile picture (`avatar.svg`, replace it with your own photo)

## Theme switcher: the event lifecycle

1. **User action**: the user clicks the "Switch theme" button.
2. **Event firing**: the browser fires a `click` event on that button.
3. **JavaScript callback**: the function given to `addEventListener("click", ...)` runs.
4. **DOM/CSS mutation**: the callback calls `document.body.classList.toggle("dark")`.
   The `body.dark` rule in `style.css` redefines the CSS variables (`--bg`, `--text`, ...),
   so every element that uses them changes color, with a smooth `transition`.

## Responsive design

Layout uses Flexbox (`display: flex`, `flex-wrap`, `flex: 1 1 ...`). A media query at
`max-width: 700px` stacks the navbar and the About section vertically on phones.

## Run

Open `index.html` in a browser.
