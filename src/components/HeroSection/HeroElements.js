import styled, {keyframes} from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkScroll} from 'react-scroll'

export const HeroContainer = styled.div`
  background:#fff;//linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 0 30px;
  height: 100vh; /* Aqui era 800px */
  position: relative;
  z-index:3;

  :before{
    content:'';
    position:absolute;
    right:0;
    bottom:0;
    background:linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
    z-index:2;
  }
  @media screen and (max-width:480px){
    height: 100vh; /* Aqui era 800px */
    width:100%;
  }
`
export const HeroWrapper = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr;
  grid-template-areas:"EyeAnimation header";
  height:100%;
  width:100%;
  z-index:10;

  @media screen and (max-width:480px){
    grid-template-columns:1fr;
    grid-template-rows:0.4fr 0.6fr;
    grid-template-areas:"EyeAnimation" "header";
  }

`
export const Column1 = styled.div`
  grid-area:EyeAnimation; 
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export const Column2 = styled.div`
  grid-area:header; 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const HeroBg = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  overflow:hidden;
  z-index:1;
`

export const VideoBg = styled.video`
  width:100%;
  height:100%;
  object-fit:cover;
  -o-object-fit:cover;
  -object-fit:cover;
  background: #232a34;
`
export const HeroContent = styled.div`
  z-index:1;
  max-width:1200px;
  position:absolute;
  padding: 8px 24px;
  display:flex;
  flex-direction:column;

  @media screen and (max-width: 480px){
    transition 0.8s all ease;
    width:100%;
  }
`

export const HeroH1 = styled.h1`
  color: var(--Primary);
  font-size: 4vh;
  text-align:left;

  @media screen and ( max-width: 960px){
    transition 0.8s all ease;
    font-size:24px;
  }

  @media screen and (max-width: 768px){
    transition 0.8s all ease;
    font-size:20px;
  }
  @media screen and (max-width: 480px){
    transition 0.8s all ease;
    font-size:2.2vh;
    text-align:center;
  }
`

export const HeroP = styled.p`
  margin-top:24px;
  margin-Bottom:24px;
  color: var(--white);
  font-size: 4vh;
  font-weight:bold;
  text-align:left;
  max-width:600px;
  font-family:var(--Text-Family-Oswald);

  @media screen and ( max-width: 960px){
    transition 0.8s all ease;
    font-size:18px;
  }

  @media screen and (max-width: 768px){
    transition 0.8s all ease;
    font-size:14px;
  }

  @media screen and (max-width: 480px){
    transition 0.8s all ease;
    font-size:3vh;
    padding: 0px 40px;
    text-align:center;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display:flex;
  flex-direction:row;
  align-items: center;
  @media screen and (max-width: 480px){
    justify-content:center; 
  }
`

export const Button = styled.a`
      border-radius:50px;
      background:var(--Primary);
      white-space:nowrap;
      padding: 10px 22px;
      font-size:16px;
      outline:none;
      border:none;
      cursor:pointer;
      transition:all 0.2s ease-in-out;
      text-decoration:none;
      font-size:1rem;
      font-weight:bold;
      color:#fff;
      margin:0 1vw 0 0;

      &:hover{
        transition:all 0.2s ease-in-out;
        background:var(--Secondary);
        color:#fff;
      }

      @media screen and (max-width: 768px){
        transition 0.8s all ease;
        padding: 5px 16px;
        font-size:12px;
      }

      @media screen and (max-width: 480px){
        transition 0.8s all ease;
        margin:0 5vw;
        padding: 10px 22px;
      }
`

export const ButtonScroll = styled(LinkScroll)`
      border-radius:50px;
      background:var(--Primary);
      white-space:nowrap;
      padding: 10px 22px;
      font-size:16px;
      outline:none;
      border:none;
      cursor:pointer;
      transition:all 0.2s ease-in-out;
      text-decoration:none;
      font-size:1rem;
      font-weight:bold;
      color:#fff;
      margin:0 1vw 0 0;

      &:hover{
        transition:all 0.2s ease-in-out;
        background:var(--Secondary);
        color:#fff;
      }

      @media screen and (max-width: 768px){
        transition 0.8s all ease;
        padding: 5px 16px;
        font-size:12px;
      }

      @media screen and (max-width: 480px){
        transition 0.8s all ease;
        margin:0 5vw;
        padding: 10px 22px;
      }
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left:8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left:8px;
  font-size: 20px;
`

