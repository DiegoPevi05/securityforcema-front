import styled, {keyframes} from 'styled-components';


export const LoadingPageContainer = styled.div`
  z-index:1000;
  display:${({Open}) => (Open ? 'block' : 'none')};
  position:fixed;
  top:0;
  width:100vw;
  height:100vh;
  //backdrop-filter: blur(6px);
  background-color:var(--Secondary);
`;
export const LoadingPageWrapper = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
export const LogoLoading = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;



export const BackgroundLogo = styled.div`
  height:170px;
  width:170px;
  background-color:var(--White);
  border-radius:50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and ( max-width: 960px){
    transition 0.8s all ease;
    height:100px;
    width:100px;
  }
`

const SlideDown = keyframes`
  from {
    transform: translateY(-200%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const SlideUp = keyframes`
  from {
    transform: translateY(200%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`


export const Logo = styled.img` 
  height:250px;
  width:250px;
  transition 0.8s all ease;
  position:relative;

  @media screen and ( max-width: 960px){
    transition 0.8s all ease;
    top:15px;
    left:21px;
    height:60px;
    width:60px;
  }
  &.downside{
    animation: ${SlideDown} 2000ms forwards;
    animation-direction:normal;
    transition:all 0.2s ease-in-out;

    @media screen and ( max-width: 960px){
      left:5px;
    }


  }

  &.upside{
    bottom:150px;
    left:10px;
    animation: ${SlideUp} 2000ms forwards;
    animation-direction:normal;
    transition:all 0.2s ease-in-out;

    @media screen and ( max-width: 960px){
      left:8px;
      top:-18px;
    }

  }
`
