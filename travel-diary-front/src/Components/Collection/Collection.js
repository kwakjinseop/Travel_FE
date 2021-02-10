import React from 'react';
import styled from 'styled-components';

const CollectionDiv = styled.div`
  width: 30%;
  margin: 0% 1% 5% 1%;
  padding: 10px;
  display: inline-block;
  background-color: rgb(247, 246, 250);
  border: 1px solid lightgrey;
  border-radius: 3%;
`;

function Collection(props) {
  return (
    <CollectionDiv>
      <h4>{props.item.date}</h4>
    </CollectionDiv>
  );
}

export default Collection;
