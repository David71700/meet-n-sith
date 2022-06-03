import "./Card.css";

const Card = (props) => {
    return (
    <div className = "card">
    <img
    src={props.character.image}
    alt={props.character.name}
    className="imgProfil"
    />
    <p>{props.character.name}</p>
    <p>{props.character.gender}</p>
    </div>
    )
    }

export default Card