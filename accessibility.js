document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    var footer = document.querySelector('footer');
    var increaseFontBtn = document.getElementById('increase-font');
    var decreaseFontBtn = document.getElementById('decrease-font');
    var toggleContrastBtn = document.getElementById('toggle-contrast');
    increaseFontBtn.addEventListener('click', function() {
        body.classList.add('large-font');
    });
    decreaseFontBtn.addEventListener('click', function() {
        body.classList.remove('large-font');
    });
    toggleContrastBtn.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
    });
    footer.style.position = 'fixed';
});