import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="News" onClick={toggle}>Noticias</SidebarLink>
          <SidebarLink to="Us" onClick={toggle}>Nosotros</SidebarLink>
          <SidebarLink to="Services" onClick={toggle}>Servicios de Seguridad</SidebarLink>
          <SidebarLink to="Industries" onClick={toggle}>Industrias</SidebarLink>
          <SidebarLink to="FAQ" onClick={toggle}>Preguntas Frecuentes</SidebarLink>
          <SidebarLink to="Locations" onClick={toggle}>Ubicaciones</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/joinus" onClick={toggle}>Unete a Nosotros</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
