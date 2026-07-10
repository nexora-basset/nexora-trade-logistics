// ===== Animation au défilement =====

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===== Message de confirmation du formulaire =====

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Merci pour votre demande. L'équipe Nexora Trade Logistics vous contactera rapidement."
    );

    form.reset();

});


// ===== Menu mobile simple =====

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        window.scrollTo({
            behavior:"smooth"
        });

    });

});


// ===== Année automatique dans le footer =====

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    footer.innerHTML.replace("2025", year);

}
/
