import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'

import { Projects } from '../data/ProjectData';
import ProjectComponent from './ProjectComponent';
import { motion } from 'framer-motion';
import { mediaQueries } from "./Themes";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`
const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height:auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  ${mediaQueries(30)`
    padding-top: 7rem;
  `};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  ${mediaQueries(50)`
    grid-template-columns: 100%;
  `};
`

// Framer-motion config
const container = {
    hidden: {opacity:0},
    show: { opacity:1,
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  }

const ProjectPage = () => {
    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
          <Container>
            <LogoComponent />
            <PowerButton />
            <SocialIcons />
          <Center>
          <Grid>
          { Projects.map(project => <ProjectComponent key={project.id} project={project} />)}
          </Grid>
          </Center>
          </Container>
        </MainContainer>
    )
}

export default ProjectPage;