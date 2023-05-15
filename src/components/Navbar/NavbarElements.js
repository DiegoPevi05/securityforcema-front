import styled, {keyframes} from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaSearch, FaUserAlt, FaBriefcase} from 'react-icons/fa'


//This is the main component use
export const Nav = styled.nav`
  background:transparent;
  /*background: ${({scrollNav}) => (scrollNav ? 'linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%))' : 'transparent')};*/
  height:160px;
  /*margin-top:-80px;*/
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1rem;
  position:fixed;
  width:100%;
  top:0;
  z-index: 10;

  @media screen and ( max-width: 960px){
    transition 0.8s all ease;
  }
`
//Container of Navbar use
export const NavbarContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:160px;
  z-index:1;
  width:100%;
  padding:0 0px;
`
//Header of the WebPage
export const NavHeader = styled.ul`
  display:flex;
  height:60%;
  width:100%;
  align-items:center;
  justify-content:space-between;
  list-style:none;
  text-align: center;
  padding:0 20vw;
  background-color:var(--Secondary);
  @media screen and (max-width: 768px){
    display:none;
  }
`
//NavMenu use for Menu of Options
export const NavMenu = styled.ul`
  display:flex;
  height:40%;
  width:100%;
  align-items:center;
  justify-content:flex-start;
  list-style:none;
  text-align: center;
  padding:${({fullLength}) => (fullLength ? '0' : '0 20vw')};
  
  background-color:var(--Primary);
  border-top:1px solid #fff;
  border-bottom:1px solid #fff;
  transition 0.8s all ease;

  @media screen and (max-width: 768px){
    display:none;
    transition 0.8s all ease;
  }

`
//Logo Component Link
export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor:pointer;
  font-size: 1.5rem;
  display: flex;
  align-items:center;
  margin-left: 25px;
  font-weight: bold;
  text-decoration: none;
`
export const LogoImg = styled.img`
  height:120px;
  width:120px;
  padding:0;
  transition:all 0.2s ease-in-out;

  &:hover{
    opacity:1;
    transition:all 0.2s ease-in-out;
  }
`


export const LinksContainer = styled.div`
  display:flex;  
  height:100%;
  position:relative;
`

export const FlagImg = styled.img`
  position:absolute;
  right:10px;
  top:10px;
  height:30px;
  opacity:0.5;
  transition:all 0.2s ease-in-out;

  &:hover{
    opacity:1;
    transition:all 0.2s ease-in-out;
  }
`

export const NavItemLink = styled.div`
  display:flex;
  height:100%;
  flex-direction:row;
  align-items:flex-end;
  justify-content:space-between;
  padding:5px 15px;
`


export const NavBtn = styled.p`
  display:flex;
  color:var(--white);
  font-weight:bold;
  font-size:1.5vh;
  text-decoration:none;
  cursor: pointer;

  &:hover {
    color:var(--Primary);
    transition 0.8s all ease;
  }
`

export const NavSearchBar = styled.input`
  height:100%;
  width:100%;
  text-decoration:none;
  border:none;
  background-color:var(--Secondary);
  opacity:0.4;
  font-size:2vh;
  color:var(--white);
  transition 0.8s all ease;
  padding:5px 20vw;

  &:hover {
    color:var(--white);
    transition 0.8s all ease;
  }
`
export const NavLinks = styled(LinkR)`
  display:flex;
  color:var(--white);
  font-weight:bold;
  font-size:1.5vh;
  text-decoration:none;
  cursor: pointer;
  
  &:hover {
    color:var(--Primary);
    transition 0.8s all ease;
  }
`
//Icons per Link Menu
export const SearchIcon = styled(FaSearch)`
  font-size:2vh;
  margin-right:10px;
  margin-bottom:5px;
  color:var(--Primary);
`
export const CaseIcon = styled(FaBriefcase)`
  font-size:2vh;
  margin-right:10px;
  margin-bottom:5px;
  color:var(--Primary);
`

export const UserIcon = styled(FaUserAlt)`
  font-size:2vh;
  margin-right:10px;
  margin-bottom:5px;
  color:var(--Primary);
`


//MobileIcon of the view Mobile
export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width:768px){
    display:block;
    position:absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size:1.8rem;
    cursor: pointer;
    color:var(--Primary);
  }
`

//Every item on Menu Item
export const NavItem = styled.li`
  height:80px;
  position:relative;
`

const SlideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
export const DropdownList = styled.ul`
  display:${({openSubTabs}) => (openSubTabs ? "flex" : "none")};
  flex-direction:column;
  position:absolute;
  top:70px;
  left:0;
  width:300px;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: red;
  z-index: -1;

  animation: ${SlideDown} 1000ms forwards;
  animation-direction:normal;
  transition:all 0.2s ease-in-out;
`;


export const ItemDropDownList = styled(LinkR)`
  width:100%;
  height:50px;
  background:var(--Secondary);
  color:white;
  white-space:nowrap;
  padding: 10px 15px;
  font-size:16px;
  cursor:pointer;
  text-decoration:none;
  text-align:left;
  transition:all 0.2s ease-in-out;

  &:hover{
    background:var(--Primary);
    color:#fff;
    transition:all 0.2s ease-in-out;
  }
`
//Every Item on Menu Item
//export const NavLinks

export const NavTitleDropDown = styled(LinkS)`
  color:var(--white);
  font-weight:bold;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding:0 1rem;
  height: 100%;
  cursor: pointer;
  position:relative;
  font-size:1.5vh;
  
  &:hover {
    color:var(--Secondary);
    transition 0.8s all ease;

    &::after{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 16px;
    left: 10px;
    background-color: var(--Secondary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
`

