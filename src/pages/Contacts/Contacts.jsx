import React from 'react';
import styled from 'styled-components';
import { Header, Main, Title, Heading } from '../components'

export function Contacts() {
  let lang = localStorage.getItem('lang') || 'EN';

  return (
    <>
      <Header />
      <StyledMain>
        <Heading textSecondary={ lang === 'EN' ? 'Contacts' : 'Контакты' }/>
        <Title>
          { lang === 'EN' ? 'Preferred means of communication...' : 'Предпочитаемые способы связи...' }
        </Title>
        <Boxes>
          <Inner>
            <Contact>{ lang === 'EN' ? 'Phone:' : 'Телефон:' }</Contact> +375 (25) 542-76-45
          </Inner>
          <Inner>
            <Contact>{ lang === 'EN' ? 'Email:' : 'Эл. адрес:' }</Contact> druzhkova.vika.v@gmail.com
          </Inner>
        </Boxes>
      </StyledMain>
      <Footer></Footer>
    </>
  )
}

const StyledMain = styled(Main)`
  @media screen and (max-width: 910px) {
    align-items: center;
    text-align: center;
  }
`

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  
  @media screen and (max-width: 910px) {
    flex-direction: column;
  }
`

const Inner = styled.div`
  font-size: 2vw;
  width: 48%;
  cursor: pointer;
  border: 3px #fff solid;
  padding: 1.5rem 2.5rem;
  margin-bottom: 3rem;
  transition: all 0.5s ease-out;

  @media screen and (max-width: 910px) {
    width: 100%;
    font-size: 4vw;
    padding: 1rem 0.5rem;
    margin-bottom: 2rem;
  } 
`

const Contact = styled.span`
  color: #eece1a;
`

const Footer = styled.div`
  padding: 1rem;
  background: #2b2b2b;
  height: 60px; 
`