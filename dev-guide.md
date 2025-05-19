# Portfolio 4.0 Developer Guide

This guide contains information for maintaining and extending the Portfolio 4.0 website.

## Project Structure

The website uses a modular approach with separate CSS and JS files for different components:

- `index.css`: Main styling
- `light-theme.css`: Light theme styles
- `flip-cards.css`: Styling for project flip cards
- `filter-buttons.css`: Styling for project filter buttons
- `project-animations.css`: Additional animations for projects section
- `mobile-touch.css`: Mobile and touch device optimizations

JavaScript files:
- `script-new.js`: Core functionality (cursor, navigation, etc.)
- `flip-cards.js`: Flip card functionality and project filtering
- `project-animations.js`: Additional GSAP animations for project section
- `mobile-touch.js`: Mobile touch handling for flip cards

## Adding New Projects

To add a new project to the portfolio:

1. Copy an existing flip card HTML structure from `index.html`
2. Update the project information:
   - Title
   - Short description
   - Categories (data-category attribute)
   - Technologies used
   - GitHub repository link
   - Other relevant links
   - Detailed information for the back side
3. Add appropriate category tags to help with filtering
4. Use high-quality images (recommended size: 500x300px)

Example:
```html
<div class="flip-card-container" data-category="web react frontend" data-aos="fade-up">
    <div class="flip-card flip-card-reveal">
        <div class="flip-card-front">
            <!-- Front content -->
        </div>
        <div class="flip-card-back">
            <!-- Back content -->
        </div>
    </div>
</div>
```

## Adding New Categories

To add a new project category:

1. Add a new filter button in the filter container:
```html
<button class="filter-btn" data-filter="newcategory">New Category</button>
```

2. Add the category to the relevant projects' data-category attributes:
```html
<div class="flip-card-container" data-category="web newcategory">
```

## Mobile Testing

Always test the website on mobile devices to ensure:

1. Touch interactions work properly
2. Flip cards flip on touch
3. Responsive layout displays correctly
4. Touch indicators are visible
5. Performance is acceptable on lower-end devices

## Animation Performance

If animations are causing performance issues on mobile:

1. Reduce the number of animated elements
2. Simplify GSAP animations
3. Use the `will-change` CSS property sparingly
4. In `flip-cards.js` and `project-animations.js`, add conditions to disable complex animations on mobile

## Browser Compatibility

The website has been tested on:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari
- Chrome for Android

For older browsers, consider adding appropriate polyfills or fallbacks.
