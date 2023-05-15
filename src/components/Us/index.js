import React, {useState} from 'react';
import {UsComponentContainer,UsColumn1,UsColumn2,UsWrapper,Header,TextContent,SecurityShieldComponent} from './usElements';

const UsComponent = ({usData}) => {
  return (
    <UsComponentContainer id="Us">
      <UsWrapper>
        <UsColumn1>
          <Header>{usData.title}</Header>
          <TextContent>{usData.content}</TextContent>
        </UsColumn1>
        <UsColumn2>
          <SecurityShieldComponent src={"https://www.securityforcema.com/server/public"+usData.imageUrl}/>
        </UsColumn2>
      </UsWrapper>
    </UsComponentContainer>
  )
}

export default UsComponent;
