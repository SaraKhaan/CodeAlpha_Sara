const images = [
    '../img/1.jpg',
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg',
    '../img/5.jpg',
    '../img/6.jpg',
    '../img/2.jpg'
];

let currentIndex = 0;

function changeImage(index) {
    currentIndex = index; // Update the current index
    document.getElementById('currentImage').src = images[currentIndex];
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Loop to last image
    document.getElementById('currentImage').src = images[currentIndex];
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Loop to first image
    document.getElementById('currentImage').src = images[currentIndex];
});