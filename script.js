// Menu mobile

const menu=document.getElementById("menu-toggle");

const nav=document.getElementById("navbar");

menu.onclick=()=>{

nav.classList.toggle("active");

}

// Header au scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

header.classList.toggle("scrolled",window.scrollY>50);

});
}
