const images = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img boss.jpg'
];

let current = 0;

function acceptProposal() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main').classList.remove('hidden');

  const slide = document.getElementById('slide'); // Move it here

  // Start slideshow
  setInterval(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
  }, 3000);
}

function declineProposal() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('rejected').classList.remove('hidden');
}
