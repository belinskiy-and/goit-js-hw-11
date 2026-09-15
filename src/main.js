import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  clearGallery();

  const searchText = e.target.elements['search-text'].value.trim();

  if (!searchText) {
    console.log('Enter search text');
  }

  showLoader();

  getImagesByQuery(searchText)
    .then(({ data }) => {
      createGallery(data.hits);
    })
    .catch(error => {
      console.log('error', error);
    })
    .finally(() => {
      e.target.reset();
      hideLoader();
    });
}