const fade = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const DivWrapper = styled.div`
  &.wrapper{
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    text-align: left;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    //position: absolute;
    //top: 50%;
    //left: 50%;
    //transform: translate(-25%, -25%);

    & .item{
      visibility: hidden;
      display: none;
    }

    & h2{
      font-size: 50px;
      margin: 0;
      color: #3a3a3a;
      text-align: left;
    }

    & > div{
      min-height: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      align-items: flex-end;
      font-weight: bold;
      color: #000;
      font-size:70px;
      @media screen and ( max-width: 960px){
        transition 0.8s all ease;
        font-size:40px;
      }
      @media screen and (max-width: 768px){
        transition 0.8s all ease;
        font-size:24px;
      }
      @media screen and (max-width: 480px){
        transition 0.8s all ease;
        font-size:30px;
      }
    }
    & > div:after {
      content: "";
      width: 35px;
      height: 10px;
      display: block;
      background: #000;
      color: #000;
      margin-bottom: 4px;
      margin-left: 2px;
      animation-duration: 350ms;
      animation-name: ${fade};
      animation-direction: alternate;
      animation-iteration-count: infinite;

      @media screen and ( max-width: 960px){
        transition 0.8s all ease;
        width: 25px;
        height: 10px;
      }

      @media screen and ( max-width: 768px){
        transition 0.8s all ease;
        width: 20px;
        height: 7px;
      }
    }
  }
`


export const SpanItem = styled.span`
`

export const AnimatedEyeContainer = styled.div`
  height:60%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  padding-top:40px;
`
export const AnimatedEye = styled.div`

  position: relative;
  display: inline-block;
  border-radius: 50%;
  border: ${({BorderEye}) => (BorderEye)}px solid var(--Primary);
  height: ${({EyeHeight}) => (EyeHeight)}px;
  width:${({EyeWidth}) => (EyeWidth)}px;
  background: transparent;

  @media screen and (max-width: 480px){
    top:20vh;
  }
`

export const PupilEye = styled.div`
  position: absolute;
  bottom: 5vh;
  right: 9vw;
  width: ${({PupilWidth}) => (PupilWidth)}px;
  height: ${({PupilHeight}) => (PupilHeight)}px;
  background: var(--Primary);
  border-radius: 50%;

  @media screen and ( max-width: 960px){
    bottom: 2.5vh;
    right: 11vw;
    transition 0.8s all ease;
  }
  @media screen and (max-width: 768px){
    bottom: 2.5vh;
    right: 11vw;
    transition 0.8s all ease;
  }
  @media screen and (max-width: 480px){
    bottom: 1.5vh;
    right: 20vw;
    transition 0.8s all ease;
  }
`
export const ShadowEye = styled.div`
    position:absolute;
    top:75vh;
    left:18vw;
    height:5vh;
    width:15vw;
    border-radius: 50%;
    background:var(--Secondary);

  @media screen and ( max-width: 960px){
    top:60vh;
    left:18vw;
    height:5vh;
    width:15vw;
    transition 0.8s all ease;
  }
  @media screen and (max-width: 768px){
    top:57vh;
    left:20vw;
    height:3.5vh;
    width:15vw;
    transition 0.8s all ease;
  }
  @media screen and (max-width: 480px){
    top:40vh;
    left:35vw;
    height:5vh;
    width:30vw;
    transition 0.8s all ease;
  }
`

const fadeText = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const DivDataText = styled.div`
  height:40%; 
  padding:0 25%;
  text-transform: uppercase;
  display: flex;
  align-items: flex-end;
  justify-content:flex-start;
  font-weight: bold;
  color: var(--Primary);
  font-size:45px;
  font-family:var(--Text-Family-Oswald);

  @media screen and ( max-width: 960px){
    transition 0.8s all ease;
    font-size:40px;
  }
  @media screen and (max-width: 768px){
    transition 0.8s all ease;
    font-size:24px;
  }
  @media screen and (max-width: 480px){
    display:none;
    transition 0.8s all ease;
    font-size:30px;
  }

  &:after{
    content: "";
    width: 35px;
    height: 10px;
    display: block;
    background: var(--Primary);
    color: var(--Primary);
    margin-bottom: 4px;
    margin-left: 2px;
    animation-duration: 350ms;
    animation-name: ${fadeText};
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @media screen and ( max-width: 960px){
      transition 0.8s all ease;
      width: 25px;
      height: 10px;
    }

    @media screen and ( max-width: 768px){
      transition 0.8s all ease;
      width: 20px;
      height: 7px;
    }
  }

`


