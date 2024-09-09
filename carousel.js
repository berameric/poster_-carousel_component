// carousel.js

function initializeCarousel(images) {
    let currentIndex = 0;
    const mainImage = document.querySelector('.custom-carousel #mainImage');
    const miniImagesContainer = document.querySelector('.custom-carousel #miniImages');
    const prevBtn = document.querySelector('.custom-carousel #prevBtn');
    const nextBtn = document.querySelector('.custom-carousel #nextBtn');

    function updateCarousel() {
        mainImage.src = images[currentIndex];
        updateMiniImages();
    }

    function updateMiniImages() {
        miniImagesContainer.innerHTML = '';
        images.forEach((src, index) => {
            const miniImage = document.createElement('img');
            miniImage.src = src;
            miniImage.alt = `Mini Image ${index + 1}`;
            miniImage.classList.add('mini-image');
            if (index === currentIndex) {
                miniImage.classList.add('active');
            }
            miniImage.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
            miniImagesContainer.appendChild(miniImage);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
}
