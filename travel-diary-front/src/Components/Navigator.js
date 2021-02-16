import React from 'react';
import styled from 'styled-components';

const NavigatorBlock = styled.div`
  width: 100%;
  height: 8.6%;
  position: relative;
  margin: 0px;
  object-fit: contain;
  button.home {
    width: 25%;
    height: 100%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  button.write {
    width: 25%;
    height: 100%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  button.see {
    width: 25%;
    height: 100%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  button.myPage {
    width: 25%;
    height: 100%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

function Navigator() {
  return (
    <NavigatorBlock>
      <button className="home">홈</button>
      <button className="write">기록적기</button>
      <button className="see">기록보기</button>
      <button className="myPage">마이페이지</button>
    </NavigatorBlock>
  );
}

export default Navigator;
