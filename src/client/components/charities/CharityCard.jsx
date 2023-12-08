import { Link } from "react-router-dom";

export default function CharityCard({ charity }) {
  return (
    <li className="charity-card">
      <div className="charity-image">
        <img src={charity.image} alt={`Logo for ${charity.title}`} />
      </div>
      <section className="charity-info">
        <h2>{charity.title}</h2>
        <h3>{charity.email}</h3>
        <p>This is where a bio will go </p>
        <Link to={`/charities/${charity.id}`} className="charity-link">
          More Details
        </Link>
      </section>
    </li>
  );
}
