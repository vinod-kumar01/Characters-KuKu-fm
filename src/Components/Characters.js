import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCharacters('https://swapi.dev/api/people');
  }, [])

  const getCharacters = (url) => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoading(false);
          setData(data);
        },
        (error) => {
          setError(true);
          setIsLoading(false);
          console.log(error);
        }
      )
  }

  const renderCharacter = (ch) => <div
    onClick={() => window.open(`/details/${btoa(ch.url)}`)}
    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
  >
    <h4 style={{ marginRight: '20px' }}>Name:</h4>{ch.name}
  </div>

  const renderPreviousNext = () => <div
    style={{ display: 'flex', justifyContent: 'end', textDecoration: 'underline' }}>
    {data.previous ?
      <div
        style={{ margin: '8px 20px', cursor: 'pointer' }}
        onClick={() => getCharacters(data.previous)}
      >previous</div> : null}
    {data.next ?
      <div
        style={{ margin: '8px 100px 0 0', cursor: 'pointer' }}
        onClick={() => getCharacters(data.next)}
      >next</div> : null}
  </div>

  return (
    <div>
      <h1>Characters</h1>
      <div style={{ height: '70vh', overflow: 'scroll' }}>
        {isLoading ? 'Loading...' :
          data.results ? data.results.map(ch =>
            renderCharacter(ch)
          ) : error ? 'an error occurred while fetching data from server' : 'No Results Found'}
      </div>
      {renderPreviousNext()}
    </div>
  )
}

export default Characters
