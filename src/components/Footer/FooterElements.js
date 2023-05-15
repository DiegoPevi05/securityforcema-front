import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
  background-color:var(--Secondary);
  width:100%;
  height:100%;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  //max-width:1100px;
  width:70%;
  margin: 0 auto;
  @media screen and (max-width:480px){
    padding: 48px 12px;
  }
`

export const FooterLinksContainer = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;

  @media screen and (max-width:820px){
    padding-top:32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display:grid;
  grid-template-columns:0.4fr 0.2fr 0.4fr 0.2fr;
  grid-template-rows:1fr;
  grid-template-areas:"fi1 i1 fi2 i2";
  width:100%;
  transition:all 0.8s ease-in-out;

  @media screen and (max-width:820px){
    transition:all 0.8s ease-in-out;
    flex-direction:column;
  }
  @media screen and (max-width:480px){
    transition:all 0.8s ease-in-out;
    grid-template-columns:0.8fr 0.2fr;
    grid-template-rows:1fr 1fr;
    grid-template-areas:"fi1""fi2";
  }
`

export const FooterLinkItems = styled.div`
  grid-area:${props => props.gridarea};
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin:16px;
  text-align:left;
  width:100%;
  box-sizing:border-box;
  color:#fff;

  @media screen and (max-width:480px){
    margin:0;
    padding:10px;
    width:100%;
  }
`
export const FooterIcon = styled.div`
  grid-area:${props => props.gridarea};
  color:#fff;
  font-size:3rem;
  display:flex;
  justify-content:center;
  align-items:center;
  @media screen and (max-width:480px){
    display:none;
  }
`

export const FooterLinkTitle = styled.h1`
  color:var(--Primary);
  font-size: 20px;
  margin-bottom: 16px;
`

export const FooterLink = styled.p`
  color:#fff;
  text-decoration:none;
  margin-bottom:0.5rem;
  font-size:16px;
`
export const FooterLinkA = styled.a`
  color:#fff;
  text-decoration:none;
  &:hover{
    color: var(--Primary);
    transition:0.3s ease-out;
  }

`
export const FooterLinkR = styled(Link)`
  color:#fff;
  text-decoration:none;
  &:hover{
    color: #99dbdc;
    transition:0.3s ease-out;
  }
`
export const SocialMedia = styled.section`
  max-width:1000px;
  width:100%;
`

export const SocialMediaWrap = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:1100px;
  margin:40px auto 0 auto;

  @media screen and (max-width:820px){
    flex-direction:column;
  }
`
export const SocialLogo = styled(Link)`
  color:#fff;
  justify-self:start;
  cursor:pointer;
  text-decoration:none;
  font-size:1.5rem;
  display:flex;
  align-items:center;
  margin-bottom:16px;
  font-weight:bold;
  font-family:okemo,sans-serif;
`

export const WebsiteRights = styled.small`
  color:#fff;
  margin-bottom:16px;

  @media screen and (max-width:480px){
    text-align:center;
  }
`

export const SocialIcons = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:240px;
`

export const SocialIconLink = styled.a`
  color:#fff;
  font-size:24px;
`

