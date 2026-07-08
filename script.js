// ================= Typing Animation =================
const words = [
    "Full Stack .NET Developer",
    "WPF Developer",
    "ASP.NET MVC Developer",
    "React Developer",
    "UI Designer"
];
    
let wordIndex = 0;
let charIndex = 0;
let typing = true;
    
const text = document.getElementById("typing");
    
if (text) {
    function typeEffect() {
        if (typing) {
            text.textContent = words[wordIndex].substring(0, charIndex++);
            if (charIndex > words[wordIndex].length) {
                typing = false;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            text.textContent = words[wordIndex].substring(0, charIndex--);
            if (charIndex < 0) {
                typing = true;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        setTimeout(typeEffect, typing ? 100 : 50);
    }
    typeEffect();
}
    
// ================= Counter =================
window.addEventListener("load", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let count = 0;
        const update = () => {
            const increment = Math.ceil(target / 50);
            if (count < target) {
                count += increment;
                if (count > target) count = target;
                counter.innerText = count;
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
});
    
/*================ PRELOADER ================*/
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if(preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});
    
/*================ PROGRESS BAR ================*/
window.addEventListener("scroll", () => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let scroll = (window.scrollY / height) * 100;
    const progressBar = document.getElementById("progressBar");
    if(progressBar) {
        progressBar.style.width = scroll + "%";
    }
});
    
/*================ CURSOR ================*/
const cursor = document.querySelector(".cursor");
if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}
    
/*================ REVEAL =================*/
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const top = reveal.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            reveal.classList.add("active");
        }
    });
});
    
/*================ MOBILE MENU =================*/
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");
if (menuBtn && navMenu) {
    menuBtn.onclick = () => {
        navMenu.classList.toggle("active");
    };
}
    
/*================ BACK TO TOP =================*/
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}