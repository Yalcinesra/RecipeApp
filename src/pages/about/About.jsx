import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles'
import codingSvg from "../../assets/Profil.png"

const About = () => {
  return (
    <div>

      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>Esra Yalcin</span>
          </h1>
        </HeaderContainer>
        <InfoContainer >
          <h2>Hi, I'am Esra Yalcin</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>I am a graduate of Selcuk University Computer Systems teaching and worked as an information technologies teacher for 8 years. While I was learning C++ and Java programming languages during my university education, I also learned to use important web development tools such as HTML, CSS and Photoshop. Throughout my career, I have gained various experiences in computer technologies and computing. I worked as an IT leader at Deutsches Rotes Kreuz for 6 months, during which I was responsible for managing and developing the technology infrastructure.
          </h4>
          <h2>
            <a href="mailto:yalcinaceresra@gmail.com">Send email</a> :
            yalcinaceresra@gmail.com
          </h2>
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
}

export default About