import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const DisplayChara = () => {
	    const [character, setCharacter] = useState({})
    const params = useParams()
    useEffect(() => {
        const id = params.id
		fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharacter(res))
	}, )
	return <div>
		poulet : {character.name}
		<img src={character.image} alt={character.name} />
	</div> 
}

export default DisplayChara