import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigator from '../Navigator';
import Seoul from '../../images/seoul.png';
import Write from '../../images/Write.png';
import Location from '../../images/Location.png';
import Like from '../../images/heart.png';
import Exit from '../../images/logout.png';
import Sun from '../../images/sun.png';
import Dialog from './Dialog';

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
  width: 360px;
  height: 56px;
  padding-top: 8px;
  display: flex;
  background-color: #ffffff;
  img.travel {
    display: inline-block;
    width: 88px;
    height: 40px;
    margin-left: 128px;
    object-fit: contain;
    text-align: left;
  }
  button.moreBtn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    margin-left: 88px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

const BackBtn = styled.button`
  width: 6px;
  height: 12px;
  margin: 4% 0% 0% 3%;
`;

const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  margin: 2% 0% 0% 35%;
  object-fit: contain;
`;

const HeadText = styled.div`
  width: 57px;
  height: 19px;
  margin: 3% 0% 1% 33%;
  font-family: Roboto;
  font-size: 16spx;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #dee2e6;
  line-height: normal;
  letter-spacing: -1.6px;
  text-align: left;
  color: var(--test-color-828282);
`;

const Background = styled.div`
  width: 360px;
  height: 638px;
  position: relative;
  background-image: linear-gradient(to bottom, #fcfcff, #d0ffff);
`;

const ImageDiv = styled.div`
  img.SeoulImg {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    height: 350px;
    position: absolute;
    margin: 0 auto;
    background-color: white;
  }
`;

const InfoDiv = styled.div`
  width: 360px;
  height: 468px;
  position: relative;
  margin: 60% 0% 0% 0%;
  border-radius: 16px;
  padding: 21px 0.1px 0 0;
  background-color: #ffffff;
`;

// margin 상 우 하 좌
const InfoHead = styled.div`
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    margin: 0% 3% 0% 6%;
    font-size: 30px;
  }
`;

const LocationBtn = styled.button`
  background: white;
  border: none;
  margin: 0% 0% 0% 38%;
  img. LocationBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0% 20% 0% 0%
    background-color: #f6e24b;
  }
`;

const WriteBtn = styled.button`
  background: white;
  border: none;
  img. WriteBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: #f6e24b;
`;

const InfoMid = styled.div`
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    margin: 0% 3% 0% 6%;
    font-size: 18px;
  }
  span {
    margin: 0.5% 0% 0% 2%;
    font-size: 15px;
    color: #ced4da;
  }
`;

const InfoCat = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 2% 16% 0% 0%;
  justify-content: space-evenly;
  span {
    font-size: 13px;
  }
`;

const InfoData = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 1.5% 14% 0% 0%;
  justify-content: space-evenly;
  h1 {
    margin: 0% 0% 0% 0%;
    font-size: 25px;
  }
`;

const BtnsDiv = styled.div`
  display: flex;
`;

const LikeBtn = styled.button`
  background: white;
  border: none;
  margin: 0% 0% 0% 7%;
  img. LikeBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: #f6e24b;
`;
const ExitBtn = styled.button`
  background: white;
  border: none;
  img. ExitBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: #f6e24b;
`;

function MainPage() {
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
  return (
    <MainPageBlock>
      <HeadBlock>
        <BackBtn></BackBtn>
        <HeadText>기록 보기</HeadText>
        <SearchBtn></SearchBtn>
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
              <h1>23개</h1>
            </span>{' '}
            <span>
              <h1>60도</h1>
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
        </InfoDiv>
      </Background>
      <Navigator />
    </MainPageBlock>
  );
}

export default MainPage;
