import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import kakaoLogo from '../../images/kakaologo.svg';

const KakaoBtn = styled.button`
  width: 296px;
  height: 40px;
  background-color: #f6e24b;
  border: 0;
  outline: 0;
  border-radius: 10px;
  margin-top: 25%;
  text-align: left;

  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }

  img.icon {
    vertical-align: middle;
    display: inline-block;
    width: 7%;
    height: 60%;
    margin: 3% 0 2.5% 2%;
    background-color: #f6e24b;
  }
  span.buttonText {
    vertical-align: middle;
    width: 49%;
    height: 40%;
    margin: 2% 0 2% 18%;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: bold;
    letter-spacing: normal;
    color: #000000;
  }
`;

function KakaoButton({ history }) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const kakaoFetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true);
      const response = await axios.get('/users/login/kakao');
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return (
    <a href="/users/login/kakao">
      <KakaoBtn onClick={kakaoFetchUsers}>
        <img src={kakaoLogo} alt="kakao" className="icon" />
        <span className="buttonText">카카오톡으로 로그인하기</span>
      </KakaoBtn>
    </a>
  );
}

export default KakaoButton;
