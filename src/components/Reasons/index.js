import React from 'react';
import {FaBuilding, FaWarehouse, FaUsers, FaHouseUser,FaIndustry,FaSchool, FaHospital,FaStore} from 'react-icons/fa';
import {ReasonsContainer, ReasonsWrapper, ReasonsIconsWrapper, ReasonsSquartle, ReasonsTextWrapper, TitleReasons, DescriptionReasons, IconContainer} from './ReasonsElements'

const Reasons = ({reasonsData}) => {
  return (
    <ReasonsContainer id="Services">
      <ReasonsWrapper>
        <ReasonsTextWrapper>
          <TitleReasons>
            {reasonsData.title} 
          </TitleReasons>
          <DescriptionReasons>
            {reasonsData.description} 
          </DescriptionReasons>
        </ReasonsTextWrapper>
        <ReasonsIconsWrapper>
          <ReasonsSquartle gridarea="a"><IconContainer><FaHospital /></IconContainer>
            {reasonsData.reason1} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="b"><IconContainer><FaStore /></IconContainer>
            {reasonsData.reason2} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="c"><IconContainer><FaSchool /></IconContainer>
            {reasonsData.reason3} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="d"><IconContainer><FaBuilding /></IconContainer>
            {reasonsData.reason4} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="e"><IconContainer><FaIndustry /></IconContainer>
            {reasonsData.reason5} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="f"><IconContainer><FaUsers /></IconContainer>
            {reasonsData.reason6} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="g"><IconContainer><FaHouseUser /></IconContainer>
            {reasonsData.reason7} 
</ReasonsSquartle>
          <ReasonsSquartle gridarea="h"><IconContainer><FaWarehouse /></IconContainer>
            {reasonsData.reason8} 
</ReasonsSquartle>
        </ReasonsIconsWrapper>
      </ReasonsWrapper>
    </ReasonsContainer>

  )
}

export default Reasons;
