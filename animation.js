function animateProgressBar() {
    const progressBarElements = document.querySelectorAll('.progress-bar');
    progressBarElements.forEach((progressBar) => {
        const targetWidth = parseInt(progressBar.style.width, 10);
        let currentWidth = 0;
        const animationInterval = setInterval(() => {
            if (currentWidth >= targetWidth) {
                clearInterval(animationInterval);
            } else {
                currentWidth++;
                progressBar.style.width = currentWidth + '%';
            }
        }, 10);
    });
}
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const activationPoint = windowHeight * 0.6;
    if (scrollY >= activationPoint) {
        animateProgressBar();
    }
});


const listItems = document.querySelectorAll('.navbar li');
listItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(-10px)';
        item.style.transition = 'transform 0.2s ease-in-out';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});