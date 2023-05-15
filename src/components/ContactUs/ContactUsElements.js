import styled from 'styled-components';

export const ContactContainer = styled.div`
  height:100%;
  width:100%;
  transition:all 0.8s ease-in-out;
  background:var(--Primary);
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    height:120%;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    height:100%;
  }
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    height:120vh;
  }
`
export const ContactWrapper = styled.div`
  width:100%;
  height:80vh;
  display:flex;
  flex-direction:row;
  padding:120px 15vw;
  transition:all 0.8s ease-in-out;

  
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    padding:40px 40px;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    padding:40px 0px;
    flex-direction:column;
    height:100%;
  }
`
export const Column1 = styled.div`
  height:100%;
  width:50%;
  padding:0 50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  transition:all 0.8s ease-in-out;

  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    height:50%;
    width:100%;
  }
`
export const Header = styled.h1`
  width:100%;
  text-align:left;
  font-size:5vh;
  font-weight:bold;
  color:var(--white);
  font-family:var(--Text-Family-Oswald);
`
export const Description = styled.h3`
  width:100%;
  text-align:left;
  font-weight:bold;
  color:var(--Secondary);

  @media screen and (max-width: 796px){
    font-size:2vh;
  }
`
export const FormContact = styled.form`
  width:100%;
`

export const InputName = styled.input`
  width:100%; 
  height:4vh;
  margin-top:2vh;
  margin-bottom:1vh;
  border-radius:10px;
  background:var(--Secondary);
  border:none;
  padding:5px 0 5px 20px;
  color:var(--white);
  font-weight:bold;
`;
export const InputEmail = styled.input`
  width:100%; 
  height:4vh;
  margin-bottom:1vh;
  border-radius:10px;
  background:var(--Secondary);
  border:none;
  padding:5px 0 5px 20px;
  color:var(--white);
  font-weight:bold;
`;
export const InputTelephone = styled.input`
  width:100%; 
  height:4vh;
  margin-bottom:1vh;
  border-radius:10px;
  background:var(--Secondary);
  border:none;
  padding:5px 0 5px 20px;
  color:var(--white);
  font-weight:bold;
`;
export const InputCompany = styled.input`
  width:48%; 
  height:4vh;
  margin-bottom:1vh;
  border-radius:10px;
  background:var(--Secondary);
  border:none;
  padding:5px 0 5px 20px;
  color:var(--white);
  font-weight:bold;
  margin-right:2%;
  @media screen and (max-width: 480px){
    margin-right:0;
    width:100%; 
  }
`;
export const InputCharge = styled.input`
  width:48%; 
  height:4vh;
  margin-bottom:1vh;
  border-radius:10px;
  background:var(--Secondary);
  border:none;
  padding:5px 0 5px 20px;
  color:var(--white);
  font-weight:bold;
  margin-left:2%;
  @media screen and (max-width: 480px){
    margin-left:0;
    width:100%; 
  }
`;
export const SubmitButton = styled.input.attrs({type: 'submit'})`
  width:20%; 
  height:4vh;
  margin-bottom:1vh;
  border-radius:10px;
  background:var(--Secondary);
  border:none;
  padding:5px 20px 5px 20px;
  color:var(--white);
  font-weight:bold;
  cursor:pointer;

  &:hover{
    background:var(--white); 
    color:var(--Primary);
  }

  @media screen and (max-width: 480px){
    width:40%; 
  }
`;

export const Column2 = styled.div`
  height:100%;
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  transition:all 0.8s ease-in-out;
  position:relative;

  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    height:50%;
    width:100%;
  }
`
export const TextWrapper = styled.div`
  position:absolute;
  width:50%;
  bottom:20%;
  left:10%;
`
export const HeaderMap = styled.h1`
  font-size:3vh;
  font-weight:bold;
  color:var(--white);
`
export const TextMap = styled.p`
  font-size:2vh;
  font-weight:bold;
  color:var(--white);
  &:before{
    content:"•";
    color:var(--white);
    margin-right:5px;
  }


`
export const MapImage = styled.img`
  transform:scale(1.2);
  transition:all 0.8s ease-in-out;
  &:hover{
    transform:scale(1.3);
    transition:all 0.8s ease-in-out;
  }

  @media screen and (max-width: 796px){
    transform:scale(0.6);

    &:hover{
      transform:scale(0.65);
      transition:all 0.8s ease-in-out;
    }
  }
`;


