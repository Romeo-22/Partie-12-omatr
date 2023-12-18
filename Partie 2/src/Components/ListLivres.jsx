import { useSelector, useDispatch } from "react-redux";
import { delete_livre } from "../Redux/Actions";
import "../styles/list_livre.css";
export default function ListLivres() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books_list);
  const handleDelete = (id) => {
    dispatch(delete_livre(id));
  };
  const lines = books.map((item, index) => {
    const { id, title, category } = item;
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <button onClick={() => handleDelete(id)}>Delete Article</button>
        </td>
      </tr>
    );
  });
  return (
    <section id="book-section">
      <h1>Liste des articles</h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Categorie</td>
            <td></td>
          </tr>
        </thead>
        <tbody>{lines}</tbody>
      </table>
    </section>
  );
}
