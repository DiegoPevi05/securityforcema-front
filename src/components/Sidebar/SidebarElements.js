import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position:fixed;
  z-index: 999;
  width:100%;
  height:100%;
  background: linear-gradient(315deg, hsl(75, 65%, 48%), hsl(168, 7%, 13%));
;
  display: grid;
  align-items:center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top:${({isOpen}) => (isOpen ? '0' : '100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position:absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline:none;  
`;

export const SidebarWrapper = styled.div`
  color:#fff;
`

export const SidebarMenu = styled.ul`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows: repeat(6,80px);
  text-align:center;

  @media screen and (max-width= 480px){
    grid-template-rows:repeat(6,60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display:flex;
  aling-items:center;
  justify-content:center;
  text-decoration:none;
  font-size: 1.5rem;
  list-style:none;
  transition: 0.2s ease-in-out;
  text-decoration:none;
  color:#fff;
  cursor:pointer;

  &:hover {
    color: hsl(207, 95%, 40%);
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display:flex;
  justify-content:center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius:50px;
  background:var(--Primary);
  white-space:nowrap;
  padding: 10px 22px;
  font-size:16px;
  outline:none;
  border:none;
  cursor:pointer;
  transition:all 0.2s ease-in-out;
  text-decoration:none;
  font-size:1rem;
  font-weight:bold;
  color:#fff;

  &:hover{
    transition:all 0.2s ease-in-out;
    background:var(--Secondary);
    color:#fff;
  }
`;
