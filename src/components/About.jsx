import React from 'react';
import style from './About.module.css'

function About() {
  return (
    <div>
        <h1>Hi, I am Agustin Tiseira </h1>

        <h2> 
            this application was built 100% with react, javaScript, CSS and html ...
        </h2>

      <div className={style.imagenes}>
          <img  className={style.logos} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"  alt="logo de react"/>
          <img className={style.logos} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png" alt="logo de javaScript"/>
          <img className={style.logos} src="https://www.iconninja.com/files/752/618/436/css-internet-technology-website-web-style-css3-icon.svg" alt="logo CSS"/>
          <img className={style.logos} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" alt="logo HTML"/>
      </div>

        <h3>do you want to see more?</h3>

        <div className={style.links}>
        <a href="https://www.linkedin.com/in/agust%C3%ADn-tiseira-04b5261b8/">
            <img className={style.link} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png" alt=" logo Linkedin" />
        </a>
        <a href="https://github.com/AgustinTiseira">
            <img className={style.link} src="https://elfreneticoinformatico.com/wp-content/uploads/2017/10/GitHubLogo-676x251.png" alt="logo Github"/>
        </a>
        </div>
    </div>
  );
};

export default About;
