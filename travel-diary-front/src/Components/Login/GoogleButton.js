import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import googleLogo from '../../images/googlelogo.png';

const GoogleBtn = styled.button`
    width: 296px;
    height: 40px;
    background-color: #f2f2f2;
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
        width: 7%;
        height: 60%;
        margin: 2% 0 2% 2%;
        background-color: #f2f2f2;
    }
    span.buttonText {
        vertical-align: middle;
        width: 36%;
        height: 40%;
        margin: 3% 0 3% 25%;
        font-family: 'Noto Sans KR';
        font-size: 14px;
        font-weight: bold;
        letter-spacing: normal;
        color: #4f4f4f;
    }
`;

function GoogleButton({ history }) {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        return () => setLoading(false); 
    }, []);

    const googleFetchUsers = async () => {
        try {
            setUsers(null);
            setError(null);
            setLoading(true);
            const response = await axios.get(
                '/users/login/google'
            );
            setUsers(response.data);
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };
    
    return (
        <a href='/users/login/google'>
        <GoogleBtn onClick={googleFetchUsers}>
            <img src={googleLogo} className="icon" alt="google" />
            <span className="buttonText">구글로 로그인하기</span>
        </GoogleBtn>
        </a>
    );
}

export default GoogleButton;