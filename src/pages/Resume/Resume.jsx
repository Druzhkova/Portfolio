import React from 'react';
import { Header, Main, Title, Heading } from '../components'
import styled from 'styled-components';
import { portrait } from '../../assets';

export function Resume() {
  let lang = localStorage.getItem('lang') || 'EN';

  return (
    <>
      <Header />
      <Main>
        <Heading textSecondary={ lang === 'EN' ? 'Resume' : 'Резюме' } />
       <StyledResume>
          <Container>
            <InnerBlock>
              <StyledTitle>
                { lang === 'EN' ? 'Work experience' : 'Опыт работы' }  
              </StyledTitle>
              { lang === 'EN' 
              ?
              <Block>
                <TextSecondary>Marketer</TextSecondary>
                <span>feb. 2019 - fed. 2020</span>
                <p>LLC Real Estate Agency "CUB"</p>
                <ul>
                  <li>Updating information of real estate objects</li>
                  <li>Management of an advertising company in Yandex Direct, Google AdWords, Google Analytics</li>
                  <li>Helping agents with any work questions</li>
                </ul>
                <br />
                <TextSecondary>Retail Banking Specialist</TextSecondary>
                <span>jan. 2018 - jan. 2019</span>
                <p>BNB-Bank</p>
                <ul>
                  <li>Carrying out operations with monetary funds</li>
                  <li>Drawing up cash statements</li>   
                  <li>Advise customers on financial services</li>
                </ul>
              </Block> 
              : 
              <Block>
                <TextSecondary>Маркетолог</TextSecondary>
                <span>фев. 2019 - фев. 2020г.</span>
                <p>ООО Агентство недвижимости «КУБ»</p>
                <ul>
                  <li>Обновление информации об объектах недвижимости</li>
                  <li>Управление рекламной компанией в Yandex Direct, Google AdWords, Google Analytics</li>
                  <li>Помощь агентам с любыми рабочими вопросами</li>
                </ul>
                <br />
                <TextSecondary>Специалист по ОРБУ</TextSecondary>
                <span>янв. 2018 - янв. 2019г.</span>
                <p>БНБ-Банк</p>
                <ul>
                  <li>Проведение операций с денежными средствами</li>
                  <li>Составление кассовой отчетности</li>   
                  <li>Консультирование клиентов по финансовым услугам</li>
                </ul>
              </Block> }
            </InnerBlock>
            <InnerBlock>
              <Title>
                { lang === 'EN' ? 'Education' : 'Образование' } 
              </Title>
              <Block>
                <TextSecondary>TeachMeSkills</TextSecondary>
                  <SubTitle>Front End: HTML, CSS и JavaScript</SubTitle>
                  <span>{ lang === 'EN' ? 'june - dec. 2020' : 'июн. - дек. 2020г.' }</span>
                  <br /><br />
                  <TextSecondary>HTMLAcademy</TextSecondary>
                  <SubTitle>JavaScript. { lang === 'EN' ? 'Professional Development of Web Interfaces' : 'Профессиональная разработка веб-интерфейсов' } </SubTitle>
                  <span>{ lang === 'EN' ? 'sept. - nov. 2020' : 'сен. - ноя. 2020г.' }</span>
                  <br /><br />
                  <TextSecondary>{ lang === 'EN' ? 'Belarusian State Economic University' : 'Белорусский государственный экономический университет' }</TextSecondary>
                  <SubTitle>{ lang === 'EN' ? 'Management, Economics and enterprise management' : 'Менеджмент, экономика и управление на предприятии' }</SubTitle>
                  <span>2015-2019</span>
              </Block>
            </InnerBlock>
            <InnerBlock>
              <Title>
                { lang === 'EN' ? 'Skills' : 'Навыки и умения' } 
              </Title>
              <Block>
                <TextSecondary>{ lang === 'EN' ? 'Acquired skills' : 'Приобретенные навыки' } </TextSecondary>
                <ul>
                  <li>JavaScript</li>   
                  <li>React</li>
                  <li>Redux</li>
                  <li>TypeScript</li>
                  <li>Webpack</li>
                  <li>GIT</li>    
                  <li>HTML/CSS</li>   
                </ul>
                <TextSecondary>{ lang === 'EN' ? 'Soft skills' : 'Личные качества' }</TextSecondary>
                { lang === 'EN' 
                ? 
                  <ul>
                    <li>Quickly assimilate of new information</li>   
                    <li>Responsibly approach the implementation of the tasks assigned to me</li>
                    <li>The desire for professional development</li>  
                  </ul>
                : 
                  <ul>
                    <li>Быстро усваиваю новую информацию</li>   
                    <li>Ответственно подхожу к выполнению поставленных передо мной задач</li>
                    <li>Стремлюсь к профессиональному развитию</li>  
                  </ul> }
              </Block>
            </InnerBlock>
          </Container>
        </StyledResume>
      </Main>
      <Footer></Footer>
    </>
  )
}

const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
`
const Inner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`
const Portrait = styled.div`
  min-width: 250px;
  height: 250px;
  margin: 0 100px;
  background: url(${portrait});
  border-radius: 50%;
  box-shadow: 0 0 1px #2e1f1a; 

  @media screen and (max-width: 1100px) {
    margin: 0 100px 32px;
  }
`

const AboutMe = styled.div`
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`

const TextSecondary = styled.h3`
  color: #eece1a;
`
const Block = styled.div`
  margin: 0 0 20px;
  background: #515151;
  padding: 1rem;
  height: 90%;
  border-bottom: #eece1a 5px solid;
  text-align: left;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`
const InnerBlock = styled.div`
  width: 32%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`
const SubTitle = styled.div`
  margin: 0;
`

const StyledTitle = styled(Title)`
  @media screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`
const Footer = styled.div`
  padding: 1rem;
  background: #2b2b2b;
  height: 60px; 
`