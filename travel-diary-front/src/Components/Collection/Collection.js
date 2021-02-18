import React from 'react';
import styled from 'styled-components';

const CollectionDiv = styled.button`
  width: 45%;
  height: 216px;
  margin: 0% 5% 5% 0;
  display: inline-block;
  background-color: gray;
  border: 0;
  outline: 0;
  border-radius: 5%;
  cursor: pointer;
  h4 {
    font-family: "Noto Sans KR";
    margin: 70% 0 0 5%;
    font-size: 32px;
    text-align: left;
    width: 50%;
    color: white;
  }
`;

function Collection(props) {
  return (
    <CollectionDiv>
      <h4>{props.item.date}</h4>
    </CollectionDiv>
  );
}

export default Collection;
