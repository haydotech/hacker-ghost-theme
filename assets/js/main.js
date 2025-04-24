// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Keyboard navigation (J/K for next/prev post)
document.addEventListener('keydown', (e) => {
    if (e.key === 'j') {
        const nextPost = document.querySelector('.post-nav-next a');
        if (nextPost) nextPost.click();
    }
    if (e.key === 'k') {
        const prevPost = document.querySelector('.post-nav-prev a');
        if (prevPost) prevPost.click();
    }
});