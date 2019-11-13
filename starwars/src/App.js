import React, { useState, useEffect } from 'react';
import './App.css';
// import Container from './components/Container';
import axios from 'axios';
import CharCard from './components/CharCard';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState([]);

  useEffect(() => {
    axios
      .get(`https://lambda-swapi.herokuapp.com/api/people`)
      .then(response => {
        setNext(response.data.next);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('something is broken...', error);
      });
  }, []);

  const getMoreCharacters = givenNext => {
    axios.get(givenNext).then(response => {
      setNext(response.data.next);
      let moreCharacters = characters;
      moreCharacters.push(response.data.results);
      let flatCharacters = moreCharacters.flat();
      console.log(flatCharacters);
      setCharacters(flatCharacters);
    });
  };

  // if (next) {
  // getMoreCharacters(next);
  // }

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <StyledDiv className='entry'>
        {characters.map(character => {
          return (
            <CharCard
              key={character.name}
              name={character.name}
              next={next}
              getMoreCharacters={getMoreCharacters}
            />
          );
        })}
      </StyledDiv>
    </div>
  );
};

export default App;

// if (data.next) {
//   getDetail(data.next);
// } else {
//   console.log(names); // name1.innerText = names;
// }
