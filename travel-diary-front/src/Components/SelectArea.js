import React from 'react';
import styled from 'styled-components';
import Navigator from './Navigator';
import Back from '../images/back.svg';
import Search from '../images/search.svg'

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
  button.backBtn {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 2%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  span {
    vertical-align: top;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -1.6px;
    color: #828282;
    background-color: #ffffff;
    margin: 0 0 0 30%;
  }
  button.searchBtn {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 28%;
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

const MapBlock = styled.div`
  width: 90%;
  height: 50%;
  margin-top: 7%;
  object-fit: contain;
  box-shadow: 7px 7px 12px 0 #b2d6e1;
`;

function SelectArea({ history }) {

    const goBack = () => history.goBack();

    return (
        <MainPageBlock>
            <HeadBlock>
                <button className="backBtn" onClick={goBack}><img src={Back} alt="backBtn" className="backBtn" /></button>
                <span>지도 보기</span>
                <button className="searchBtn"><img src={Search} alt="searchBtn" className="searchBtn" /></button>
            </HeadBlock>
            <Background>
                <MapBlock></MapBlock>
            </Background>
            <Navigator />
        </MainPageBlock>
    );
}

export default SelectArea;