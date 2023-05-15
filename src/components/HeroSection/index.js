import React, {useState, useEffect} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroWrapper, Column1, DivDataText, Column2, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button, ButtonScroll} from './HeroElements';
import SecurityBg from '../../data/videos/securityBg.mp4'
import EyeComponent from './EyeComponent';
import {writingAll} from './typeFunction';

const HeroSection = ({heroData}) => {

  const [sizeWindow, setSizeWindow] = useState([0, 0]);

  useEffect(() => {
    writingAll(heroData.writeword, 'data-text');
  })

  useEffect(() => {
    const handleResize = () => {
      setSizeWindow([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_PUBLIC;

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={SecurityBg} type='video/mp4' />
      </HeroBg>
      <HeroWrapper>
        <Column1>
          <DivDataText id="data-text"></DivDataText>
          <EyeComponent sizeWindow={sizeWindow} />
        </Column1>
        <Column2>
          <HeroContent>
            <HeroP>{heroData.header}</HeroP>
            <HeroH1>{heroData.title}</HeroH1>
            <HeroP>{heroData.subtitle}</HeroP>
            <HeroBtnWrapper>
              <Button href={BACKEND_URL+heroData.brochureUrl} target="_blank" download>{"Descargar Bronchure"}</Button>
              <ButtonScroll to="Locations" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">{"Encuentranos"}</ButtonScroll>
            </HeroBtnWrapper>
          </HeroContent>
        </Column2>
      </HeroWrapper>
    </HeroContainer >
  );
};


export default HeroSection;
