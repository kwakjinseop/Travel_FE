import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;
const slideUp = keyframes`
    from { transform: translateY(200px); }
    to { transform: translateY(0px); }
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
  width: 210px;
  height: 125px;
  padding-top: 1%;
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Noto Sans KR';
  h4 {
    font-size: 18px;
    margin: 0;
  }
  h5 {
    margin: 5% 0 5% 0;
    font-size: 14px;
    font-weight: 500;
  }

  hr {
        width: 100%;
        height: 1%;
        border: 0;
        border-color: rgba(0, 0, 0, 0);
        background-color: #cacaca;
    }
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ButtonGroup = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
        border: 0;
        outline: 0;
        width: 49%;
        font-family: 'Noto Sans KR';
        font-weight: bold;
        background-color: white;
        color: #828282;
        cursor: pointer;
        &:hover {
            color: skyblue;
        }
    }
    hr {
        width: 30%;
        height: 1%;
        border: 0;
        border-color: rgba(0, 0, 0, 0);
        transform: rotate(90deg);
        background-color: #cacaca;
    }
`;

const CompleteButton = styled.button`
    display: outline;
    border: 0;
    outline: 0;
    font-family: 'Noto Sans KR';
    font-weight: bold;
    background-color: white;
    color: #828282;
    cursor: pointer;
    &:hover {
            color: #56ccf2;
    }
`;


function RecordDialog({ children, complete, visible, onConfirm, onCancel }) {
    if (!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <h4>알림</h4>
                <h5>{children}</h5>
                <hr />
                { complete ? 
                <CompleteButton onClick={onConfirm}>확인</CompleteButton> 
                : <ButtonGroup>
                <button onClick={onCancel}>아니오</button><hr /><button onClick={onConfirm}>네</button>
                </ButtonGroup> }
            </DialogBlock>
        </DarkBackground>
    );
}

export default RecordDialog;