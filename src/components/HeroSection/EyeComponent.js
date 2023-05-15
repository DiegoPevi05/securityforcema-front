import React, {useState, useEffect} from 'react'
import {AnimatedEyeContainer, AnimatedEye, PupilEye, ShadowEye} from './HeroElements';


const EyeComponent = ({sizeWindow}) => {

  const [width, height] = sizeWindow;
  const [EyeWidth, setEyeWidth] = useState(600);
  const [EyeHeight, setEyeHeight] = useState(300);
  const [PupilWidth, setPupilWidth] = useState(100);
  const [PupilHeight, setPupilHeight] = useState(150);
  const [BorderEye, setBorderEye] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (width >= 1300) {
        setEyeWidth(600);
        setEyeHeight(300);
        setPupilWidth(100);
        setPupilHeight(150);
      }
      if (width < 1300) {
        setEyeWidth(500);
        setEyeHeight(250);
        setPupilWidth(80);
        setPupilHeight(120);
      }

      if (width < 960) {
        setBorderEye(12);
        setEyeWidth(300);
        setEyeHeight(150);
        setPupilWidth(50);
        setPupilHeight(75);
      }

      if (width < 768) {
        setBorderEye(12);
        setEyeWidth(200);
        setEyeHeight(100);
        setPupilWidth(30);
        setPupilHeight(50);
      }
    }
    handleResize();
  }, [width])


  const [transitionEye, setTransitionEye] = useState({x: 0, y: 0});

  const TranslateEye = {
    transform: `translateY(${transitionEye.y}px)`,
    transition: `all 0.2s ease`
  };

  const [transitionPupil, setTransitionPupil] = useState({x: 0, y: 0});

  const TranslatePupil = {
    transform: `translate(${transitionPupil.x}px, ${transitionPupil.y}px)`,
    transition: `all 0.2s ease`
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    const AvailableMovementPupilX = 200;
    const AvailableMovementPupilY = 30;

    let xPupil = event.clientX / window.innerWidth * AvailableMovementPupilX;
    let yPupil = event.clientY / window.innerHeight * AvailableMovementPupilY;


    xPupil = xPupil - AvailableMovementPupilX / 2;
    yPupil = yPupil - AvailableMovementPupilY / 2;

    setTransitionPupil({x: xPupil, y: yPupil});

    const AvailableMovementEyeX = 20;
    const AvailableMovementEyeY = 25;
    let xEye = event.clientX / window.innerWidth * AvailableMovementEyeX;
    let yEye = event.clientY / window.innerHeight * AvailableMovementEyeY;

    xEye = xEye - AvailableMovementEyeX / 2;
    yEye = yEye - AvailableMovementEyeY / 2;

    setTransitionEye({x: xEye, y: yEye});
  };

  return (
    <AnimatedEyeContainer>
      <AnimatedEye BorderEye={BorderEye} EyeWidth={EyeWidth} EyeHeight={EyeHeight} style={TranslateEye}>
        <PupilEye PupilWidth={PupilWidth} PupilHeight={PupilHeight} style={TranslatePupil} />
      </AnimatedEye>
      <ShadowEye />
    </AnimatedEyeContainer >
  );
};


export default EyeComponent;
