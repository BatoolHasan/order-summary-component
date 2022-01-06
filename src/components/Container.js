import styled from "styled-components";
import backgroundDesktop from '../images/pattern-background-desktop.svg';
import backgroundMobile from '../images/pattern-background-mobile.svg';
const StyledContainer = styled.div`
width:100%;
height:100vh;
background:url(${backgroundDesktop}) no-repeat, ${props=>props.theme.PaleBlue};
background-size contain;
position:relative;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width: 600px) {
    &{
        height:100%;
        padding-top: 5em
    }
}
@media only screen and (max-width: 375px) {
    &{
        background:url(${backgroundMobile}) no-repeat, ${props=>props.theme.PaleBlue};
    }
}

`;
const Container = ({children})=>{
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}
export default Container;
