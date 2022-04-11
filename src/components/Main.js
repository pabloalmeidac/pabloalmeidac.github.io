import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import Intro from './Intro';


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
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index:1;
`

const Portfolio = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index:1;
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
  color: ${props => props.click ? props.theme.body : props.theme.text};
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
`

const Main = () => {

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
        <SocialIcons theme={click ? 'dark' : 'light'}/>
        <Contact target="_blank" to={{pathname:"mailto:pabloalmeidacti@gmail.com"}}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap= {{ scale: 0.9 }}
          >
            Diga oi...
          </motion.h2>
        </Contact>
        <Portfolio to="/portfolio">
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap= {{ scale: 0.9 }}
          >
            Portfolio
          </motion.h2>
        </Portfolio>
        <BottomBar>
          <ABOUT to="/about" click={click}>
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