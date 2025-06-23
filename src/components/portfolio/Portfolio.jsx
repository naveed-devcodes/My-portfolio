import './portfolio.css';

import IMG1 from '../../assets/ACADEMIA-Project.jpg';
import IMG2 from '../../assets/Wiggles-Project.png';
import IMG3 from '../../assets/iWeather-Project.png';
import IMG4 from '../../assets/Music-Project.png';
import IMG5 from '../../assets/GoSchoolBox-Project.png';
import IMG6 from '../../assets/Glamezy-Project.png';
import React from 'react';

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'ACADEMIA',
      img: IMG1,
      description:
        'An educational platform offering a variety of online courses, allowing users to learn from experts and earn certificates. It provides an interactive space for people to access valuable information and enhance their skills.',
      technologies: 'React.Js | JavaScript | Html | CSS',
      link: 'https://academia-portal.vercel.app/',
      github: 'https://github.com/Naveed-Devcodes/ACADEMIA',
    },
    {
      id: 2,
      title: 'Wiggles',
      img: IMG2,
      description:
        'Wiggles is a pet management app that helps pet parents create unique pet profiles, securely store vaccination records, and generate QR codes for easy sharing.',
      technologies: 'React.js | Node.js | Express.js | MongoDB',
      link: 'https://wiggles.vercel.app/',
      github: 'https://github.com/Naveed-Devcodes/Wiggles',
    },
    {
      id: 3,
      title: 'iWeather',
      img: IMG3,
      description:
        'A web-based weather app that allows users to search for any location and get real-time weather updates, as well as check the weather for their current location.',
      technologies: 'React.js | Tailwind CSS',
      link: 'https://iweather-forecast.vercel.app/',
      github: 'https://github.com/Naveed-Devcodes/iWeather',
    },
    {
      id: 4,
      title: 'Music-Player',
      img: IMG4,
      description:
        'This project is a sleek, web-based music player with an attractive UI. It offers real-time updates for actions like play, pause, and forward, providing a smooth and interactive listening experience.',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://music-player-zone.vercel.app/',
      github: 'https://github.com/Naveed-Devcodes/Music-Player',
    },
    {
      id: 5,
      title: 'GoSchoolBox',
      img: IMG5,
      description:
        'GoSchoolBox is a SaaS platform that connects schools with tutoring companies, automating tutoring operations. Its user base grew from 50,000 to 1 million, highlighting its impact on student learning outcomes.',
      technologies: 'React.js | Node.js | Express.js | PostgreSQL',
      link: 'https://goschoolbox.com',
      github: 'https://github.com/Naveed-Devcodes',
    },
    {
      id: 6,
      title: 'Glamezy',
      img: IMG6,
      description:
        'Glamezy is a B2C marketplace that simplifies booking beauty and wellness services. Users can easily search for and pay for treatments at nearby venues, enhancing the overall booking experience.',
      technologies:
        'Nest.js | React.js | Redux | Docker | AWS | Stripe | PostgreSQL',
      link: 'https://glamezy.com/main/home',
      github: 'https://github.com/Naveed-Devcodes',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
