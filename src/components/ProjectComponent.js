import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import { mediaQueries } from "./Themes";

const Box = styled(motion(NavLink))`
	width: calc(10rem + 15vw);
	text-decoration: none;
	height: 20rem;
	padding: 1rem;
	color: ${props => props.theme.text};
	border: 2px solid ${props => props.theme.text};
	backdrop-filter: blur(2px);
	box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
	cursor: pointer;

	display: flex;
	flex-direction: column;
	z-index:5;

	&:hover{
			color:${props => props.theme.body};
			background-color: ${props => props.theme.text};
			transition: all 0.3s ease;
	}

	${mediaQueries(50)`
    width:calc(60vw);
  `};

  ${mediaQueries(30)`
    height:18rem;
  `};

  ${mediaQueries(25)`
    height:14rem;
    padding:0.8rem;
    backdrop-filter: none;
  `};
`

const Image = styled.div`
	background-image: ${props => `url(${props.img})`};
	width:100%;
	height: 60%;
	background-size: cover;
	border: 1px solid transparent;
	background-position: center center;

	${mediaQueries(25)`
  	height:70%;
  `};

	${Box}:hover &{
		border:1px solid ${props => props.theme.body};
	}
`

const Title = styled.h2`
	color: inherit;
	padding: 0.5rem 0;
	padding-top:1rem;
	font-family: 'Karla',sans-serif;
	font-weight:700;

	${mediaQueries(40)`
  	font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.6em + 1vw);
  `};
`

const Description = styled.h3`
	padding: 0.5rem 0;
	padding-top:1rem;
	font-size: calc(0.8em + 0.3vw);
	font-family: 'Karla',sans-serif;
	font-weight: 500;
	border-bottom: 1px solid ${props => props.theme.text};

	${mediaQueries(25)`
  	font-size:calc(0.7em + 0.3vw);
  `};

  ${mediaQueries(20)`
  	font-size:calc(0.6em + 0.3vw);
  `};

	${Box}:hover &{
		border-bottom: 1px solid ${props => props.theme.body};
	}
`

const HashTags = styled.div`
	padding: 0.5rem 0;

	${mediaQueries(25)`
		font-size:calc(0.5em + 1vw);
	`};
`
const Tag= styled.span`
	margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);

  ${mediaQueries(25)`
  	font-size:calc(0.7em);
  `};
`

const Container = styled(motion.div)``;

const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
`
const LinkCode = styled(NavLink)`
	background-color: ${props =>props.theme.text};
	color: ${props =>props.theme.body};
	text-decoration: none;
	padding:0.5rem calc(2rem + 2vw);
	border-radius: 0 0 0 50px;
	font-size:calc(1em + 0.5vw);

	${Box}:hover &{
			background-color: ${props =>props.theme.body};
			color: ${props =>props.theme.text};
	}
`

const Git = styled(NavLink)`
	color: inherit;
	text-decoration: none;

	${Box}:hover &{
    &>*{
      	fill:${props =>props.theme.body};
    }
	}
`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const ProjectComponent = (props) => {
    const {name, description, tags, imgSrc, demo, github} = props.project;
    return (
        <Container variants={Item} >
          <Box target="_blank" to={{pathname: demo}}>
            <Title>{name}</Title>
            <Image img={imgSrc} />
            <Description>{description}</Description>
            <HashTags>
              { tags.map((t,id) => <Tag key={id}>#{t}</Tag>) }
            </HashTags>
						<Footer>
                <LinkCode to={{pathname: `${demo}`}} target="_blank">
                    Visitar
                </LinkCode>
                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        	</Box>
        </Container>
    )
}

export default ProjectComponent;