import React, {useRef,useState, useEffect} from 'react'
import axios from 'axios';
import {JoinUsContainer, JoinUsWrapper, ImageLeft, ContentWrapper, ContentForm, Header, SubHeader, InputName, InputEmail, InputPhoneNumber, InputCity, ButtonWrapper,SubmitButton, LabelRed} from './joinusElements';
import ImageOne from '../../data/images/seguridad4.jpg';
import {useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser';

const JoinUsSection = () => {
  let navigate = useNavigate();

  const sendEmail = async(e) => {
    e.preventDefault(); 
    const formContact = document.getElementById("formContact");
    const formData = new FormData(formContact);

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const BACKEND_AUTH_TOKEN = process.env.REACT_APP_FORM_UATH_TOKEN;
    try {
      await axios.post(BACKEND_URL+'/api/send-email-job', formData, {
          headers: {
            "Content-Type": "application/json",
            "Authorization":BACKEND_AUTH_TOKEN
          },
         }).then(response =>{
           navigate("/")
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <JoinUsContainer>
      <JoinUsWrapper>
        <ImageLeft imgsrc={ImageOne}></ImageLeft>
        <ContentWrapper>
          <ContentForm  id="formContact" onSubmit={sendEmail}>
            <Header to="/">
              SecurityForce M&A
            </Header>
            <SubHeader>
              Llena el siguiente Formulario y nos llegará tu solicitud para trabajar con nosotros.
            </SubHeader>
            <InputName id="name" name="name"  placeholder="Nombre" required="required"/>
            <InputEmail id="email" name="email"  placeholder="Correo Electronico" required="required"/>
            <InputPhoneNumber id="phone" name="phone" placeholder="Numero de Telefono" required="required"/>
            <InputCity id="city" name="city"  placeholder="Ciudad" required="required"/>
            <ButtonWrapper>
              <SubmitButton value="Enviar"/>
            </ButtonWrapper>
          </ContentForm>
        </ContentWrapper>
      </JoinUsWrapper>
    </JoinUsContainer>
  )
}

export default JoinUsSection;
