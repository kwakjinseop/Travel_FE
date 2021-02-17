import React from 'react';
import styled from 'styled-components';
import Navigator from './Navigator';
import Back from '../images/back.svg';
import Search from '../images/search.svg';
import Like from '../images/heart.png';
import Exit from '..//images/logout.png';
import Sun from '../images/sun.png';
import Write from '../images/directwrite.svg';
import Location from '../images/point.png';
import { withRouter } from 'react-router-dom';

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
  margin-top: 10%;
  object-fit: contain;
  box-shadow: 7px 7px 12px 0 #b2d6e1;
`;

const DataBlock = styled.div`
  width: 82%;
  height: 30%;
  margin-top: 10%;
  padding: 2%;
  object-fit: contain;
  background-color: white;
  border : 5px solid #f2994a;
  border-radius: 20px;
`;

const InfoHead = styled.div`
  display: flex;
  font-family: 'Noto Sans KR';
  h5 {
    color: #4f4f4f;
    margin: 0 0 0 0;
    font-size: 32px;
    font-weight: normal;
  }
`;

const LocationBtn = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: none;
    outline:none;
    margin: 4% 0 0 1%;
    cursor: pointer;
    img {
      width: 95%;
    }
`;

const WriteBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline:none;
  margin: 0 0 0 45%;
  cursor: pointer;
  img {
      width: 90%;
  }
`;

const InfoMid = styled.div`
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    color: #4f4f4f;
    margin: 0% 2% 0% 3%;
    font-size: 17px;
  }
  span {
    margin: 1.5% 0 0 0;
    font-size: 13px;
    font-weight: normal;
    color: #bdbdbd;
  }
`;

const InfoCat = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 2% 10% 0 0;
  justify-content: space-evenly;
  span {
    font-family: 'Noto Sans KR';
    font-size: 14px;
    color: #828282;
  }
`;

const InfoData = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 3% 10% 0% 0%;
  justify-content: space-evenly;
  h1.record {
    margin: 0% 0% 0% 0%;
    font-size: 25px;
    color: #6fcf97;
  }
  h1.weather {
    margin: 0% 0% 0% 0%;
    font-size: 25px;
    color: #f2994a;
  }
`;

const BtnsDiv = styled.div`
  display: flex;
`;

const LikeBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  margin: 0 0 0 3%;
  cursor: pointer;
`;
const ExitBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  cursor: pointer;
`;

function SelectArea({ history }) {

    const goBack = () => history.goBack();
    const goDetail = () => history.push('/collection');

    return (
        <MainPageBlock>
            <HeadBlock>
                <button className="backBtn" onClick={goBack}><img src={Back} alt="backBtn" className="backBtn" /></button>
                <span>지도 보기</span>
                <button className="searchBtn"><img src={Search} alt="searchBtn" className="searchBtn" /></button>
            </HeadBlock>
            <Background>
                <MapBlock></MapBlock>
                <DataBlock>
                    <InfoHead>
                        <LocationBtn onClick={goDetail}>
                        <img src={Location} alt="locationBtn" className="LocationBtn" />
                        </LocationBtn>
                        <h5>Seoul</h5>
                        <WriteBtn>
                        <img src={Write} alt="WriteBtn" className="WriteBtn" />
                        </WriteBtn>
                        <br />
                    </InfoHead>
                    <InfoMid>
                        <h5>서울특별시</h5> <span className="MidSpan">최근방문 2021년 1월 20일</span>
                        <p></p>
                    </InfoMid>
                    <InfoCat>
                        <span>나의 여행기록</span> <span>나와의 온도</span> <span>오늘의 날씨</span>
                    </InfoCat>
                    <InfoData>
                        <span>
                        <h1 className="record">23개</h1>
                        </span>{' '}
                        <span>
                        <h1 className="weather">60도</h1>
                        </span>{' '}
                        <span>
                        <img src={Sun} alt="Sun" />
                        </span>
                    </InfoData>
                    <BtnsDiv>
                        <LikeBtn>
                        <img src={Like} alt="LikeBtn" className="LikeBtn" />
                        </LikeBtn>
                        <ExitBtn>
                        <img src={Exit} alt="ExitBtn" className="ExitBtn" />
                        </ExitBtn>
                    </BtnsDiv>
                </DataBlock>
            </Background>
            <Navigator />
        </MainPageBlock>
    );
}

export default withRouter(SelectArea);