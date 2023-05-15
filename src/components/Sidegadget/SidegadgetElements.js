import styled, {keyframes} from 'styled-components'
import {AiOutlineWhatsApp, AiOutlineFacebook,AiOutlineMail} from 'react-icons/ai'
import {FaTiktok, FaInstagram} from 'react-icons/fa'


export const GadgetContainer = styled.div`
    position:fixed;
    top:30%;
    right:0%;
    height:20%;
    width:3.5%;
    z-index:1000000;

    @media screen and (max-width: 768px){
      transition 0.8s all ease;
      width:4%;
    }
    @media screen and (max-width: 480px){
      transition 0.8s all ease;
      right:20%;
      top:95%;
      width:60%;
      height:10%;
    }
`

const bound = keyframes`
  0% {
    transform:translate(0,0)    
  }
  25% {
    transform:translate(0,-20px)    
  }
  75% {
    transform:translate(0,20px)    
  }
  100% {
    transform:translate(0px,0px)    
  }
`


export const GadgetWrapper = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:var(--Secondary);
    border-left:1px solid transparent;
    border-Top:1px solid transparent;
    border-Bottom:1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:4vh 0 0 4vh;

    &:hover{
      animation-duration: 1000ms;
      animation-name: ${bound};
      animation-direction: alternate;
      animation-iteration-count: 1;
    }

    @media screen and (max-width: 480px){
      transition 0.8s all ease;
      border-radius:4vh 4vh 0 0vh;
      flex-direction:row;
      align-items:flex-start;
      justify-content:space-around;
    }
`

export const IconLink = styled.a`
    cursor:pointer;
    text-decoration: none;
`
export const IconMail = styled(AiOutlineMail)`
    font-size:3vh;
    margin-Top:1vh;
    color:#c2c2c2;
    &:hover {
        color:var(--Primary);
    }
`
export const IconFacebook = styled(AiOutlineFacebook)`
    font-size:3vh;
    margin-Top:1vh;
    color:#c2c2c2;
    &:hover {
        color:var(--Primary);
    }
`
export const IconTikTok = styled(FaTiktok)`
    font-size:3vh;
    margin-Top:1vh;
    color:#c2c2c2;
    &:hover {
        color:var(--Primary);
    }
`
export const IconInstagram = styled(FaInstagram)`
    font-size:3vh;
    margin-Top:1vh;
    color:#c2c2c2;
    &:hover {
        color:var(--Primary);
    }
`


