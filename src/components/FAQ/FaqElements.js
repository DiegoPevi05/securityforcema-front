import styled, {keyframes} from 'styled-components';

export const FAQContainer = styled.div`
  height:100%;
  width:100%;
  transition:all 0.8s ease-in-out;
  background:var(--Secondary);
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    height:100%;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    height:100%;
  }
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    height:100%;
  }
`;

export const FAQWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:120px 0px;
  transition:all 0.8s ease-in-out;

  
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    padding:40px 40px;
  }
  @media screen and (max-width: 796px){
    transition:all 0.8s ease-in-out;
    padding:40px 0px;
  }
`

export const FAQTitle = styled.div`
  padding:0px 15vw;
  width:100%;
  height:120px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-size:5vh;
  font-weight:bold;
  transition:all 0.8s ease-in-out;
  color:var(--white);
  font-family:var(--Text-Family-Oswald);
  @media screen and (max-width: 480px){
    transition:all 0.8s ease-in-out;
    padding:0px 0px 0px 0px;
  }
`

export const FAQQuestions = styled.div`
  width:100%;
  min-height:120px;
  padding:0px 120px;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  align-items:center;
  transition:all 0.8s ease-in-out;
  
  @media screen and (max-width: 1200px){
    transition:all 0.8s ease-in-out;
    padding:60px 0px;
  }

  @media screen and (max-width: 796px){
    padding:40px 0px;
    transition:all 0.8s ease-in-out;
  }

  @media screen and (max-width: 480px){
    padding:40px 0px;
  }
`
export const FAQColumn1 = styled.div`
  grid-area:col1;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
  height:100%;
  transition:all 0.8s ease-in-out;
`
export const FAQColumn2 = styled.div`
  grid-area:col2;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
  height:100%;
  transition:all 0.8s ease-in-out;
`
export const Question = styled.div`
  width:50%;
  min-height:60px;
  padding:0px 40px;
  border-bottom:1px solid #d9d9d9;
  display:flex;
  flex-direction:column;
  transition:all 0.8s ease-in-out;

  @media screen and (max-width: 796px){
   width:100%;
  }
`
export const TextWrapper = styled.div`
  width:100%;
  height:60px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  transition:all 0.8s ease-in-out;

  @media screen and (max-width: 480px){
    height:80px;
  }
`
export const Title = styled.h3`
  color:var(--Primary);

  @media screen and (max-width: 1200px){
    font-size:1.2vh;
  }

  @media screen and (max-width: 480px){
    font-size:2vh;
  }

`
export const IconToogle = styled.h2`
  color:var(--Primary);
  font-size:3vh;

  @media screen and (max-width: 480px){
    font-size:2.5vh;
    margin-left:5px;
  }
`

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
export const ResponseQuestion = styled.div`
  display: ${({openTab}) => (openTab ? 'flex' : 'none')};
  width:100%;
  min-height:120px;
  padding:20px 10px;
  font-weight:bold;
  animation: ${SlideDown} 1000ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;
  color:var(--white);
  text-align:justify;
`
