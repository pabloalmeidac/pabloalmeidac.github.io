import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import Intro from './Intro';
import { mediaQueries } from "./Themes";


const MainContainer = styled.div`
  background: ${ props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif ;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
  `};

    ${mediaQueries(30)`
      font-size:1em;
  `};
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index:1;
`

const Portfolio = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index:1;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`
const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
        height: 50%;
        right:0;
  
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;`
      : mediaQueries(50)`
        height: 0;
        width: 0;
  `};
`

const Main = () => {
  const mq = window.matchMedia("(max-width: 50em)").matches;

  const [click, setClick] = useState(false);
  
  useEffect(() => {
    setClick(!click);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer>
      <DarkDiv click={click}/>
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        {mq ? (
          <SocialIcons theme='light' />
        ) : (
          <SocialIcons theme={click ? 'dark' : 'light'}/>
        )}
        {mq ? (
          <Contact click={+click} target="_blank" to={{pathname:"mailto:pabloalmeidacti@gmail.com"}}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap= {{ scale: 0.9 }}
          >
            Diga oi...
          </motion.h2>
        </Contact>
        ) : (
          <Contact click={false} target="_blank" to={{pathname:"mailto:pabloalmeidacti@gmail.com"}}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap= {{ scale: 0.9 }}
          >
            Diga oi...
          </motion.h2>
        </Contact>
        )}
        {mq ? (
          <Portfolio click={+click} to="/portfolio">
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap= {{ scale: 0.9 }}
            >
              Portfolio
            </motion.h2>
        </Portfolio>
        ) : (
          <Portfolio click={+false} to="/portfolio">
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap= {{ scale: 0.9 }}
            >
              Portfolio
            </motion.h2>
        </Portfolio>
        )}
        <BottomBar>
          <ABOUT to="/about" click={mq ? +false : +click}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap= {{ scale: 0.9 }}
            >
              Sobre
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap= {{ scale: 0.9 }}
          >
            Minhas habilidades
          </motion.h2>
        </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  )
}

export default Main;