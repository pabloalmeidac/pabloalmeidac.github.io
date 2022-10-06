import './contact.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import {  BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const {
  REACT_APP_EMAIL_SERVICE_ID: SERVICE_ID, 
  REACT_APP_EMAIL_TEMPLATE_ID: TEMPLATE_ID, 
  // eslint-disable-next-line no-undef
  REACT_APP_EMAIL_PUBLIC_KEY: PUBLIC_KEY} = process.env;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Entre em contato comigo</h5>
      <h2>Meu Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>pabloalmeidacti@gmail.com</h5>
            <a href="mailto:pabloalmeidacti@gmail.com" target="_blank" rel="noreferrer">Enviar Mensagem</a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>pabloalmeidac</h5>
            <a href="https://linkedin.com/in/pabloalmeidac" target="_blank" rel="noreferrer">Enviar Mensagem</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+5585992531067</h5>
            <a href="https://api.whatsapp.com/send?phone+5585992531067" target="_blank" rel="noreferrer">Enviar Mensagem</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu nome' required />
          <input type="email" name="email" placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

