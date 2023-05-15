import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const JoinUsContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const JoinUsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr;
  grid-template-areas:"img form";

  @media screen and (max-width:480px){
    grid-template-columns:1fr;
    grid-template-rows:1fr;
    grid-template-areas:"form";
  }
`;
export const ImageLeft = styled.div`
  grid-area:img;
  height: 100%;
  width: 100%;
  background:url(${props => props.imgsrc});
  background-size:cover;
  background-position:center;
`;
export const ContentWrapper = styled.div`
  grid-area:form;
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  background:var(--Secondary);

  @media screen and (max-width:480px){
    align-items:center;
  }
`
export const ContentForm = styled.form`
  height: 100%;
  width: 25vw;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  padding-left:5vw;

  @media screen and (max-width:480px){
    padding-left:0vw;
    width: 80vw;
  }
`;
export const Header = styled(LinkR)`
  font-size:5vh;
  margin:2.5vh 0 0 0;
  color:var(--Primary);
  text-decoration:none;
  font-family:var(--Text-Family-Oswald);
`;
export const SubHeader = styled.label`
  font-size:3vh;
  font-weight:500;
  color:var(--white);
  margin:2.5vh 0 2.5vh 0;
`;
export const InputName = styled.input.attrs({type: 'text', placeholder: 'nombre'})`
  width:20vw;
  height:2vw;
  text-decoration:none;
  outline:none;
  border-radius:1vh;
  border:1px solid var(--DarkBlue);
  padding:5px 10px;
  margin:1vh 0;

  @media screen and (max-width:480px){
    width: 80vw;
    height:5vh;
  }
`;
export const InputEmail = styled.input.attrs({type: 'email', placeholder: 'email'})`
  width:20vw;
  height:2vw;
  text-decoration:none;
  outline:none;
  border-radius:1vh;
  padding:5px 10px;
  border:1px solid var(--DarkBlue);
  margin:1vh 0;
  @media screen and (max-width:480px){
    width: 80vw;
    height:5vh;
  }
`;
export const InputPhoneNumber = styled.input.attrs({type: 'text', placeholder: 'numero de teléfono'})`
  width:20vw;
  height:2vw;
  text-decoration:none;
  outline:none;
  border-radius:1vh;
  padding:5px 10px;
  border:1px solid var(--DarkBlue);
  margin:1vh 0;
  @media screen and (max-width:480px){
    width: 80vw;
    height:5vh;
  }
`;
export const InputCity = styled.input.attrs({type: 'text', placeholder: 'Ciudad'})`
  width:20vw;
  height:2vw;
  text-decoration:none;
  outline:none;
  border-radius:1vh;
  padding:5px 10px;
  border:1px solid var(--DarkBlue);
  margin:1vh 0;
  @media screen and (max-width:480px){
    width: 80vw;
    height:5vh;
  }
`;
export const ButtonWrapper = styled.div`
  margin:2vh 0;
  width:100%;
  display:flex;
  alignt-items:center;
  justify-content:center;
`
export const LabelRed = styled.label`
  width:100%;
  text-align:right;
  font-size:1.5vh;
  color: red;
  margin:0 0 2vh 0;
  opacity:0;
  &.isActive{
    opacity:1;  
  }
`

export const SubmitButton = styled.input.attrs({type: 'submit'})`
  border-radius: 15px;
  background:var(--Primary);
  white-space:nowrap;
  padding:12px 30px;
  color:var(--white);
  font-size:16px;
  outline:none;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: var(--Secondary);
    color:var(--Primary);
  }

`;
