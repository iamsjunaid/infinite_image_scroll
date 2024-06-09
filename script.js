const apiKey = '44294667-4dfb1a4321a20e607a9e402a8';
let page = 1;

function fetchImages() {
  fetch(`https://pixabay.com/api/?key=${apiKey}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach(hit => {
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        img.src = hit.webformatURL;
        img.alt = hit.tags;
        imgContainer.appendChild(img);
        document.getElementById('gallery-container').appendChild(imgContainer);
      });
      page++;
    });
}


// Call fetchImages when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchImages);

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchImages();
  }
});

document.addEventListener('keydown', (event) => {
  const gallery = document.getElementById('gallery-container');
  switch (event.key) {
    case 'ArrowRight':
      // Scroll to the right
      gallery.scrollBy({ left: 300, behavior: 'smooth' });
      break;
    case 'ArrowLeft':
      // Scroll to the left
      gallery.scrollBy({ left: -300, behavior: 'smooth' });
      break;
    case 'ArrowDown':
      // Scroll down
      gallery.scrollBy({ top: 300, behavior: 'smooth' });
      break;
    case 'ArrowUp':
      // Scroll up
      gallery.scrollBy({ top: -300, behavior: 'smooth' });
      break;
  }
});
