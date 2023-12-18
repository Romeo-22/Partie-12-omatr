const add_livre = (bookData) => {
  return { book: bookData, type: "ADD_LIVRE" };
};
const delete_livre = (id) => {
  return { bookId: id, type: "DELETE_LIVRE" };
};
export { add_livre, delete_livre };
