import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme, mediaQueries} from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
      width: 60vw;
      height: 50vh;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
  `};
  
  ${mediaQueries(30)`
      width: 50vw;
      height: auto;
      backdrop-filter: none;
      margin-top:2rem;

  `};

  ${mediaQueries(20)`
      padding: 1rem;
      font-size: calc(0.5rem + 1vw);
  `};
`

const AboutPage = () => {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton/>
        <Main>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          <br /> <br/>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000.
          <br/> <br/>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Main>
        </Box>
    </ThemeProvider>
  )
}

export default AboutPage