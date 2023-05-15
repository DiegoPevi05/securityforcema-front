import React from 'react'
import ImageLogo_Part1 from '../../data/images/logo_part1.png'
import ImageLogo_Part2 from '../../data/images/logo_part2.png'
import {LoadingPageContainer, LoadingPageWrapper, LogoLoading, Logo} from './LoadingElements';
//
const LoadingPage = ({Open}) => {
  return (
    <LoadingPageContainer Open={Open}>
      <LoadingPageWrapper>
        <LogoLoading>
          <Logo className="downside" src={ImageLogo_Part1} />
          <Logo className="upside" src={ImageLogo_Part2} />
        </LogoLoading>
      </LoadingPageWrapper>
    </LoadingPageContainer>
  );
};


export default LoadingPage;
