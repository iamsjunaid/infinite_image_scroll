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
