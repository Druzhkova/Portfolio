import React from 'react';
import { Header, Main, Title, Heading } from '../components'
import styled from 'styled-components';
import { teachmeskills, HTMLAcademy } from '../../assets';

export function Resume() {
  let lang = localStorage.getItem('lang') || 'EN';

  return (
    <>
      <Header />
      <Main>
      <Heading textSecondary={ lang === 'EN' ? 'Resume' : 'Резюме' } />
       <StyledResume>
          <InnerBlock>
            <StyledTitle>
              { lang === 'EN' ? 'Education' : 'Образование' } 
            </StyledTitle>
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
              <StyledTitle>
                { lang === 'EN' ? 'Skills' : 'Навыки и умения' } 
              </StyledTitle>
              <Block>
                <TextSecondary>{ lang === 'EN' ? 'Acquired skills' : 'Приобретенные навыки' } </TextSecondary>
                <ul>
                  <li>JavaScript</li>   
                  <li>React</li>
                  <li>Redux</li>
                  <li>Gulp</li>
                  <li>Webpack</li>
                  <li>GIT</li>    
                  <li>HTML/Pug</li>
                  <li>CSS/Sass</li>
                  <li>English - Intermediate</li>   
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
              <TextSecondary>JS developer</TextSecondary>
              <span>apr. 2021 — may 2021</span>
              <p>BGaming</p>
              <ul>
                <li>Game development</li>
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
              <TextSecondary>JS developer</TextSecondary>
              <span>апр. 2021 - май 2021г.</span>
              <p>BGaming</p>
              <ul>
                <li>Разработка игр</li>
              </ul>
            </Block> }
          </InnerBlock>
          <div>
              <StyledTitle>{ lang === 'EN' ? 'Certificates' : 'Cертификаты' }</StyledTitle>
              <ContainerImage>
                <Img src={teachmeskills} />
              </ContainerImage>
              <ContainerImage>
                <Img src={HTMLAcademy} />
              </ContainerImage>
          </div>
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
const TextSecondary = styled.h3`
  color: #eece1a;
`
const Block = styled.div`
  background: #515151;
  padding: 1rem;
  height: 90%;
  border-bottom: #eece1a 5px solid;
  text-align: left;
  font-size: 1.2em;
`

const InnerBlock = styled.div`
  margin: 0 0 25px;
`
const SubTitle = styled.div`
  margin: 0;
`

const StyledTitle = styled(Title)`
  margin: 0.5em 0;
`
const Footer = styled.div`
  padding: 1rem;
  background: #2b2b2b;
  height: 60px; 
`
const ContainerImage = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 25px;
  cursor: pointer;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 5s;
  object-fit: cover;
`