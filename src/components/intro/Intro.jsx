import './intro.css';

import { FaAward } from 'react-icons/fa';
import React from 'react';
import { VscFolderLibrary } from 'react-icons/vsc';
import img from '../../assets/Me.jpg';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Arham Zahid" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>
          <p>
            Full Stack Developer with around 4 years experience in building and
            optimizing web applications with high performance. Proﬁcient in
            designing scalable, eﬃcient, and secure systems using modern
            technologies such as React, Node.js, PostgreSQL, and AWS. Skilled in
            writing clean, maintainable code with a focus on software best
            practices, performance optimization, and technical innovation.
            Experienced in collaborating with cross-functional teams to deliver
            solutions that meet business objectives and enhance user experience.
            Passionate about solving complex problems, continuously improving
            development processes, and contributing to successful project
            outcomes.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
