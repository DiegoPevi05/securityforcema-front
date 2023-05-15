import React, {useState} from 'react';
import {FAQContainer, FAQWrapper, FAQTitle, FAQQuestions, FAQColumn1, FAQColumn2, Question, TextWrapper, Title, IconToogle, ResponseQuestion} from './FaqElements'

const QuestionModify = ({title, content}) => {
  const [openTab, setOpenTab] = useState(false);

  const toggleOpenTab = () => {
    setOpenTab(!openTab);
  }
  return (
    <Question>
      <TextWrapper>
        <Title>{title}</Title>
        <IconToogle onClick={toggleOpenTab}>{openTab === false ? "+" : "-"}</IconToogle>
      </TextWrapper>
      <ResponseQuestion openTab={openTab}>{content}</ResponseQuestion>
    </Question>
  )
}
const FAQ = ({faqsData}) => {
  return (
    <FAQContainer id="FAQ">
      <FAQWrapper>
        <FAQTitle>Preguntas Frecuentes</FAQTitle>
        <FAQQuestions>
            {faqsData.map((item) => (
              <QuestionModify title={item.question} content={item.answer}></QuestionModify>
            ))}
        </FAQQuestions>
      </FAQWrapper>
    </FAQContainer>

  )
}

export default FAQ;
