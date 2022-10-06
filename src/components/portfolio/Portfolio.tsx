import './portfolio.css';

const data = [
  {
    id: 1,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um app de receitas com layout de dispositivos móveis',
    github: 'https://github.com/pabloalmeidac/project-recipes-app',
    tags:['react','gsap','styled-components'],
    demo: 'https://recipes-app-woad.vercel.app/'
  },
  {
    id: 2,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um jogo de perguntas e respostas baseado no jogo Trivia',
    github: 'https://github.com/pabloalmeidac/project-trivia-redux',
    tags:['react','gsap','styled-components'],
    demo: 'https://project-trivia-redux-psi.vercel.app/'
  },
  {
    id: 3,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um app de receitas com layout de dispositivos móveis',
    github: 'https://github.com/pabloalmeidac/project-recipes-app',
    tags:['react','gsap','styled-components'],
    demo: 'https://recipes-app-woad.vercel.app/'
  },
  {
    id: 4,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um jogo de perguntas e respostas baseado no jogo Trivia',
    github: 'https://github.com/pabloalmeidac/project-trivia-redux',
    tags:['react','gsap','styled-components'],
    demo: 'https://project-trivia-redux-psi.vercel.app/'
  },
  {
    id: 5,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um app de receitas com layout de dispositivos móveis',
    github: 'https://github.com/pabloalmeidac/project-recipes-app',
    tags:['react','gsap','styled-components'],
    demo: 'https://recipes-app-woad.vercel.app/'
  },
  {
    id: 6,
    image: 'https://github.com/pabloalmeidac/project-trivia-redux/raw/main-group-8-dev/src/answers.jpg?raw=true',
    title: 'Um jogo de perguntas e respostas baseado no jogo Trivia',
    github: 'https://github.com/pabloalmeidac/project-trivia-redux',
    tags:['react','gsap','styled-components'],
    demo: 'https://project-trivia-redux-psi.vercel.app/'
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
                <h3>{title}</h3>
                <div className="hashtags">
                  { tags.map((t,id) => <div className='tags' key={id}>#{t}</div>) }
                </div>
                <div className="portfolio__item-links">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Ver Projeto</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};