// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

list.style.listStyle = 'none';

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

new SimpleLightbox('.gallery__link', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
