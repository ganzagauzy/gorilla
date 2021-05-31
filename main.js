var video = document.querySelector('#player');

for (var i = 0; i < video.textTracks.length; i++) {
   video.textTracks[i].mode = 'hidden';
}







const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})