import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import naverLogo from '../../images/naverlogo.svg';
import { withRouter } from 'react-router-dom';

const NaverBtn = styled.div`
    width: 296px;
    height: 40px;
    background-color: #5ab133;
    border: 0;
    outline: 0;
    border-radius: 10px;
    text-align: left;
    
    cursor: pointer;
    &:hover {
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }

    img.icon {
        vertical-align: middle;
        display: inline-block;
        width: 15.1px;
        height: 15px;
        margin: 0 auto;
        margin-left: 14px;
        margin-top: 12px;
        margin-bottom: 13px;
        background-color: #5ab133;
    }
    span.buttonText {
        vertical-align: middle;
        width: 120px;
        height: 16px;
        margin: 0 auto;
        margin-left: 56.9px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-family: 'Noto Sans KR';
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
    }
`;

function NaverButton({ history }) {
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        return () => setLoading(false); 
    }, []);

    const naverFetchUsers = async () => {
        try {
            setUsers(null);
            setError(null);
            setLoading(true);
            const response = await axios.get(
                '/users/login/naver'
            );
            setUsers(response.data);
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };
    

    return (
        <a href='/users/login/naver' style={{textDecoration:"none"}}>
        <NaverBtn onClick={naverFetchUsers}>
            <img src={naverLogo} className="icon" alt="naver" />
            <span className="buttonText">네이버로 로그인하기</span>
        </NaverBtn>
        </a>
    );
}

export default withRouter(NaverButton);