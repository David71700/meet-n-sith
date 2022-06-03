import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Characters.css";


const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [charaFiltred, setCharaFiltred] = useState([])

// const genderChoice = () => {
//     if (male 0) {
//       functi
//     }
//   }
const filtredDataByGender = (genderType) => {
  console.log(genderType)
  setCharaFiltred(characters.filter((profil) => profil.gender === genderType))
}
const filtredDataBySpecies = (speciesType) => {
  setCharaFiltred(characters.filter((profil) => profil.species === speciesType))
}

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json") 
    .then((res) => res.json())
    .then((res) => setCharacters(res)||setCharaFiltred(res) )
  },[])
  
  return (
    <div className="Characters">
      <h1 className="h1p2">Bienvenue!!!</h1>
      <p className="pp2">Souhaitez-vous rencontrer un homme rasé ou une femme toute poilue?</p>
         
      <button onClick={() => filtredDataByGender("male")} className="male"> ♂ (rasé)</button>
      <button onClick={() => filtredDataByGender("female")} className="female"> ♀ (poilue)</button>
      <button onClick={() => filtredDataBySpecies("droid")} className="droid">&#x1F916;(Droid)</button>
     
     {/* {characters.filter((profil) => profil.gender === "male").map((character) => {
        return <Card character={character} />
      })} */}
      <div className="global-card">
      {charaFiltred.map((character) => {
        return <Card character={character} />
      })}
        </div>


    </div>
  );
};

export default Characters;
