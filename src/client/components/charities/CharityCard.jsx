import { Link } from "react-router-dom";

export default function CharityCard({ charity }) {
  return (
    <li className="charity-card">
      <div className="charity-image">
        <img src={charity.image} alt={`Logo for ${charity.title}`} />
      </div>
      <section className="charity-info">
        <h2 className="charityTitle">{charity.title}</h2>
        <h3 className="charityDescription">{charity.description}</h3>
        <Link to={`/charities/${charity.id}`} className="charity-link">
          More Details
        </Link>
      </section>
    </li>
  );
}
