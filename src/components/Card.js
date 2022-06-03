import "./Card.css";
import { Link } from "react-router-dom"

const Card = (props) => {


    return ( <div className = "card">
            <Link to={`/page2/${props.character.id}`}>
                <img src={props.character.image}
                    alt={props.character.name}
                    className="imgProfil"
                />
            </Link>
    <p className="textColor">{props.character.name}</p>
    <p className="textColor">{props.character.gender}</p>
    </div>
    )
}

export default Card