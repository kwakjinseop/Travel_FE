import styled from 'styled-components';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';
import travel from '../../images/Travel.svg';

const LoginPageBlock = styled.div`
    width: 360px;
    height: 760px;
    border: solid 3px #c9c9c9;
    background-color: #ffffff;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoImageBlock = styled.div`
    width: 26%;
    height: 13%;
    border-radius: 10px;
    background: #6fcf97;
    margin-top: 35%;
`;

const LogoBlock = styled.div`
    width: 24%;
    height: 5%;
    margin-top: 5%;
`;

const Wrapper = styled.div`
    & + & {
        margin-top: 4%;
    }
`;

function LoginPage() {

    return (
        <LoginPageBlock>
            <LogoImageBlock>
            <img src="" alt="logo"/>
            </LogoImageBlock>
            <LogoBlock><img src={travel} alt="travel"/></LogoBlock>
            <Wrapper>
            <KakaoButton></KakaoButton>
            </Wrapper>
            <Wrapper>
            <NaverButton></NaverButton>
            </Wrapper>
            <Wrapper>
            <GoogleButton></GoogleButton>
            </Wrapper>
        </LoginPageBlock>
    );
}

export default LoginPage;