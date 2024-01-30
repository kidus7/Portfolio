import React from "react";
import {
  Section,
  SectionTitle,
  SectionDivider,
  SectionText,
  SectionText2,
} from "../styles/GlobalComponents";
import { projects } from "../constants/constants";
import Header2 from "../components/Header/Header2";
import { Container } from "../layout/LayoutStyles";
import Footer from "../components/Footer/Footer";

import {
  AboutContainer,
  AboutGrid,
  AboutText,
  ListAbout,
  TextContainer,
  ImageContainer,
  ProfileImage,
} from "../styles/AboutMeStyles";

const AboutMe = () => (
  <Container>
    <Header2 />
    <Section>
      <AboutContainer>
        <AboutGrid>
          <ImageContainer>
            <ProfileImage src="/images/myPro.jpeg" alt="Kidus" />
          </ImageContainer>
          <TextContainer>
            <SectionTitle>About Me</SectionTitle>
            <AboutText>
              I am a Software Developer with a degree in Software Engineering
              from AASTU. My expertise lies in creating Web Applications and
              Desktop Applications using various programming tools and
              languages. I have gained experience working at a software company,
              primarily focusing on interactive web application development.
              <br></br>
              I am a self-motivated software engineer who is passionate about
              crafting innovative programs that enhance organizational
              efficiency and effectiveness. My skills include:
              <br></br>
              <ListAbout>Web Development: </ListAbout> Node.js, React.js, HTML,
              CSS, and JavaScript
              <ListAbout>Database Management:</ListAbout> MongoDB, PostgreSQL,
              and MySQL
              <ListAbout>Software Development:</ListAbout> C/C++ and Java
              <ListAbout>Technologies & Tools:</ListAbout> Git and Visual Studio
              Code
              <br></br>
              I hold a certificate as a HelloCash API Integrator.
            </AboutText>
          </TextContainer>
        </AboutGrid>
      </AboutContainer>
    </Section>
    <Footer />
  </Container>
);

export default AboutMe;
