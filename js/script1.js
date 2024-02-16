const initSlider = () => {
    const slideButtons = document.querySelectorAll(".ow-content .slide-button");
    const slideScrollbar = document.querySelector(".ow-content .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const imageList = document.querySelector(".ow-content .ow-content__slider");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });


    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft)*(slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }


    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    })
}





window.addEventListener("load", initSlider);


