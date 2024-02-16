const initSlider = () => {
    const slideButtons = document.querySelectorAll(".ow-content .slide-button");
    const slideScrollbar = document.querySelector(".ow-content .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const imageList = document.querySelector(".ow-content .ow-content__slider");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = slideScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetLeft
            const boundedPosition = Math.max(0,Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    })

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


