// const contents = document.getElementById("contents");
// let hasScrolled = false;

// function showContentsOnScroll() {
//     console.log('Scrolling detected');
//     if (!hasScrolled) {
//         contents.style.opacity = 100;
//         hasScrolled = true;
//     }
// }

// document.addEventListener("scroll", showContentsOnScroll);

const contents = document.getElementById('contents');
const threshold = 70;
let isVisible = false;

function controlContentsOpacity() {
    if (window.scrollY > threshold && !isVisible) {
        contents.style.opacity = 100;
        isVisible = true;
    } else if (window.scrollY <= threshold && isVisible) {
        contents.style.opacity = 0;
        isVisible = false;
    }
}

// only do effects when we are on a desktop device.
if (window.innerWidth > 767) {
    window.addEventListener('scroll', controlContentsOpacity);
}
