import React from 'react';
import {FaFacebook, FaInstagram, FaPhone, FaMapMarked} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkR, FooterLinkA, FooterIcon} from './FooterElements';


const Footer = ({contactData}) => {
  console.log(contactData)
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems gridarea="fi1">
              <FooterLinkTitle>Contactenos</FooterLinkTitle>
              <FooterLink>{contactData.address}</FooterLink>
              <FooterLink>Correo Electronico: <FooterLinkA href={"mailto:"+contactData.email}>{contactData.email}</FooterLinkA></FooterLink>
              <FooterLink>Sitio web: <FooterLinkR to="/">{contactData.website}</FooterLinkR></FooterLink>
            </FooterLinkItems>
            <FooterIcon gridarea="i1">
              <FaMapMarked />
            </FooterIcon>
            <FooterLinkItems gridarea="fi2">
              <FooterLinkTitle>Telefonos Directos</FooterLinkTitle>
              <FooterLink>Teléfono: {contactData.phone1}</FooterLink>
              <FooterLink>Móvil: {contactData.mobile1}</FooterLink>
              <FooterLink>Móvil: {contactData.mobile2}</FooterLink>
            </FooterLinkItems>
            <FooterIcon gridarea="i2">
              <FaPhone />
            </FooterIcon>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              SecurityForce M&A
            </SocialLogo>
            <WebsiteRights>SecurityForce M&A © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href={contactData.facebook} target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href={contactData.instagram} target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;

