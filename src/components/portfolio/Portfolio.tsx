import './portfolio.css';
const data = [
  {
    id: 1,
    image: 'https://raw.githubusercontent.com/pabloalmeidac/project-recipes-app/pabloalmeidac/src/images/pc%20login.png',
    title: 'Um app de receitas com layout de dispositivos móveis',
    github: 'https://github.com/pabloalmeidac/project-recipes-app',
    type:'frontend',
    tags:['ReactJS','LocalStorage','Bootstrap','ContextAPI'],
    demo: 'https://recipes-app-woad.vercel.app/'
  },
  {
    id: 2,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um jogo de perguntas e respostas baseado no jogo Trivia',
    github: 'https://github.com/pabloalmeidac/project-trivia-redux',
    type:'frontend',
    tags:['ReactJS','CSS','redux'],
    demo: 'https://project-trivia-redux-psi.vercel.app/'
  },
  {
    id: 3,
    image: 'https://raw.githubusercontent.com/pabloalmeidac/delivery-app/main/assets/readme/cliente_home.png',
    title: 'Um app fullstack de delivery de bebidas',
    github: 'https://github.com/pabloalmeidac/delivery-app',
    type:'fullstack',
    tags:['ReactJs','NodeJS', 'MySQL', 'Sequelize'],
    demo: ''
  },
  {
    id: 4,
    image: 'https://raw.githubusercontent.com/pabloalmeidac/project-blogs-api/pabloalmeidac-sd-015-a-project-blogs-api/doc.png',
    title: 'API de posts de blog seguindo os princípios do REST',
    github: 'https://github.com/pabloalmeidac/project-blogs-api',
    type:'backend',
    tags:['NodeJS', 'Express', 'Sequelize', 'JWT', 'MySQL', 'JOI', 'Dotenv'],
    demo: ''
  },
  {
    id: 5,
    image: 'https://raw.githubusercontent.com/pabloalmeidac/project-store-manager/pabloalmeidac-sd-015-a-store-manager/doc.png',
    title: 'Um Sistema de gerenciamento de vendas utilizando arquitetura MSC',
    github: 'https://github.com/pabloalmeidac/project-store-manager',
    type:'backend',
    tags:['NodeJS', 'MySQL', 'Express','Mocha', 'Chai', 'Sinon', 'Joi', 'Dotenv'],
    demo: ''
  },
  {
    id: 6,
    image: 'https://raw.githubusercontent.com/pabloalmeidac/trybewallet/pabloalmeidac-trybewallet/src/images/wallet.jpg',
    title: 'Um app de controle de gastos com conversor de moedas',
    github: 'https://github.com/pabloalmeidac/trybewallet',
    type:'frontend',
    tags:['ReactJS','CSS','Redux'],
    demo: ''
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projetos desenvolvidos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, tags }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <div className="hashtags">
                  { tags.map((t,id) => <div className='tags' key={id}>#{t}</div>) }
                </div>
                <div className="portfolio__item-links">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  { demo ? <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Ver Projeto</a> : null}
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};