import styled, {keyframes} from 'styled-components';
import {FaWindowClose} from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageContent = styled.div`

  display: grid;
  max-width: 100%;
  margin: 0 auto;

  animation: ${fadeIn} 800ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  
  > * + * {
    margin-top: 1rem;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  min-height:70vh;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
  



  @media (min-width: 600px) {
    height: 350px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: none;
    background-image:url(${props => props.imgsrc});
    background-position:center;
  }
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
  }  

  //Media Query
  @media (hover: hover) and (min-width: 600px) {
    &:after {
      transform: translateY(0);
    }
    
    ${Content} {
      transform: translateY(calc(100% - 4.5rem));
      
      > *:not(.title) {
        opacity: 0;
        transform: translateY(1rem);
        transition:
          transform 700ms cubic-bezier(0.19, 1, 0.22, 1),
          opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
    
    &:hover,
    &:focus-within {
      align-items: center;

      &:before { transform: translateY(-4%); }
      &:after { transform: translateY(-50%); }

      ${Content} {
        transform: translateY(0);

        > *:not(.title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: calc(700ms / 8);
        }
      }
    }
    
    &:focus-within {
      &:before,
      &:after,
      .content,
      .content > *:not(.title) {
        transition-duration: 0s;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
`;
export const Copy = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
`;
export const ButtonCard = styled.button`
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  text-decoration:none;
  color: white;
  background-color: var(--Primary);
  border: none;
  outline:none;
  
  &:hover {
    background-color: var(--Secondary);
    color:var(--white);
  }
  
  &:focus {
    outline: 1px dashed yellow;
    outline-offset: 3px;
  }

`;



const SlideDown = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const CardContentInfo = styled.div`
  width:100%;
  height:70vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  background:linear-gradient(90deg,rgba(165,204,43,0.4),rgba(0,0,0,0.7)), url(${props => props.imgsrc});
  background-repeat:no-repeat;
  background-size:cover;
  animation: ${fadeIn} 800ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;

  @media screen and (max-width:480px){
    height:100vh;
  }
`
export const ExitIcon = styled(FaWindowClose)`
  position:absolute; 
  top:3vh;
  right:4vw;
  font-size:5vh;
  transition 0.8s all ease;
  cursor:pointer;
  color:var(--Primary);
  
  &:hover{
    color:red;
    transition 0.8s all ease;
  }

  @media screen and (max-width:480px){
    font-size:5vh;
    top:10vh;
    right:5vw;
  }
`
export const TitleCard = styled.h1`
  font-family:var(--Text-Family-Oswald);
  font-size:5vh;
  color:var(--Primary);
  animation: ${SlideDown} 1000ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;

  @media screen and (max-width:480px){
    font-size:4vh;
    text-align:center;
  }
`;
export const ContentCard = styled.h4`
  font-size:2vh;
  text-align:justify;
  padding:40px 20%;
  color:white;
  animation: ${SlideDown} 1000ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;

  @media screen and (max-width:480px){
    font-size:1.8vh;
    padding:40px 5%;
  }
`;
export const SubtitleCard = styled.h2`
  font-size:4vh;
  color:var(--Primary);
  animation: ${SlideDown} 1000ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;

  @media screen and (max-width:480px){
    font-size:2vh;
    text-align:center;
  }
`;



