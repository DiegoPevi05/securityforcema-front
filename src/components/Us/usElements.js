import styled from 'styled-components';

export const UsComponentContainer = styled.div`
  width:100%;
  height:50vh;
  background:var(--Primary);
  position:relative;

  @media screen and (max-width: 480px){
    height:70vh;
  }
`

export const UsWrapper = styled.div`
  height:100%;
  width:100%;
  display:grid;
  grid-template-columns:0.6fr 0.4fr;
  grid-template-rows:50vh;
  grid-template-areas:"content image";
  transition:all 0.8s ease-in-out;


  @media screen and (max-width: 768px){
    transition 0.8s all ease;
    grid-template-columns:100%;
    grid-template-rows:100%;
    grid-template-areas:"content";
  }
  @media screen and (max-width: 480px){
    transition 0.8s all ease;
    grid-template-columns:100%;
    grid-template-rows:100%;
    grid-template-areas:"";
  }
`
export const UsColumn1 = styled.div`
  grid-area:content;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  @media screen and (max-width: 480px){
    padding:5%;
  }
`
export const UsColumn2 = styled.div`
  grid-area:image;
  width:100%;
  height:100%;
  background:url(${props => props.imgsrc});
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const Header = styled.h1`
  text-align:center;
  font-family:var(--Text-Family-Oswald);
  color:var(--Secondary);

  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    font-size:4vh;
  }
` 
export const TextContent = styled.h2`
  padding:5% 5%;
  text-align:center;
  color:var(--white);
  @media screen and (max-width: 480px){
    font-size:2.2vh;
  }

`
export const SecurityShieldComponent = styled.img`
  width:80%;
  color:var(--white);
`
