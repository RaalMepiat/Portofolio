const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    // Check current theme attribute
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // Switch to Dark Mode
        document.documentElement.removeAttribute('data-theme');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    } else {
        // Switch to Light Mode
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
});