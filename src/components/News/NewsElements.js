import styled, {keyframes} from 'styled-components'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;
  background:var(--Secondary);
`
export const CardsWrapper = styled.div`
  height: 80vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content:space-around;
  //flex-wrap:nowrap;
  overflow:hidden;
`

const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  50% {
    opacity:0;
  }
  100% {
    opacity:0;
  }
`
const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`
export const Card = styled.div`
  position: relative;
  cursor: pointer;
  display:none;
  transition:2s;


  &.notActive{
    display:none;
    transition:all 0.2s ease-in-out;
    animation: ${fadeOut} 2000ms forwards;
    animation-direction:normal;
  }

  &.isActive{
    display:block;
    transition:all 0.2s ease-in-out;
    animation: ${fadeIn} 800ms forwards;
    animation-direction:normal;
  }
`
export const Face = styled.div`
  width: 21vw;
  height: 250px;
  transition: 0.5s;

  @media screen and ( max-width: 1065px){
    transition 0.8s all ease;
    width: 30vw;
  }

  @media screen and ( max-width: 769px){
    transition 0.8s all ease;
    width: 50vw;
  }

  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    height: 300px;
  }

  &.face1{
      position: relative;
      background:linear-gradient(90deg,rgba(165,204,43,0.4),rgba(0,0,0,0.7)), url(${props => props.imgsrc});
      background-position:center;
      background-size:cover;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
      transform: translateY(125px);
      text-align: center;
      @media screen and ( max-width: 480px){
        transform: translateY(150px);
      }
  }

  &.face2{
      position: relative;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      transform: translateY(-125px);

      @media screen and ( max-width: 480px){
        transform: translateY(-150px);
      }
  }
  .card:hover &.face1{
    background:var(--Primary);
    transform: translateY(0);
  }
  .card:hover &.face2{
    transform: translateY(0);
  }
`
export const HeaderCard = styled.h3`
  margin: 10px 0 0;
  padding:0 5vw;
  padding: 0;
  color: var(--Primary);
  text-align: center;
  font-size: 1.5em;
  
  .card:hover &{
    color:var(--white);
  }

  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    font-size: 1em;
    white-space:wrap;
  }
`
export const ImageCard = styled.img`
 max-width: 100px;
`
export const CardContent = styled.div`
  transition: 0.5s;
  opacity:0;
  ${Face}.face1 &{
   opacity:1;
  }
  .card:hover &{
    opacity: 1;
  }
`

export const HTag = styled.p`
  margin: 0;
  padding: 0 15px;
  color:var(--white);
  
  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    font-size:2vh;
  }
`
export const Ptag = styled.p`
  margin: 0;
  padding: 0;
  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    font-size:2vh;
  }
`
export const Datetag = styled.h4`
  color:var(--Primary);
  margin: 0;
  padding: 0;
  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    font-size:2vh;
  }
`
export const LinkReference = styled.a`
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
  transition:all 0.2s ease-in-out;
  
  &:hover{
    background: hsl(207, 95%, 50%);
    transition:all 0.2s ease-in-out;
    color: #fff;
  }
`

const boundleft = keyframes`
  0% {
    transform:translate(0,0)    
  }
  25% {
    transform:translate(-15px,0)    
  }
  75% {
    transform:translate(15px,0px)    
  }
  100% {
    transform:translate(0px,0px)    
  }
`
const boundright = keyframes`
  0% {
    transform:translate(0,0)    
  }
  25% {
    transform:translate(15px,0)    
  }
  75% {
    transform:translate(-15px,0px)    
  }
  100% {
    transform:translate(0px,0px)    
  }
`
export const ArrowLeft = styled(MdArrowBackIosNew)`
  position:absolute;
  top:40%;
  left:4%;
  font-size:10vh;
  color:var(--Primary);
  z-index:998;
  &:hover{
      animation-duration: 1000ms;
      animation-name: ${boundleft};
      animation-direction: alternate;
      animation-iteration-count: 1;
  }
  
  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    font-size:8vh;
  }
`

export const ArrowRight = styled(MdArrowForwardIos)`
  position:absolute;
  top:40%;
  right:4%;
  font-size:10vh;
  color:var(--Primary);
  z-index:998;
  @media screen and ( max-width: 480px){
    transition 0.8s all ease;
    font-size:8vh;
  }
  &:hover{
      animation-duration: 1000ms;
      animation-name: ${boundright};
      animation-direction: alternate;
      animation-iteration-count: 1;
  }
`
export const HeaderWrapper = styled.div`
  width:100%;
  positon:absolute;
  top:20vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const HeaderSection = styled.h1`
  position:absolute;
  top:15vh;
  font-size:5vh;
  text-align:center;
  font-family:var(--Text-Family-Oswald);
  color:var(--Primary);

  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    font-size:4vh;
  }
` 
