import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import naverLogo from '../../images/naverlogo.svg';

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
        width: 5%;
        height: 37.5%;
        margin: 4% 0 4% 5%;
        background-color: #5ab133;
    }
    span.buttonText {
        vertical-align: middle;
        width: 40%;
        height: 40%;
        margin: 2% 0 2% 22%;
        font-family: 'Noto Sans KR';
        font-size: 14px;
        font-weight: bold;
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

export default NaverButton;