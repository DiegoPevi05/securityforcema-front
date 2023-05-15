import styled from 'styled-components';

export const ReasonsContainer = styled.div`
  height:100%;
  width:100%;
  transition:all 0.8s ease-in-out;
  background:var(--Secondary);
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    height:120vh;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    height:150vh;
  }
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    height:170vh;
  }
`;
export const ReasonsWrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0px 0px;
  transition:all 0.8s ease-in-out;

  
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    padding:40px 40px;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    padding:40px 0px;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    padding:40px 20px;
    height:100%;
  }
`;
export const ReasonsIconsWrapper = styled.div`
  width:90%;
  height:50%;
  display:grid;
  grid-gap:1vh;
  align-items:center;
  justify-content:center;
  padding:0px 0px 30px 0px;

  grid-template-columns:0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-rows:0.5fr 0.5fr;
  grid-template-areas:"a b c d" "e f g h";
  transition:all 0.8s ease-in-out;
  
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
  }

  @media screen and (max-width: 796px){
    margin-top:2vh;
    margin-bottom:2vh;
    grid-gap:2vh;
    padding:40px 0px;
    transition:all 0.8s ease-in-out;
    grid-template-columns:0.25fr 0.25fr 0.25fr;
    grid-template-rows:0.5fr 0.5fr 0.5fr;
    grid-template-areas:"a b c" "e f g" "d k h";
  }
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    grid-template-columns:0.25fr 0.25fr;
    grid-template-rows:0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-areas:"a b" "c e""f g" "d h";
  }

`;
export const ReasonsSquartle = styled.div`
  grid-area:${props => props.gridarea};
  align-self:center;
  justify-self:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:10%;
  height:150px;
  width:150px;
  text-align:center;
  font-size:1.3rem;
  color:var(--white);
  transition 0.8s all ease;

  &:hover {
    color:var(--Primary);
    transition 0.8s all ease;

    &::after{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  &::after {
    content: '';
    position: relative;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0px;
    left: 0;
    background-color: var(--Primary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;
export const ReasonsTextWrapper = styled.div`
  padding:0px 15vw;
  width:100%;
  height:30%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  transition:all 0.8s ease-in-out;
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    padding: 0 10px;
    justify-content:center;
  }

`;
export const TitleReasons = styled.h1`
  font-weight: 100;
  padding:0px 0px 20px 0px;
  text-align:center;
  transition:all 0.8s ease-in-out;
  color:var(--Primary);
  font-family:var(--Text-Family-Oswald);
  font-size:4vh;
  
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    font-size:4vh;
  }
`;
export const DescriptionReasons = styled.p`
  text-align:justify;
  font-size: 1.25rem;
  line-height: 1.5;
  color:var(--white);
  text-align:center;
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    font-size:2.2vh;
  }
`;

export const IconContainer = styled.div`
  font-size:4rem;
  color:var(--Primary);
`
