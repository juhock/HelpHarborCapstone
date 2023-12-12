import { Link } from "react-router-dom";

export default function CharityCard({ charity }) {
  return (
    <li className="charity-card">
      <Link to={`/charities/${charity.id}`} className="charity-link">
        <div className="charity-image">
          <img src={charity.image} alt={`Logo for ${charity.title}`} />
        </div>
      </Link>

      <Link to={`/charities/${charity.id}`} className="charity-link">
        <section className="charity-info">
          <h2 className="charityTitle">{charity.title}</h2>
          <h3 className="charityDescription">{charity.description}</h3>
        </section>
      </Link>
    </li>
  );
}
