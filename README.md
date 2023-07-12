# Preact95-Starter

Preact95-Starter is a template project built using Preact and React95. It provides a starting point for building Windows 95-style applications using modern web technologies.

## CSS Setup

The CSS for this project is set up to use a Dracula theme, with `#f73f67` as the primary color and `#282a36` as the background color. These colors can be modified in the `index.css` file to customize the appearance of the application.

To change the theme, simply update the values of the `color` and `background-color` CSS properties in the `:root` selector of the `index.css` file. For example, to change the primary color to blue and the background color to white, you would update the `index.css` file as follows:

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #0000ff; /* Modified to blue accent color */
  background-color: #ffffff; /* Modified to white background color */

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
```

# Getting Started 
To get started with this project, simply clone or download the repository and install the dependencies using your package manager of choice. Then, start the development server to see the application in action.

```bash
git clone https://github.com/markmental/preact95-starter.git
cd preact95-starter
npm install
npm run dev
```