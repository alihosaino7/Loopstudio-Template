


function sliderNav() {
    let burgerIcon = document.querySelector("#burgerIcon");
    let closeIcon = document.querySelector("#closeIcon");
    let nav = document.querySelector("#navLinks");
    burgerIcon.onclick = function () {
        nav.style.left = "0";
        nav.style.display = "flex";
    }
    closeIcon.addEventListener("click", _ => {
        nav.style.left = "-500px";
    })
}

sliderNav();


