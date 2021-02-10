import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// 하단 네비게이터
import Navigator from '../Navigator';

import data from '../Data/CollectionData';
import Collection from './Collection';
// 화면에서 사용되는 이미지
import Seoul from '../../images/seoul.png';
import Write from '../../images/Write.png';
import Location from '../../images/Location.png';
import Like from '../../images/heart.png';
import Exit from '../../images/logout.png';
import Point from '../../images/point.png';
import Search from '../../images/search.png';
import Dialog from './Dialog';

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
  background: white;
  border: none;
  outline:none;
  margin: 0% 0% 2.7% 30%;
  img. SearchBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: #f6e24b;
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
    margin: 0% 0% 0% 0%;
    font-size: 30px;
  }
  span {
    margin: 4% 30% 0% 2%;
    font-size: 15px;
  }
`;

const PointBtn = styled.button`
  background: white;
  border: none;
  outline:none;
  margin: 1% 0% 0% 3%;
  img. PointBtn {
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
  outline:none;
  img. WriteBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: #f6e24b;
`;

const DetailInfoDiv = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    margin: 1% 30% 2% 5%;
    font-weight: normal;
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
  outline:none;
  img. ExitBtn {
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    background-color: #f6e24b;
`;
// margin 상 우 하 좌 = > 기억하기!
const ItemDiv = styled.div`
  margin: 4% 0% 0% 15%;
`;

function CollectDetail() {
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
  return (
    <MainPageBlock>
      <HeadBlock>
        <BackBtn></BackBtn>
        <HeadText>기록 보기</HeadText>
        <SearchBtn>
          <img src={Search} alt="SearchBtn" className="SearchBtn" />
        </SearchBtn>
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
            <h5>Jonoro</h5> <span>종로구</span>
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

export default CollectDetail;
