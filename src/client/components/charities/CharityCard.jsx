import { Link } from "react-router-dom";
import "./CharityCard.css";

export default function CharityCard({ charity }) {
  return (
    <div className="player-cards">
      <li className="charity-card">
        <Link
          to={`/charities/${charity.id}`}
          className="charity-link"
          id="stopIt"
        >
          <div className="charity-image">
            <img
              src={charity.image}
              alt={`Logo for ${charity.title}`}
              className="image"
            />
          </div>
        </Link>

        <Link
          to={`/charities/${charity.id}`}
          className="charity-link"
          id="stopIt"
        >
          <section className="charity-info">
            <h2 className="charityTitle">{charity.title}</h2>
            <h3 className="charityDescription">{charity.description}</h3>
          </section>
        </Link>
      </li>
    </div>
  );
}
