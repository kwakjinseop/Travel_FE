import React, { useState, useEffect } from 'react';
import {Form} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Navigator from './Navigator.js';
import Contents from './Contents.js';
import calendar from '../../images/calendar.svg';
import checkCircle from '../../images/checkCircle.svg';
import chevronLeft from '../../images/chevronLeft.svg';
import frown from '../../images/frown.svg';
import angry from '../../images/angry.svg';
import meh from '../../images/meh.svg';
import smile from '../../images/smile.svg';
import happy from '../../images/happy.svg';
import Vector from '../../images/Vector.svg';
import type from '../../images/type.svg';
import bar from '../../images/bar.svg';
import mapPin from '../../images/mapPin.svg';

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
  height: 8%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackBtn=styled.button`
  width: 8%;
  height: 70%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const Title=styled.div`
  width: auto;
  height: auto;
  font-size: 18px;
  font-weight: 1000;
  text-shadow: 1px 1px 1px lightgrey;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
`;

const SaveBtn=styled.button`
  width: 8%;
  height: 70%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const RecordBlock=styled.div`
  width: 100%;
  height: 90%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(138,135,135,0.2) 0%,
   rgba(182,182,184,0.1) 2%,
   rgba(255,255,255,1) 100%);
`;

const FirstBlock=styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EmoticonBlock=styled.div`
  width:50%;
  padding: 3% 0% 0% 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FaceBtn=styled.button`
  height: 50%;
  width: 13%;
  margin: 3%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const DateBlock=styled.div`
  width:50%;
  padding: 3% 0% 0% 0%;
  display: flex;
  flex-direction: row;
`;

const DateBox=styled.div`
  width: 85%;
  padding: 4% 0% 0% 0%;
  display: flex;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 3% 0% 3% 0%;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    margin: 4% 3% 0% 0%;
    font-size: 13px;
    color: #bdbdbd;
  }
`;

const DateBtn=styled.button`
  height: 30%;
  width: 13%;
  margin: 3%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const SecondBlock=styled.input`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 3% 0% 3% 0%;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    padding: 2% 0% 0% 4%;
    font-size: 13px;
    color: #bdbdbd;
  }
`;

const ThirdBlock=styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgrey;
  border-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    margin: 4% 3% 0% 0%;
    font-size: 13px;
    color: #bdbdbd;
  }
`;

const PlaceBox=styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  padding: 0% 0% 0% 3%;
  button.PlaceBtn {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 2%;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

const PlaceBtn=styled.button`
  width: 90%;
  background-color: lightgrey;
  border: 0;
  outline: 0;
`;

const MapBtn=styled.button`
  width: 10%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const ContentsBox=styled.input`
  width: 100%;
  height: 90%;
  display: flex;
  border: 0;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  h5 {
    padding: 2% 0% 0% 4%;
    font-size: 13px;
    color: #bdbdbd;
  }
`;

const LastBlock=styled.div`
  width: 100%;
  height: 5%;
  padding: 0% 0% 0% 2%;
  display: flex;
  flex-direction: row;
  background-color: lightgrey;
`;

const TextBtn=styled.button`
  height: 70%;
  width: 6%;
  margin: 1%;
  display:flex;
  flex-direction: column;
  background-color: transparent;
  border:0;
  outline:0;
`;

const FontBtn=styled.button`
  height: 70%;
  width: 6%;
  margin: 1%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const ClipBtn=styled.button`
  height: 70%;
  width: 6%;
  margin: 1%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

function RecordPage() {
  return(
    <MainPageBlock>       
      <HeadBlock>             
        <BackBtn>
          <img src={chevronLeft} alt="BackBtn" className="BackBtn"/>
        </BackBtn>
        <Title>여행 기록하기</Title>
        <SaveBtn>
          <img src={checkCircle} alt="SaveBtn" className="SaveBtn"/>
          <form action="/diary/save" enctype="multipart/form-data" method="post">
            <div class="form-group">
            <input type="file" name="attachment" class="form-control-file" multiple />
            </div>
          <div>
          <Link to = "/diary/save">
            <button type="submit" class="btn btn-primary">Submit</button>
          </Link>
          </div>
          </form>
        </SaveBtn>
      </HeadBlock>
      <RecordBlock>
        <FirstBlock>
           <DateBlock>
            <DateBox>
              <h5>여행 시작일</h5>
              <DateBtn>  
               <img src={calendar} alt="DateBtn" className="DateBtn"/>              
              </DateBtn>              
            </DateBox>
          </DateBlock>
          <h5>~</h5>              
          <DateBlock>
            <DateBox>
              <h5>여행 종료일</h5>
              <DateBtn>  
               <img src={calendar} alt="DateBtn" className="DateBtn"/>              
              </DateBtn>              
            </DateBox>
          </DateBlock>
        </FirstBlock>
        <SecondBlock placeholder="제목을 입력하세요"></SecondBlock>
        <ThirdBlock>
          <PlaceBox>
            <PlaceBtn></PlaceBtn>  
            <MapBtn>
              <img src={mapPin} alt="MapBtn" className="MapBtn"/>
            </MapBtn>  
          </PlaceBox>  
      
          <div class="ui fitted divider"></div>
            <ContentsBox placeholder="내용을 입력하세요"></ContentsBox>
          <div class="ui fitted divider"></div>
          <EmoticonBlock>
            <FaceBtn>
            <img src={happy} alt="FaceBtn" className="FaceBtn"/>
            </FaceBtn>
            <FaceBtn>
            <img src={smile} alt="FaceBtn" className="FaceBtn"/>
            </FaceBtn>
            <FaceBtn>
            <img src={meh}alt="FaceBtn" className="FaceBtn"/>
            </FaceBtn>
            <FaceBtn>
            <img src={frown} alt="FaceBtn" className="FaceBtn"/>
            </FaceBtn>
            <FaceBtn>
            <img src={angry} alt="FaceBtn" className="FaceBtn"/>
            </FaceBtn>
          </EmoticonBlock>
        </ThirdBlock> 
      </RecordBlock>        
      <LastBlock>
          <TextBtn>
            <img src={bar} alt="TextBtn" className="TextBtn"/>
            <img src={bar} alt="TextBtn" className="TextBtn"/>
            <img src={bar} alt="TextBtn" className="TextBtn"/>
            <img src={bar} alt="TextBtn" className="TextBtn"/>
          </TextBtn>
          <FontBtn>
            <img src={type} alt="FontBtn" className="FontBtn"/>
          </FontBtn>
          <ClipBtn>
            <img src={Vector} alt="ClipBtn" className="ClipBtn"/>
          </ClipBtn>
      </LastBlock>
      <Navigator/>         
    </MainPageBlock>
    );
}

export default RecordPage;