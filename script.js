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

// Check if the Media Session API is available
if ('mediaSession' in navigator) {
    // Define the amount of scroll to apply with each button press
    const scrollAmount = 100; // Adjust this value as needed

    // Handle the volume up button press
    navigator.mediaSession.setActionHandler('volumeup', function() {
        console.log('Volume Up pressed');
        window.scrollBy(0, -scrollAmount); // Scroll up
    });

    // Handle the volume down button press
    navigator.mediaSession.setActionHandler('volumedown', function() {
        console.log('Volume Down pressed');
        window.scrollBy(0, scrollAmount); // Scroll down
    });

} else {
    console.log('navigator.mediaSession API not supported');
}
