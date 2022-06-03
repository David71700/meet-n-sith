import Image from "../images/team3.jpg"
import "./Page3.css";

const ImageTeam = () => {
  return <img src={Image} alt="us"></img>;
}
const Page3 = () => {
  return (
    <><div className="fade"> </div>
    <section className="star-wars">

      <div class="crawl">

        <div class="title"><h1>Futures destinations...</h1>
        
          <p>
            Etant donné que les siths commencent à conquérir d'autres univers,
            il se pourrait bien qu'on mette la main sur leur dernier prototype
            pour vous proposer d'autres destinations de rêve !
          </p>
          <p>Imaginez donc toutes les choses que vous pourriez réaliser !!
            Il serait tout à fait possible d'aller aider Sangoku à combattre encore
            un nouveau méchant pas beau, puis aller prendre des cours de magie avec Harry Plotter
            et passer une nuit avec miss multivers qui pue la patate (à vos risques et périls)
            Et tout cela bien-sûr pour une modique somme hé hé hé...<br></br>
            <br></br><br></br><br></br><br></br><br></br>
            Vous êtes encore là ?<br></br><br></br>
            Bon, alors on va vous présenter l'équipe qui a construit ce site:<br></br>
            <div>{ImageTeam()}</div>
            Rémi Samson, Joshua Dupin, <br></br>Jonathan Rilos, David Tharot,
            <br></br> et Fabrice Dupont.
            <br></br><br></br><br></br>
            Merci à tous ceux qui nous ont apporté leur aide.<br></br><br></br>
            Et merci à vous d'avoir lu jusqu'au bout ! ;-)
          </p>
          <p>
            
          </p>
          
        </div>
      </div>
    </section></>
  );
};
export default Page3;
