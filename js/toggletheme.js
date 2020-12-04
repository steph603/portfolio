// THEME TOGGLE
//  Javascript borrowed from:
//  https://zocada.com/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript/ 
//
//  Own explanations to demonstrate understanding :) 

// Sets the theme in the document (the document being the HTML file containing the toggle).  
// A class of *themeName* is set in the HTML tag
// Using SCSS mixins, all items containing the toggled *themeName* (eg. all children of the HTML tag) will have that theme applied. 

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// When toggle is switched, check local storage for the currently stored theme, and switch it to the opposite

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Invoke function on loading page - check storage if a previous theme was stored, if not, load default (light) theme

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();