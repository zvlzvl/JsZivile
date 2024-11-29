const galleryDiv = document.querySelector('.gallery');
fetch("https://api.escuelajs.co/api/v1/products")
    .then(res => res.json())
    .then(data => {
        data = data.slice(12, 30);

        data.forEach(photo => {
            galleryDiv.innerHTML +=
                `  <div class="gallery-item"><img alt="Image" src="${photo.images}"></div>`
        })
    })
