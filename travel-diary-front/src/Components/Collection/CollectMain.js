import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// 하단 네비게이터
import Navigator from '../Navigator';

import data from '../Data/CollectionData';
import Collection from './Collection';
// 화면에서 사용되는 이미지
import Seoul from '../../images/seoul.png';
import Back from '../../images/back.svg';
import Write from '../../images/directwrite.svg';
import Location from '../../images/location.svg';
import Like from '../../images/heart.png';
import Exit from '../../images/logout.png';
import Sun from '../../images/sun.png';
import Search from '../../images/search.svg';
import Dialog from './Dialog';

import { withRouter } from 'react-router-dom';

// margin 상 우 하 좌 = > 기억하기!
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
  height: 638px;
  position: relative;
`;

const ImageDiv = styled.div`
  img.SeoulImg {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: white;
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  margin: 70% 0% 0% 0%;
  border-radius: 16px;
  padding: 5% 0 0 0;
  background-color: #ffffff;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

// margin 상 우 하 좌
const InfoHead = styled.div`
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    color: #4f4f4f;
    margin: 0 0 0 6%;
    font-size: 36px;
  }
`;

const LocationBtn = styled.button`
  background: white;
  margin: 4% 0 0 1%;
  border: none;
  outline:none;
  cursor: pointer;
`;

const WriteBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  margin: 0 0 0 40%;
  cursor: pointer;
`;

const InfoMid = styled.div`
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    color: #4f4f4f;
    margin: 0% 2% 0% 6%;
    font-size: 18px;
  }
  span {
    margin: 1.5% 0 0 0;
    font-size: 14px;
    font-weight: normal;
    color: #bdbdbd;
  }
`;

const InfoCat = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 2% 16% 0 0;
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
  margin: 3% 14% 0% 0%;
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
  margin: 0 0 0 5%;
  cursor: pointer;
`;
const ExitBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  cursor: pointer;
`;
// margin 상 우 하 좌 = > 기억하기!
const ItemDiv = styled.div`
  margin: 4% 0% 0% 15%;
`;

function CollectMain({ history }) {
  const [item, setItem] = useState(data);
  const [isOpen, setOpen] = useState(false);
  const modalEl = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (isOpen && (!modalEl.current || !modalEl.current.contains(target))) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const goBack = () => history.goBack();
  return (
    <MainPageBlock>
      <HeadBlock>
        <button className="backBtn" onClick={goBack}><img src={Back} alt="backBtn" className="backBtn" /></button>
        <span>기록 보기</span>
        <button className="searchBtn"><img src={Search} alt="searchBtn" className="searchBtn" /></button>
      </HeadBlock>
      <Background>
        <ImageDiv>
          <img src={Seoul} alt="Seoul" className="SeoulImg" />
        </ImageDiv>
        <InfoDiv>
          {/* 인포 헤드 :  서울, 버튼 2개 */}
          <InfoHead>
            <h5>Seoul</h5>
            <LocationBtn onClick={() => setOpen(true)}>
              {isOpen && <Dialog innerref={modalEl} />}
              <img src={Location} alt="locationBtn" className="LocationBtn" />
            </LocationBtn>
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
          <ItemDiv>
            {item.slice(0, 4).map((a, i) => {
              return <Collection item={item[i]} i={i} key={i} />;
            })}
          </ItemDiv>
        </InfoDiv>
      </Background>
      <Navigator />
    </MainPageBlock>
  );
}

export default withRouter(CollectMain);
