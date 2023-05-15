import React, {useState} from 'react';
import {PageContent, Card, Content, Title, Copy, ButtonCard, CardContentInfo, ExitIcon, TitleCard, ContentCard, SubtitleCard} from './InfoSectionElements';


const CardSubComponent = ({data, setOpenCard}) => {

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_PUBLIC;
  return (
    <Card imgsrc={BACKEND_URL+data.imageUrl}>
      <Content>
        <Title>
          {data.pretitle}
        </Title>
        <Copy>
          {data.subpretitle}
        </Copy>
        <ButtonCard onClick={() => setOpenCard(data.id)}>{"Ver más"}</ButtonCard>
      </Content>
    </Card>
  )
}

const CardContentComponent = ({data, closeCard}) => {

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_PUBLIC;
  return (
    <CardContentInfo imgsrc={BACKEND_URL+data.imageUrl}>
      <ExitIcon onClick={closeCard} />
      <TitleCard>{data.title}</TitleCard>
      <ContentCard>{data.content}</ContentCard>
      <SubtitleCard>{data.subtitle}</SubtitleCard>
    </CardContentInfo>
  )
}

const InfoSection = ({industriesData}) => {
  const [openCard, setOpenCard] = useState("Card0");

  const handleClickScroll = () => {
    setOpenCard("Card0");
    const element = document.getElementById('Industries');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if(openCard === "Card0"){
    return(
        <PageContent id="Industries">
          {industriesData.map((item, index) => (
            <CardSubComponent key={"Card_" + index} data={item} setOpenCard={setOpenCard} />
          ))}
        </PageContent>
    )
  }else{
    return(
        <CardContentComponent id="CardIndustry" data={industriesData.filter(x => x.id === openCard)[0]} closeCard={handleClickScroll} />
    )
  }
}

export default InfoSection;
