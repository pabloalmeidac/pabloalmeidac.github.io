import { motion } from 'framer-motion';
import './intro.css';
import CV from '../../assets/curriculum/CV_PABLO.pdf';
import ME from '../../assets/images/me.png';
import { CSocials } from './CSocials';
import { HiChevronDoubleDown } from 'react-icons/hi';

export const Intro = () => {
  return (
    <div className='container__intro'>
      <motion.div
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2 }}
        className='box'
      >
        <div className='subbox'>
          <motion.div 
            className='text'
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{ duration:1, delay:1.5 }}
          >
            <h1>Oi,</h1>
            <h3>Meu nome é Pablo Almeida.</h3>
            <h6>Sou Desenvolvedor Web Full Stack.</h6>
            <a href={CV} download className="btn-curriculo">Download CV</a>
          </motion.div>
        </div>
        <div className='subbox'>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{ duration:1, delay:1.5 }}
          >
            <img className="pic" src={ ME } alt="Profile Pic" />
          </motion.div>
        </div>
      </motion.div>
      <a href="#experience"><HiChevronDoubleDown className='scroll__down'/></a>
      <CSocials />
    </div>
  );
};