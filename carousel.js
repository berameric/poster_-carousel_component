class AcademicPosterCarousel {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.currentIndex = 0;
        this.render();
        this.attachEventListeners();
        this.updateCarousel();
    }

    render() {
        this.container.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-mini-images"></div>
                <div class="carousel-main-image-container">
                    <img src="" alt="Main Academic Poster" class="carousel-main-image">
                    <button class="carousel-nav-button carousel-prev-btn">&lt;</button>
                    <button class="carousel-nav-button carousel-next-btn">&gt;</button>
                    <button class="carousel-full-page-btn">Full Page</button>
                </div>
            </div>
        `;
        this.mainImage = this.container.querySelector('.carousel-main-image');
        this.miniImagesContainer = this.container.querySelector('.carousel-mini-images');
        this.prevBtn = this.container.querySelector('.carousel-prev-btn');
        this.nextBtn = this.container.querySelector('.carousel-next-btn');
        this.fullPageBtn = this.container.querySelector('.carousel-full-page-btn');
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));
        this.fullPageBtn.addEventListener('click', () => this.toggleFullPage());
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        this.updateCarousel();
    }

    toggleFullPage() {
        this.container.classList.toggle('carousel-full-page');
        this.fullPageBtn.textContent = this.container.classList.contains('carousel-full-page') ? 'Exit Full Page' : 'Full Page';
    }

    updateCarousel() {
        this.mainImage.src = this.images[this.currentIndex];
        this.updateMiniImages();
    }

    updateMiniImages() {
        this.miniImagesContainer.innerHTML = '';
        this.images.forEach((src, index) => {
            const miniImage = document.createElement('img');
            miniImage.src = src;
            miniImage.alt = `Mini Academic Poster ${index + 1}`;
            miniImage.classList.add('carousel-mini-image');
            if (index === this.currentIndex) {
                miniImage.classList.add('active');
            }
            miniImage.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateCarousel();
            });
            this.miniImagesContainer.appendChild(miniImage);
        });
    }
}
