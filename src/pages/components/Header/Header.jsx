import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { portrait, portraitSmall } from '../../../assets';

export function Header({ children = null}) {
  const [showMenu, setShowMenu] = useState(false);

  const history = useHistory();
  let lang = localStorage.getItem('lang') || 'EN';
  const { pathname } = useLocation();

  const getActivLink = useCallback((typeLink) => typeLink === pathname.slice(1) ? '#eece1a' : '#fff', [pathname]);

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu]);

  const onClickHomeLink = useCallback(() => {
    history.push('/home');
  }, [history]);

  const onClickResumeLink = useCallback(() => {
    history.push('/resume');
  }, [history]);

  const onClickPortfolioLink = useCallback(() => {
    history.push('/projects');
  }, [history]);

  const onClickContactsLink = useCallback(() => {
    history.push('/contacts');
  }, [history]);

  return (
    <Сontainer>
      { children }
      <Hamburger onClick={toggleMenu} visibilityMenu={showMenu}>
        <BtnLine visibilityMenu={showMenu}></BtnLine>
        <BtnLine visibilityMenu={showMenu}></BtnLine>
        <BtnLine visibilityMenu={showMenu}></BtnLine>
      </Hamburger>
      <Menu visibilityMenu={showMenu}>
        <MenuBranding visibilityMenu={showMenu}>
          <Portrait />
        </MenuBranding>
        <MenuNav visibilityMenu={showMenu}>
          <NavItem visibilityMenu={showMenu}> 
            <StyledLink onClick={onClickHomeLink} styleActive={getActivLink('home')}>
              { lang === 'EN' ? 'home' : 'главная' }
            </StyledLink>
          </NavItem>
          <NavItem visibilityMenu={showMenu}>
            <StyledLink onClick={onClickPortfolioLink} styleActive={getActivLink('projects')}>
              { lang === 'EN' ? 'portfolio' : 'портфолио' }
            </StyledLink>
          </NavItem>
          <NavItem visibilityMenu={showMenu}>
            <StyledLink onClick={onClickResumeLink} styleActive={getActivLink('resume')}>
              { lang === 'EN' ? 'resume' : 'резюме' }
            </StyledLink>
          </NavItem>
          <NavItem visibilityMenu={showMenu}>
            <StyledLink onClick={onClickContactsLink} styleActive={getActivLink('contacts')}>
              { lang === 'EN' ? 'contacts' : 'контакты' }
            </StyledLink>
          </NavItem>
        </MenuNav>
      </Menu>
    </Сontainer>
  )
}

const Сontainer = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
`
const Hamburger = styled.div`
  position: absolute;
  z-index: 3;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  ${(props) => props.visibilityMenu ? `
    transform: rotate(180deg);
  ` : ''}
`
const BtnLine = styled.div`
  width: 28px;
  height: 3px;
  margin: 0 0 5px 0;
  background: #fff;
  transition: all 0.5s ease-out;

  ${(props) => props.visibilityMenu ? `
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px); 
    }
    &:nth-child(2) {
      opacity: 0;  
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px); 
    }
  ` : ''}
`
const Menu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 1;
  visibility: hidden;

  ${(props) => props.visibilityMenu ? `
    visibility: visible;
  ` : ''}
`

const MenuBranding = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  background: #444;
  transform: translate3d(0, 100%, 0);
  transition: all 0.5s ease-out; 
  
  ${(props) => props.visibilityMenu ? `
    transform: translate3d(0, 0, 0);
  ` : ''}

  @media screen and (max-width: 768px) {
    float: none;
    width: 100%;
    min-height: 0;
    height: 35vh;
    transform: translate3d(100%, 0, 0);
    ${(props) => props.visibilityMenu ? `
      transform: translate3d(0, 0, 0);
    ` : ''}
  }
`
const Portrait = styled.div`
  width: 250px;
  height: 250px;
  background: url(${portrait});
  border-radius: 50%;
  box-shadow: 0 0 1px #2e1f1a;

  @media screen and (max-width: 768px) {
    background: url(${portraitSmall});
    width: 150px;
    height: 150px;
  }
`

const MenuNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  background: #373737;
  list-style: none;
  transform: translate3d(0, -100%, 0);
  transition: all 0.5s ease-out;
  
  ${(props) => props.visibilityMenu ? `
    transform: translate3d(0, 0, 0);
  ` : ''}

  @media screen and (max-width: 768px) {
    float: none;
    width: 100%;
    min-height: 0;
    height: 65vh;
    transform: translate3d(-100%, 0, 0);
    font-size: 24px;
    ${(props) => props.visibilityMenu ? `
      transform: translate3d(0, 0, 0);
    ` : ''}
  }
`
const NavItem = styled.li`
  transform: translate3d(600px, 0, 0);
  transition: all 0.5s ease-out;
  cursor: pointer;

  ${(props) => props.visibilityMenu ? `
    transform: translate3d(0, 0, 0); 
  ` : ''}
`

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  font-size: 30px;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: 300;
  color: ${(props) => props.styleActive};
  text-decoration: none;
  transition: all 0.5s ease-out;
  
  &:hover {
    color: #eece1a; 
  }

  &:nth-child(1) {
    transition-delay: 0.1s; 
  }

  &:nth-child(2) {
    transition-delay: 0.2s; 
  }

  &:nth-child(3) {
    transition-delay: 0.3s; 
  }

  &:nth-child(4) {
    transition-delay: 0.4s; 
  }
`