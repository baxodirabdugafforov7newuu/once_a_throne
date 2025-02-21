window.addEventListener("scroll", function () {
    document.querySelector("main").style.transform = `translateY(${window.scrollY * 0.1}px)`;
});
