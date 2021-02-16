import React from 'react';
import styled from 'styled-components';
import Navigator from './Navigator';
import travel from '../images/Travel.svg';
import more from '../images/more.svg';
import direct from '../images/directButton.svg';

const MainPageBlock = styled.div`
  width: 360px;
  height: 760px;
  border: solid 3px #c9c9c9;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadBlock = styled.div`
  width: 100%;
  height: 6.4%;
  padding-top: 5%;
  background-color: #ffffff;
  img.travel {
    display: inline-block;
    margin-left: 35%;
    object-fit: contain;
  }
  button.moreBtn {
    display: inline-block;
    background-color: #ffffff;
    margin-left: 25%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 83%;
  background-image: linear-gradient(to bottom, #fcfcff, #d0ffff);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBlock = styled.div`
  width: 86.6%;
  height: 6%;
  margin: 3% 0 0 0;
  padding: 0 0 0 3%;
  border-radius: 20px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  button.searchBtn {
    border: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
  input.search {
    width: 90%;
    height: 99%;
    margin-left: 1%;
    padding-top: 1%;
    font-size: 12px;
    border: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const MapBlock = styled.div`
  width: 90%;
  height: 85%;
  margin-top: 7%;
  object-fit: contain;
  box-shadow: 7px 7px 12px 0 #b2d6e1;
`;

const DirectBtn = styled.button`
  margin-left: 75%;
  object-fit: contain;
  border: 0;
  outline: 0;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
  img.directImg {
    position: relative;
  }
`;

function MainPage() {
  return (
    <MainPageBlock>
      <HeadBlock>
        <img src={travel} alt="travel" className="travel" />
        <button className="moreBtn">
          <img src={more} alt="more" className="more-vertical" />
        </button>
      </HeadBlock>
      <Background>
        <SearchBlock>
          <button className="searchBtn">s</button>
          <input type="search" placeholder="나의 여행 찾아보기" className="search" />
        </SearchBlock>
        <MapBlock></MapBlock>
        <DirectBtn>
          <img src={direct} alt="direct" className="directImg" />
        </DirectBtn>
      </Background>
      <Navigator />
    </MainPageBlock>
  );
}

export default MainPage;
