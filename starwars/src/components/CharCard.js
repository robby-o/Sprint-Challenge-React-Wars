import React from 'react';
import styled from 'styled-components';

function CharCard(props) {
  const StyledParagraph = styled.p`
    width: 10%;
    background-color: snow;
    display: flex;
    justify-content: center;
    opacity: 0.6;
    border-radius: 4px;
    font-weight: bold;
    color: DarkSlateGrey;
  `;
  return (
    <>
      <StyledParagraph>{props.name}</StyledParagraph>
    </>
  );
}

export default CharCard;
