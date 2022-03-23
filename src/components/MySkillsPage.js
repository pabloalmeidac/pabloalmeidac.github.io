import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import styled from 'styled-components';
import { Back, Front} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
  &>*{
      fill:${props => props.theme.body};
  }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
  color:${props => props.theme.body};
}
strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem;
}
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme= { lightTheme }>
      <Box>
      <LogoComponent theme='light'/>
      <SocialIcons theme='light'/>
      <PowerButton />
        <Main>
          <Title>
            <Front width={40} height={40} /> Front-end 
          </Title>
          <Description>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
          </Description>
          <Description>
            <strong>CONHECIMENTOS</strong>
            <p> Html, Css, Js, React, Redux, Context API, Hooks, Bootstrap.</p>
          </Description>
          <Description>
            <strong>FERRAMENTAS</strong>
            <p> VScode, Github, Slack.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Back width={40} height={40} /> Back-end
          </Title>
          <Description>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
          </Description>
          <Description>
            <strong>CONHECIMENTOS</strong>
            <p> MySQL, Nodejs, Express, REST, RESTful, ORM, JWT.</p>
          </Description>
          <Description>
            <strong>FERRAMENTAS</strong>
            <p> Insomnia, Heroku.</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage;