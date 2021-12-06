import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Movies from "./Movies";
import RenderDetail from "./RenderDetail";

const CharacterDetails = props => {
  const [character, setCharacter] = useState({});
  const [films, setFilms] = useState();
  const [isLoding, setIsLoading] = useState(true);

  const { chURL } = useParams();

  useEffect(() => {
    getChDetails()
  }, [])

  const getChDetails = () => {
    setIsLoading(true)
    fetch(`${atob(chURL)}`)
      .then(res => res.json())
      .then(
        (data) => {
          setCharacter(data);
          data.films && setFilms(data.films)
          setIsLoading(false)
        },
        (error) => {
          console.log(error);
          setIsLoading(false)
        }
      )
  }

  return (
    <div>
      <h1>Character Details</h1>
      <div style={{display: "flex"}}>
      {isLoding ? 'Loading Details...':
        <div>
          <RenderDetail label={'Name'} value={character.name}/>
          <RenderDetail label={'Height'} value={character.height}/>
          <RenderDetail label={'Mass'} value={character.mass}/>
          <RenderDetail label={'Hair Color'} value={character.hair_color}/>
          <RenderDetail label={'Skin Color'} value={character.skin_color}/>
          <RenderDetail label={'Eye Color'} value={character.eye_color}/>
          <RenderDetail label={'Birth Year'} value={character.birth_year}/>
          <RenderDetail label={'Gender'} value={character.gender}/>
        </div>
      }
      {films ? <Movies
        filmURLs={films}
      /> : null}
      </div>
    </div>
  )
}

export default CharacterDetails
