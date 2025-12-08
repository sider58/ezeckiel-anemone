let cloud = document.querySelector('.cloud');
let carriedLinks = document.querySelector('.carried-links');

// To set a gap between the two hands and to keep them included in the cloud area
function sameWidth() {

    // We stylize carriedLinks to get a maxWidth set on cloud's width
    carriedLinks.style.maxWidth = getComputedStyle(cloud).width;
}

// Execution
sameWidth();

// Execution on page resize
window.addEventListener('resize', sameWidth)