import React from 'react';
import styled from 'styled-components';
import { Header, Main, Title, Heading } from '../components'
import { project1, project2, project3 } from '../../assets';

export function Portfolio() {
  let lang = localStorage.getItem('lang') || 'EN';

  return (
    <>
      <Header />
      <Main>
        <Heading textSecondary={ lang === 'EN' ? 'Portfolio' : 'Портфолио'} />
        <Title>
          { lang === 'EN' ? 'More projects can be viewed on ' : 'Больше проектов можно посмотреть на ' }<GitHub href="https://github.com/Druzhkova">github</GitHub>
        </Title>
        <Card>
          <ContainerImage href="https://druzhkova.github.io/Match-match-game/">
            <Img src={project1}/>
            <Background />
          </ContainerImage>
          <Details>
            <CardTitle>
              { lang === 'EN' ? 'Memory game' : 'Игра на запоминание' }
            </CardTitle>
            <CardSubTitle>
              { lang === 'EN' ? 'Used' : 'Использовались' }: react, react-router, redux, styled-components, middleware
            </CardSubTitle>
            <Description>
              { lang === 'EN'
               ? 'The project was created during training on the course from TeachMeSkills.'
               : 'Проект создан во время обучения на курсе от TeachMeSkills.' }
              <p>{ lang === 'EN'
               ? 'Upon entering the game, the user sees a short rules of the game. The player can choose type of card backs and difficulty of the game.'
               : 'При входе в игру пользователь видит краткие правила игры. Игрок может выбрать тип рубашки карт и сложность игры.' }</p>
              <p>{ lang === 'EN'
               ? 'After the start, a timer starts working, which counts down the time from the start of the game. By clicking on a card - it turns over, matching cards disappear, if a pair does not match - both cards are turned face down. The distribution of cards is always random.'
               : 'После старта начинает работать таймер, отсчитывающий время от старта игры. При нажатии на карту - она ​​переворачивается, совпадающие карты исчезают, если пара не совпадает - обе карты переворачиваются лицевой стороной вниз. Карты выдаются всегда случайным образом.' }</p>
              { lang === 'EN'
               ? 'The application maintains a table of records - TOP5 results. The high score table and player profile are stored in window.localStorage.'
               : 'В приложении ведется таблица рекордов - ТОП5 результатов. Таблица рекордов и профиль игрока хранятся в window.localStorage.' }
            </Description>
            <LinkToGithub>
              <Link href="https://github.com/Druzhkova/Match-match-game">{ lang === 'EN' ? 'View code' : 'Посмотреть код' } →</Link>
            </LinkToGithub>
          </Details>
        </Card>

        <Card>
          <ContainerImage href="https://druzhkova.github.io/Keksobooking/">
            <Img  src={project2}/>
            <Background />
          </ContainerImage>
          <Details>
            <CardTitle>
            { lang === 'EN' ? 'Keksobucking' : 'Кексобукинг' }
            </CardTitle>
            <CardSubTitle>
            { lang === 'EN' ? 'Used' : 'Использовались' }: JavaScript, HTML, CSS
            </CardSubTitle>
            <Description>
              { lang === 'EN'
               ? 'The project was created during training on the course from HTMLAcademy.'
               : 'Проект создан во время обучения на курсе от HTMLAcademy.' }
              <p>{ lang === 'EN'
               ? 'Keksobucking is a service for placing ads for renting real estate. Users can post ads for their properties, view and filter ads already posted.' 
               : 'Кексобукинг - это сервис по размещению объявлений об аренде недвижимости. Пользователи могут размещать объявления о своей недвижимости, просматривать и фильтровать уже размещённые объявления.'}</p>
              <p>{ lang === 'EN'
               ? 'All js files are separate modules in IIFE.'
               : 'Все файлы js - это отдельные модули в IIFE.' }</p>
            </Description>
            <LinkToGithub>
              <Link href="https://github.com/Druzhkova/Keksobooking">{ lang === 'EN' ? 'View code' : 'Посмотреть код' } →</Link>
            </LinkToGithub>
          </Details>
        </Card>

        <Card>
          <ContainerImage href="https://druzhkova.github.io/TODO-list/#/">
            <Img src={project3} />
            <Background />
          </ContainerImage>
          <Details>
            <CardTitle>
              { lang === 'EN' ? 'Todo list' : 'Список дел' }
            </CardTitle>
            <CardSubTitle>
            { lang === 'EN' ? 'Used' : 'Использовались' }: react, react-router, redux, styled-components, middleware
            </CardSubTitle>
            <Description>
              { lang === 'EN'
               ? 'The project was created during training on the course from TeachMeSkills.'
               : 'Проект создан во время обучения на курсе от TeachMeSkills.' }
              <p>{ lang === 'EN'
               ? 'You can add a task. Each todo has delete and done buttons (done button works the same as canceling an action).'
               : 'Вы можете добавить задачу. Каждая задача имеет кнопки удаления и выполнения (кнопка выполнения работает так же, как отмена действия).' }</p>
              <p>{ lang === 'EN'
               ? 'It is possible to display all todos, only done or only active.'
               : 'Можно отображать все задачи, только выполненные или только активные.' }</p>
               <p>{ lang === 'EN'
               ? 'Heder displays the date, time and weather in Minsk.'
               : 'Хедер отображает дату, время и погоду в Минске.' }</p>
              <p></p> 
            </Description>
            <LinkToGithub>
              <Link href="https://github.com/Druzhkova/TODO-list">{ lang === 'EN' ? 'View code' : 'Посмотреть код' } →</Link>
            </LinkToGithub>
          </Details>
        </Card>
      </Main>
      <Footer></Footer>
    </>
  )
};

const Card = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  background: #515151;
  font-size: 14px;
  margin-bottom: 1.5em;

  @media screen and (min-width: 1100px) {
    flex-direction: row;
    max-width: 100em;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`
const ContainerImage = styled.a`
  min-height: 25em;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 1100px) {
    flex-basis: 40%;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 5s;
  object-fit: cover;

  &:hover {
    transform: scale(1.5);
    opacity: 0.3;
  }
`
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #eece1a;
  transition: transform 5s;
`
const Details = styled.div`
  padding: 1em 2em;
  position: relative;

  @media screen and (min-width: 1100px) {
    flex-basis: 60%;
    padding: 2em 3em;
  }
`
const CardTitle = styled.h2`
  font-size: calc(14px + 1.5vw);
  margin-bottom: 25px; 
  line-height: 1;
`

const CardSubTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 400;
  text-transform: uppercase;
  color: #a2a2a2;
  margin: 1em 0 1.5em 0;
`
const Description = styled.p`
  font-size: 1.2em;
  position: relative;

  &::first-letter {
    margin-left: 1em;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 0.5em;
    height: 1.7em;
    background: #eece1a;
    border-radius: 2em;
  }
`

const LinkToGithub = styled.div`
  font-size: 1.2em;
  text-align: right;
  font-weight: bold;
  margin-top: 1em;
`
const GitHub = styled.a`
  color: #eece1a;
  cursor: pointer; 
`
const Link= styled.a`
  position: relative;
  color: #eece1a;
  cursor: pointer;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5em;
    width: 100%;
    height: 3px;
    background:#eece1a;
    transform: scale(0);
    transform-origin: left;
    transition: transform 0.5s;
  }

  &:hover::before{
    transform: scale(1);
  }
`

const Footer = styled.div`
  padding: 1rem;
  background: #2b2b2b;
  height: 60px; 
`