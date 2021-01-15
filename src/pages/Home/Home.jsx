import React, { useState, useCallback, useEffect } from 'react';
import { Header, Main, Title, Heading } from '../components'
import styled from 'styled-components';
import { background, gitHub, linkedin, whatsapp } from '../../assets';

export function Home() {
  const [activeButton, setActiveButton] = useState('EN');
  let lang = localStorage.getItem('lang') || 'EN';

  useEffect(() => {
    localStorage.getItem('lang') ? setActiveButton(localStorage.getItem('lang')) : localStorage.setItem('lang', activeButton);
  }, [activeButton]);

  const getActiveButton = useCallback((typeButton) => (activeButton === typeButton ? true : false), [activeButton]);

  const onClickRuButton = useCallback(() => {
    setActiveButton('RU');
    localStorage.setItem('lang', 'RU');
  }, []);

  const onClickEnButton = useCallback(() => {
    setActiveButton('EN');
    localStorage.setItem('lang', 'EN');
  }, []);

  return (
    <BgImg>
      <Inner>
        <Header>
          <ButtonGroup>
            <Button onClick={onClickRuButton} styleActive={getActiveButton('RU')}>RU</Button>
            <Button onClick={onClickEnButton} styleActive={getActiveButton('EN')}>EN</Button>
          </ButtonGroup>
        </Header>
        <StyledMain>
          <StyledHeading 
            heading={lang === 'EN' ? 'Victoriya' : 'Виктория'}
            textSecondary={lang === 'EN' ? 'Druzhkova' : 'Дружкова'} />
          <Title>
            {
              lang === 'EN'? 'Front-end developer' : 'Front-end разработчик'
            }
          </Title>
          <div>
            <a href="https://github.com/Druzhkova">
              <Icon src={gitHub} alt="gitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/druzhkova-vika/">
              <Icon src={linkedin} alt="linkedin"/>
            </a>
            <a href="https://wa.me/375255427645">
              <Icon src={whatsapp} alt="whatsapp"/>
            </a>
          </div>
        </StyledMain>
      </Inner>
    </BgImg>
  )
}

const BgImg = styled.div`
  height: 100%;
  background: url(${background});
  background-attachment: fixed;
  background-size: cover; 
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(68, 68, 68, 0.9); 
`

const StyledMain = styled(Main)`
  overflow: hidden;
  height: 100vh;
`

const ButtonGroup = styled.div`
  margin: 10px;
  box-shadow: 0 0 1px #2e1f1a;
  width: 98px;
  display: flex;
  background: rgba(73, 73, 73, 0.5);
  font-size: 18px;
  padding: 8px 12px;
`
const Button = styled.button`
  background: transparent;
  user-select: none;
  padding: 2px 10px;
  color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  outline: none;

  ${(props) => props.styleActive ? `
    color: white;
    background: #eece1a;
    box-shadow: 0 0 2px #2e1f1a;
  ` : ''}
`

const StyledHeading = styled(Heading)`
  margin-top: 20vh;
`

const Icon =  styled.img`
  padding: 2px;
  margin: 0 0.4rem;
  width: 34px;
  height: 34px;
  cursor: pointer;
`
