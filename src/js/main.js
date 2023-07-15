window.addEventListener("scroll", function (e) {
    document.body.style.setProperty("--scrollTop", `${this.scrollY}px`);
    console.log(this.scrollY);
    console.log(this.scrollY / 2);
});