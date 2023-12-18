import { voyages } from "../voyages";
import "../styles/DetailsVoyage.css";
import { useParams, Link } from "react-router-dom";
export default function DetailsVoyage() {
  const { journeyId } = useParams();
  const journeySelected = voyages.find((journey) => journey.id === +journeyId);
  const { title, price, source } = journeySelected;
  console.log(source);
  return (
    <main id="specific-journey">
      <article>
        <div className="journey-title">{title}</div>
        <div className="image-container">
          <img src={`/images/${source}`} alt="journey image" />
        </div>
        <div className="journey">{title}</div>
        <div className="journey-price">{price}</div>
        <div>
          Allez vers <Link to={"/"}>Page d'acceuil</Link>
        </div>
      </article>
    </main>
  );
}
