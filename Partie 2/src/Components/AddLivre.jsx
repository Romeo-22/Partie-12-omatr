import { useState } from "react";
import { add_livre } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import "../styles/add_livre.css";
export default function AddLivre() {
  const dispatch = useDispatch();
  const listBooksId = useSelector((state) => state.books_list).map(
    (item) => item.id
  );
  const [bookId, setBookId] = useState("");
  const [title, setBookTitle] = useState("");
  const [category, setBookCategory] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    const bookData = { id: bookId, title, category };
    if (!listBooksId.includes(bookId)) {
      dispatch(add_livre(bookData));
    } else {
      alert("deja exists");
    }
    setBookId("");
    setBookTitle("");
    setBookCategory("");
  };
  const handleBookId = (event) => {
    setBookId(+event.target.value);
  };
  const handleBookTitle = (event) => {
    setBookTitle(event.target.value);
  };
  const handleBookCategory = (event) => {
    setBookCategory(event.target.value);
  };
  return (
    <form onSubmit={handleForm} id="add_books">
      <input
        type="text"
        name="book-id"
        id="book-id"
        value={bookId}
        onChange={handleBookId}
        placeholder="id"
      />
      <input
        type="text"
        name="book-title"
        id="book-title"
        value={title}
        onChange={handleBookTitle}
        placeholder="title"
      />
      <input
        type="text"
        name="book-category"
        id="book-category"
        value={category}
        onChange={handleBookCategory}
        placeholder="catégorie"
      />
      <input type="submit" value={"add article"} />
    </form>
  );
}
