import { useState, useEffect } from "react"

const Movies = ({ filmURLs }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMoveNames()
  }, [filmURLs])

  const getMoveNames = async () => {
    setIsLoading(true)
    const films =
    await Promise.all(filmURLs.map(async url => {
      let res = await fetch(url)
      res = await res.json()
      return res.title;
    }))

    setIsLoading(false)
    setMovies(films)
  }

  return (
    <div style={{marginLeft: '200px'}}>
      <h4>Movies</h4>
      {isLoading ? 'Loading Movies...' : movies.map((movie, index) =>
        <div key={index}>{movie}</div>
        )}
    </div>
  )
}

export default Movies
