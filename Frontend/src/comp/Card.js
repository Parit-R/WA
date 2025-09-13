import "./card.css";

function Card({ name, text, url }) {
  return (
    <div className="card">
      <img className="card-img" src={url} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <a href='' className="card-btn" target="_blank" rel="noreferrer">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;