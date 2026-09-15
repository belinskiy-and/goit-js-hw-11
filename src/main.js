import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    iziToast.error({
      message: 'Enter search text',
      position: 'topRight',
    });

    return;
  }

  showLoader();

  getImagesByQuery(searchText)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      e.target.reset();
      hideLoader();
    });
}
