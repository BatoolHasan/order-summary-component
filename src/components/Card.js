import styled from "styled-components";
import hero from '../images/illustration-hero.svg';
import musicIcon from '../images/icon-music.svg'
const StyledCard = styled.div`
border-radius: 20px;
box-shadow:5px 5px 5px hsl(224deg 23% 55% / 18%);
overflow:hidden;
background-color:${props=>props.theme.VeryPaleBlue};
justify-content:center;
align-items:center;
max-width:450px;
@media only screen and (max-width: 600px) {
    &{
        max-width:400px;
    }
}
@media only screen and (max-width: 440px) {
    &{
        max-width:330px;
    }
}
`;

const StyledHero=styled.div`
width:100%;
`;
const OrderSummary = styled.div`
padding: 3em;
display:grid;
grid-template-columns:1fr;
row-gap:1.5em;
@media only screen and (max-width: 440px) {
    &{
        padding: 1.5em;
    }
}
`;
const StyledH1 = styled.h1`
color:${props=>props.theme.darkBlue};
text-align:center;
font-size:1.5em;
margin:0;
`;
const StyledParagraph = styled.p`
color:${props=>props.theme.DesaturatedBlue};
text-align:center;
margin:0;
line-height:1.5;
`;

const StyledPlan = styled.div`
background-color:hsl(225deg 100% 94% / 36%);
border-radius:7px;
padding:0.8em 1.3em;
display: flex;
`;

const StyledIcon = styled.div`
width:fit-content;
display:flex;
justify-content:center;
align-items:center;
`;

const StyledPlanContainer = styled.div`
display:grid;
grid-template-columns:1fr;
margin-left:1em;
margin-right:auto;

`;
const StyledText = styled.span`
color:${props=>props.theme.DarkBlue};
font-weight:bold;
@media only screen and (max-width: 440px) {
    &{
        font-size:0.8em;
    }
}
`;

const StyledSubText = styled.span`
color:${props=>props.theme.DesaturatedBlue};
@media only screen and (max-width: 440px) {
    &{
        font-size:0.8em;
    }
}
`;

const StyledLink = styled.button`
color:${props=>props.theme.BrightBlue};
border:none;
text-decoration:underline;
background-color:transparent;
cursor:pointer;
font-weight:bold;
transition: 0.3s;
&:hover{
    color:hsl(245deg 75% 52% / 68%);;
}
`;
const StyledActionButton = styled.button`
background-color:${props=>props.theme.BrightBlue};
border:none;
border-radius:7px;
color:${props=>props.theme.VeryPaleBlue};
padding:1em 0.5em;
font-family: 'Red Hat Display', sans-serif;
font-weight:bold;
box-shadow:5px 9px 12px hsl(245deg 75% 52% / 17%);
cursor:pointer;
transition: 0.3s;
&:hover{
    background-color:hsl(245deg 75% 52% / 68%);
}
`;

const StyledCancelLink = styled.button`
cursor:pointer;
font-weight:bold;
color:${props=>props.theme.DesaturatedBlue};
border:none;
background-color:transparent;
transition: 0.3s;
&:hover{
    color:${props=>props.theme.DarkBlue};
}
`;
const Card = ()=>{

    return (
        <StyledCard>
            <StyledHero>
                <img src={hero} alt="hero" style={{width:"100%"}}/>
            </StyledHero>
            <OrderSummary>
                <StyledH1>Order Summary</StyledH1>
                <StyledParagraph>You can now listen to millions of songs, audiobooks, and podcasts on any 
    device anywhere you like!</StyledParagraph>
                <StyledPlan>
                    <StyledIcon><img src={musicIcon} alt="music icon"/></StyledIcon>
                    <StyledPlanContainer>
                        <StyledText>Annual Plan</StyledText>
                        <StyledSubText>$59.99/year</StyledSubText>
                    </StyledPlanContainer>
                    <StyledLink>Change</StyledLink>
                </StyledPlan>
                <StyledActionButton>Proceed to Payment</StyledActionButton>
                <StyledCancelLink>Cancel Order</StyledCancelLink>
            </OrderSummary>
        </StyledCard>
    );
}
export default Card;