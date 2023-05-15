import React, { useRef } from 'react';
import PeruMap from '../../data/images/PeruContact.png'
import {ContactContainer, ContactWrapper, Column1, Header, Description, FormContact, InputName, InputEmail, InputTelephone, InputCompany, InputCharge, SubmitButton, Column2, TextWrapper, HeaderMap, TextMap, MapImage} from './ContactUsElements'
import axios from 'axios';

const ContactUs = ({contactData}) => {

  const sendEmail = async(e) => {
    e.preventDefault(); 
    const formContact = document.getElementById("formContact");
    const formData = new FormData(formContact);
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const BACKEND_AUTH_TOKEN = process.env.REACT_APP_FORM_UATH_TOKEN;
    try {
      await axios.post(BACKEND_URL+'/api/send-email', formData, {
          headers: {
            "Content-Type": "application/json",
            "Authorization":process.env.BACKEND_AUTH_TOKEN
          },
         }).then(response =>{
         console.log("Good response")
      })
    } catch (error) {
      console.error(error)
    }
  }
    
    
  return (
    <ContactContainer id="Locations">
      <ContactWrapper>
        <Column1>
          <Header>Contacto</Header>
          <Description> {contactData.contact_subtitle}</Description>
          <FormContact id="formContact" onSubmit={sendEmail}>
            <InputName placeholder="Nombre" id="name" type="text" name="name" required="required"/>
            <InputEmail placeholder="Correo Electronico" id="email" type="text" name="email" required="required"/>
            <InputTelephone placeholder="Numero de Telefono" id="phone" type="text" name="phone" required="required"/>
            <InputCompany placeholder="Nombre de Compañia" id="company" type="text" name="company" required="required"/>
            <InputCharge placeholder="Cargo" id="charge" type="text" name="charge" required="required"/>
            <SubmitButton value="Enviar" />
          </FormContact>
        </Column1>
        <Column2>
          <TextWrapper>
            <HeaderMap>Presencia</HeaderMap>
            {contactData.presencia.split(",").map((item,index)=>(
              <TextMap key={"presence"+index}>{item}</TextMap>
            ))}
          </TextWrapper>
          <MapImage src={PeruMap} />
        </Column2>
      </ContactWrapper>
    </ContactContainer>

  )
}

export default ContactUs;
