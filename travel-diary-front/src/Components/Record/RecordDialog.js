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
  position: absolute;
  width: 230px;
  height: 130px;
  padding: 10px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Noto Sans KR';

  h4 {
    margin: 0;
  }
  h5 {
      font-weight: 500;
  }
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4%;
    button {
        margin: 0;
        border: 0;
        outline: 0;
        width: 40%;
        font-family: 'Noto Sans KR';
        background-color: white;
        color: gray;
        cursor: pointer;
        &:hover {
            color: skyblue;
        }
    }
`;

const CompleteButton = styled.button`
    display: outline;
    margin: 0;
    border: 0;
    outline: 0;
    margin-top: 4%;
    font-family: 'Noto Sans KR';
    background-color: white;
    color: gray;
    cursor: pointer;
    &:hover {
            color: skyblue;
    }
`;


function RecordDialog({ children, complete, visible, onConfirm, onCancel }) {
    if (!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <h4>알림</h4>
                <h5>{children}</h5>
                { complete === 'false' ? <ButtonGroup><button onClick={onCancel}>아니오</button><button onClick={onConfirm}>네</button></ButtonGroup> : <CompleteButton onClick={onConfirm}>확인</CompleteButton>}
            </DialogBlock>
        </DarkBackground>
    );
}

export default RecordDialog;