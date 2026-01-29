// Typing Effect
const text = "AI & Machine Learning Enthusiast";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}
typeEffect();

// Scroll Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el=>{
    observer.observe(el);
});
