function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
}
const root = document.documentElement;
root.className = 'light';
document.querySelector('.theme-toggle').addEventListener('click', setTheme)