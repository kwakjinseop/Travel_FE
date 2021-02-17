import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// 하단 네비게이터
import Navigator from '../Navigator';

import data from '../Data/CollectionData';
import Collection from './Collection';
// 화면에서 사용되는 이미지
import Seoul from '../../images/seoul.png';
import Write from '../../images/directwrite.svg';
import Like from '../../images/heart.png';
import Exit from '../../images/logout.png';
import Point from '../../images/point.png';
import Search from '../../images/search.svg';
import Back from '../../images/back.svg'
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
  background-image: linear-gradient(to bottom, #fcfcff, #d0ffff);
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
  padding: 5% 0 0 3%;
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
  font-weight: normal;
  h5 {
    margin: 0;
    font-size: 32px;
    color: #4f4f4f;
  }
  span {
    margin: 6% 0 0 2%;
    font-size: 16px;
    color: #4f4f4f;
  }
`;

const PointBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  margin: 4% 0 0 3%;
  img {
    width: 80%;
  }
`;

const WriteBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  margin: 0 0 0 25%;
  cursor: pointer;
`;

const DetailInfoDiv = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    margin: 1% 30% 2% 5%;
    font-weight: normal;
    font-size: 16px;
    color: #828282;
  }
  span {
    margin: 0.5% 0% 0% 0%;
    font-size: 15px;
    color: #6fcf97;
  }
`;

const BtnsDiv = styled.div`
  display: flex;
`;

const LikeBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  margin: 0% 0% 0% 3.5%;
`;
const ExitBtn = styled.button`
  background: white;
  border: none;
  outline:none;
`;
// margin 상 우 하 좌 = > 기억하기!
const ItemDiv = styled.div`
  margin: 4% 0% 0% 15%;
`;

function CollectDetail({ history }) {
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
            <PointBtn onClick={() => setOpen(true)}>
              {isOpen && <Dialog innerref={modalEl} />}
              <img src={Point} alt="PointBtn" className="PointBtn" />
            </PointBtn>
            <h5>Jongro</h5> <span>종로구</span>
            <WriteBtn>
              <img src={Write} alt="WriteBtn" className="WriteBtn" />
            </WriteBtn>
            <br />
          </InfoHead>
          <DetailInfoDiv>
            <h5>
              나의 여행 기록 &emsp;<span>6개</span>
            </h5>
          </DetailInfoDiv>
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

export default withRouter(CollectDetail);
