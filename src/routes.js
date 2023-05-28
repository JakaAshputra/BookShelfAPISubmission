const {
  addBooksHandler, getAllBooksHandler, getDetailBooksHandler, getEditBooksHandler, getDeleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: getEditBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: getDeleteBookHandler,
  },
];

module.exports = routes;
