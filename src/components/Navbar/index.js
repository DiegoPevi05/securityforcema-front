import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, LogoImg, MobileIcon, NavMenu, NavHeader, NavItem, LinksContainer, NavItemLink, NavLinks, NavBtn, NavSearchBar, SearchIcon, UserIcon, CaseIcon, FlagImg, NavTitleDropDown} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import PeruvianFlag from '../../data/images/PeruFlag.png';
import LogoMA from '../../data/images/M_A_LOGO_1_3.png'

const NavItemComponent = ({title, route}) => {
  return (
    <NavItem>
      <NavTitleDropDown to={route} smooth={true} duration={500} spy={true} exact='true' offset={-120} activeClass="active">{title}</NavTitleDropDown>
    </NavItem>
  )
}

const Navbar = ({toggle}) => {

  const DropDownTitles = [ {title: "Noticias", route: "News"}, {title: "Nosotros", route: "Us"},{title: "Servicios de Seguridad", route: "Services"}, {title: "Industrias", route: "Industries"}, {title: "Preguntas Frecuentes", route: "FAQ"}, {title: "Ubicaciones", route: "Locations"}];

  const [toggleInputSearch, setToggleInputSearch] = useState(false);

  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(false)
    } else {
      setScrollNav(true)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const openSearchBar = () => {
    setToggleInputSearch(!toggleInputSearch);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavHeader>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoImg src={LogoMA} />
            </NavLogo>
            <LinksContainer>
              <FlagImg src={PeruvianFlag} />
              <NavItemLink>
                <SearchIcon />
                <NavBtn onClick={openSearchBar}>{"Buscar"}</NavBtn>
              </NavItemLink>
              <NavItemLink>
                <CaseIcon />
                <NavLinks to="/joinus">{"Unete a Nosotros"}</NavLinks>
              </NavItemLink>
            </LinksContainer>
          </NavHeader>
          <NavMenu fullLength={toggleInputSearch}>
            {toggleInputSearch == false ?
              <>
                {DropDownTitles.map((item,index) => (
                  <NavItemComponent id={"indexnavbar"+index} title={item.title} route={item.route} />
                ))}
              </>
              :
              <NavSearchBar placeholder="¿Que estas buscando?"></NavSearchBar>
            }
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
