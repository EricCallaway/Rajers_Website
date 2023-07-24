const mediaQueryPhone = window.matchMedia('(max-width: 600px)');

console.log("test");

if (mediaQueryPhone.matches) {
    console.log("Hello ");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        console.log("Hamburger:", hamburger);
        console.log("Nav Menu:", navMenu);

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}


