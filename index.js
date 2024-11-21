


// =============== Sidebar Start Here =============
const menuBtn = document.getElementById("menu_btn");

const closebtn = document.getElementById("cross");

const sidebar = document.querySelector(".sidebar");

menuBtn.onclick = () => {
    sidebar.classList.toggle("visible");
}

closebtn.onclick = () => {
    sidebar.classList.remove("visible");
}


// ================ Sidebar Ending =================


/// Remember it for using odometer
// const odometer = document.querySelectorAll(".odometer");

// setTimeout(() => {
//     odometer.forEach(list => {
//         let id = list.getAttribute("id");

//         if(id === "experience"){
//             list.innerHTML = 1.8;
//         }
//         if(id === "project"){
//             list.innerHTML = 27;
//         }
//         if(id === "award"){
//             list.innerHTML = 3;
//         }
//         if(id === "worldwide"){
//             list.innerHTML = 3;
//         }
//     })
// }, 1000)












const navbar = document.getElementById("navbar");
const routes = document.querySelectorAll("#navbar .nav_routes .route");
const sections = document.querySelectorAll("section");



window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.classList.add("drop");
    }
    else{
        navbar.classList.remove("drop");
    }
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + height){
            routes.forEach((route) => {
                route.classList.remove("active");
                document.querySelector("#navbar .nav_routes a[href*=" + id + "]").classList.add("active");
            })
        }
    })
}

// ================ Navbar End Here ======================= //



// ======= THEME SWITCHING ===========


const themecheckbox = document.getElementById("theme-checkbox");
const storageKey = "theme";



if(JSON.parse(localStorage.getItem(storageKey))){
    document.firstElementChild.setAttribute("data-theme","dark");
    localStorage.setItem(storageKey,JSON.stringify(true));
    themecheckbox.checked = true;
}
else{
    document.firstElementChild.setAttribute("data-theme","light");
    localStorage.setItem(storageKey,JSON.stringify(false));
    themecheckbox.checked = false;
}


themecheckbox.onchange = () => {
    if(themecheckbox.checked){
        document.firstElementChild.setAttribute("data-theme","dark");
        localStorage.setItem(storageKey,JSON.stringify(true));
        return;
    }
    else{
        document.firstElementChild.setAttribute("data-theme","light");
        localStorage.setItem(storageKey,JSON.stringify(false)); 
    }
}




// ============= GSAP of Header ====================

gsap.timeline({delay: 0.5})
.from("#header .points", {opacity: 0, y: -30})
.from("#header .me", {opacity:0, scale: 0.7})
.from(["#header .user_info .sub_title", "#header .user_info .description"], {opacity: 0, y: 20})
.from("#header .user_info .title", {opacity: 0, x:-30})
.from("#header .user_info .buttons", {opacity: 0, x:-30})
.from("#header .point", {opacity:0,x:-30,stagger:0.5})



// ================= GSAP of About ====================

gsap.registerPlugin(ScrollTrigger);


gsap.timeline({
    delat:0.5,
    scrollTrigger: {
        trigger: "#about",
        start: "20% bottom",
        end: "bottom top",
    },
})
.from("#about .box", {opacity:0, y:30, stagger: 0.5});




// SERVICES START 


gsap.timeline({
    delat:0.5,
    scrollTrigger: {
        trigger: "#service",
        start: "20% bottom",
        end: "bottom top",
    },
})
.from(["#service .section_header .sub_title", "#service .section_header .description"],{
    opacity:0,
    y:30,
    stagger:0.5
})
.from("#service .service", {opacity:0, y:30, stagger:0.5})





// Project Started 

gsap.timeline({
    delat:0.5,
    scrollTrigger: {
        trigger: "#projects",
        start: "20% bottom",
        end: "bottom top",
    },
})
.from(["#projects .section_header .sub_title", "#projects .section_header .description"],{
    opacity:0,
    y:30,
    stagger:0.5
})
.from("#projects .project", {opacity:0, y:30, stagger:0.5})




// Contact Started

gsap.timeline({
    delat:0.5,
    scrollTrigger: {
        trigger: "#projects",
        start: "20% bottom",
        end: "bottom top",
    },
})
.from("#contact .box", {opacity:0, y:30, stagger:0.5})
.from("#contact .contact_form", {opacity:0, x:30})
