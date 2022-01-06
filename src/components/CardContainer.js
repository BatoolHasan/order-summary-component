import styled from "styled-components";
import Card from './Card';
const StyledContainer = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;

`;
const CardContainer =(props)=>{
return (
    <StyledContainer>
        <Card/>
    </StyledContainer>
);
}
export default CardContainer;