document.addEventListener("contextmenu", (e) =>{
    e.preventDefault();
});

document.addEventListener('contextmenu', (e) =>{
    e.preventDefault();
    });
    document.addEventListener('selectstart', (e) =>{
    e.preventDefault();
    });

let text = document.querySelector('.banner-text');
let watcher = document.querySelector('.scroll-watcher');
let image = document.querySelector('.img-sec .img1')
let image2 = document.querySelector('.img-sec .img2')



// Animation 
const scrollRevealOption={
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    reset: true
}

ScrollReveal().reveal('.icon', scrollRevealOption);
ScrollReveal().reveal('.div', scrollRevealOption);
ScrollReveal().reveal('.about-section h2', scrollRevealOption);
ScrollReveal().reveal('.my-project h1', scrollRevealOption);
ScrollReveal().reveal('.about h1', scrollRevealOption);
ScrollReveal().reveal('div', scrollRevealOption)

