# iwamad-sis1-portfolio

Live site: https://adilbek679.github.io/iwamad-sis1-portfolio/

## About the site
This is my personal portfolio, a single page with About Me, Projects and Contact sections, built with plain HTML5, CSS3 and vanilla JavaScript. It shows my Week 1-4 projects from the IWaMAD course, each with a short description and a link. It has a dark/light mode switch and a contact form with my own validation (nothing is actually sent).

## Design decisions
1. **Hi-tech look.** I used a dark background with a faint grid, a cyan accent colour, monospace headings and small corner brackets on the cards, so the page looks like a technical dashboard. It fits the cloud and networking background I describe in the About section.
2. **Colours as CSS variables.** Every colour, font size and spacing value is a variable at the top of `styles.css`. The light theme only redefines the colour variables, so the toggle changes the whole page without a second stylesheet, and the type scale and the 8px spacing rhythm stay the same in both themes.
3. **Real layout changes at 768px.** On a phone the header, About block, projects and contact area are single stacked columns. On wide screens the nav moves into the header row, the avatar sits beside the text, projects become a 2x2 grid and the form sits next to the contact text.

## Files
- `index.html` - page structure
- `styles.css` - design tokens, layout and themes
- `script.js` - theme toggle and form validation
- `avatar.svg` - my avatar and favicon
