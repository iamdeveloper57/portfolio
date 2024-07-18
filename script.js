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

// document.addEventListener('scroll', ()=>{
//     let value = window.scrollY;
//     const speed = 0.5;
//     const scrollTop = window.scrollY || window.pageYOffset;
//     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollProgress = scrollTop / scrollHeight;

//     const scrollPosition = window.pageYOffset;
//     text.style.transform = 'translateY(' + scrollPosition * -5 + 'px)';
//     watcher.style.width = `${scrollProgress * 100}%`;
//     image2.style.scale = `${scrollProgress * 100 }%`
//     image.style.scale = `${scrollProgress * 100 }%`
// })
