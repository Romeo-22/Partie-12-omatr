// install npm install react-router-dom
import { useNavigate } from "react-router-dom";
import { voyages } from "../voyages";
import "../styles/ListVoyage.css";

export default function ListVoyages() {
  const navigate = useNavigate();
  const moreDetails = (id) => {
    navigate(`/DetailsVoyage/${id}`);
  };
  const journeysList = voyages.map((journey) => {
    const { id, title, price, source } = journey;
    return (
      <article className="journey" key={id}>
        <div className="image-container">
          <img src={`/images/${source}`} alt="journey image" />
        </div>
        <div className="journey-name">{title}</div>
        <div className="journey-price">{price}</div>
        <button onClick={() => moreDetails(id)}>Plus de détails</button>
      </article>
    );
  });
  return (
    <main id="content-container">
      <h1>Lists de voyages</h1>
      <div className="journeys-container">{journeysList}</div>
    </main>
  );
}
