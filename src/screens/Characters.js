import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([])

// const genderChoice = () => {
//     if (male 0) {
//       functi
//     }
//   }

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
    .then((res) => res.json())
    .then((res) => setCharacters(res))
  },[])
  
  return (
    <div className="Characters.css">
      <h1>Bienvenue!!!</h1>
      <p>Souhaitez-vous rencontrer un homme rasé ou une femme toute poilue?</p>
         
      <button onClick="myFunction()" className="male"> ♂ (rasé)</button>
      <button onClick="myFunction()" className="female"> ♀ (poilue)</button>
     
     {/* {characters.filter((profil) => profil.gender === "male").map((character) => {
        return <Card character={character} />
      })} */}

      {characters.filter((profil) => profil.gender === "female").map((character) => {
        return <Card character={character} />
      })}

    </div>
  );
};

export default Characters;
