import { Link } from 'react-router-dom';
// import charity slice

export default function CharityCard({charity}) {
    // const miniBio = charity.description.slice(0, 175) + "...";
    return (
        <li className="charity-card">
            <div className="charity-image">
                <img src={charity.image} />
            </div>
            <section className="charity-info">
                <h2>{charity.title}</h2>
                <h3>{charity.email}</h3>
                <p>This is where a bio will go </p>
                {/* <p>{miniBio}</p>
                <Link to={`/charities/${charities.id}`}>More Info</Link> */}
                {/* this will link to the details page for each charity */}
            </section>
        </li>
    );
}