// Include Prism core + languages you need
// Full version from https://prismjs.com/download.html
Prism = require('prismjs');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');
require('prismjs/components/prism-python');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-sql');

// Initialize Prism
document.addEventListener('DOMContentLoaded', function() {
    Prism.highlightAll();
});