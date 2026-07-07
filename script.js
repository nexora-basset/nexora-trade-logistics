

/* =====================================
   NEXORA TRADE & LOGISTICS
   JAVASCRIPT
===================================== */



/* ===============================
 MENU MOBILE
================================ */


const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");


if(menuToggle){


    menuToggle.addEventListener("click",()=>{


        navbar.classList.toggle("active");


        menuToggle
        .querySelector("i")
        .classList.toggle("fa-xmark");


    });


}




/* Fermer le menu après clic */


document.querySelectorAll(".navbar a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navbar.classList.remove("active");


    });


});







/* ===============================
 COMPTEURS ANIMÉS
================================ */



const counters = document.querySelectorAll(".counter");



const startCounter = (counter)=>{


    const target = +counter.dataset.target;


    let count = 0;


    const speed = target / 100;



    const update = ()=>{


        count += speed;



        if(count < target){


            counter.innerText =
            Math.ceil(count);



            requestAnimationFrame(update);


        }

        else{


            counter.innerText = target;


        }


    };



    update();



};






let counterStarted=false;



window.addEventListener("scroll",()=>{


    const stats =
    document.querySelector(".hero-stats");


    if(!stats) return;



    const position =
    stats.getBoundingClientRect().top;



    if(position < window.innerHeight && !counterStarted){


        counters.forEach(startCounter);


        counterStarted=true;


    }



});








/* ===============================
 FAQ ACCORDION
================================ */



const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


    const button =
    item.querySelector(".faq-question");



    button.addEventListener("click",()=>{


        faqItems.forEach(other=>{


            if(other !== item){


                other.classList.remove("active");


            }


        });



        item.classList.toggle("active");


    });



});









/* ===============================
 SCROLL ANIMATION
================================ */



const animatedElements =
document.querySelectorAll(
".service-card, .why-card, .sector-card, .commitment-card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";


    }


});


},
{

threshold:0.15

});




animatedElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";


    element.style.transition=
    "all .6s ease";


    observer.observe(element);


});









/* ===============================
 BACK TO TOP
================================ */



const backTop =
document.querySelector(".back-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.style.display="flex";


    }

    else{


        backTop.style.display="none";


    }


});



backTop.addEventListener("click",(e)=>{


    e.preventDefault();


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});









/* ===============================
 FORMULAIRE DEVIS
================================ */



const form =
document.querySelector(".quote-form");



if(form){


form.addEventListener("submit",(e)=>{


    e.preventDefault();



    alert(
    "Merci pour votre demande. Notre équipe NEXORA vous contactera rapidement."
    );



    form.reset();



});


}









/* ===============================
 HEADER SHADOW AU SCROLL
================================ */



const header =
document.querySelector(".header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.15)";


    }

    else{


        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";


    }


});
