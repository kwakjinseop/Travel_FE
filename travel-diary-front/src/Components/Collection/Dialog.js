import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(51, 51, 51, 0.6);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const DialogBlock = styled.div`
  width: 328px;
  height: 188px;
  padding: 10px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const DetailButton = styled.button`
  width: 65px;
  height: 16px;
  background: #ffffff;
  border: none;
  outline: none;
  color: #000000;
  cursor: pointer;
  font-family: 'Noto Sans KR';
  font-size: 14px;
`;

function Dialog() {
  const local = [
    '강남구',
    '강동구',
    '강서구',
    '강북구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '동대문구',
    '도봉구',
    '동작구',
    '마포구',
    '서대문구',
    '성동구',
    '성북구',
    '서초구',
    '송파구',
    '영등포구',
    '용산구',
    '양천구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ];
  return (
    <DarkBackground>
      <DialogBlock>
        {local.map((name, index) => (
          <DetailButton key={index} onClick={() => alert(name)}>
            {name}
          </DetailButton>
        ))}
      </DialogBlock>
    </DarkBackground>
  );
}

export default React.memo(Dialog);
