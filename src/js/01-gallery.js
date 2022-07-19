// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join(' ');
  return markup;
}

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryItemsMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

console.log(galleryItems);
