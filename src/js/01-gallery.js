// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const list = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(item => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = item.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = item.preview;
  galleryImage.setAttribute('data-source', item.original);
  galleryImage.alt = item.description;

  galleryItem.append(galleryLink);
  galleryItem.append(galleryImage);
  items.push(galleryItem);
});

list.append(...items);

list.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName != 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener('keydown', onEscPress),
      onClose: () => document.removeEventListener('keydown', onEscPress),
    }
  );
  instance.show();

  function onEscPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
});
