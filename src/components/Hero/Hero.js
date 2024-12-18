import React, { useEffect, useRef, useState } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      // Clear the content before each initialization
      // textRef.current.innerHTML = "";
      init(textRef.current, {
        showCursor: false,
        typeSpeed: 120,
        backSpeed: 30,
        loop: true,
        strings: ["Front-End", "Back-End", "Full-Stack"],
      });
    }
  }, []); // Empty dependency array ensures this runs once on mount
  

  const [lang, setLang] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_WELCOME_PORTFOLIO");
    if (data !== null) setLang(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_WELCOME_PORTFOLIO", JSON.stringify(lang));
  }, [lang]);

  var styleBorderEn = { width: "40px", margin: "10px", cursor: "pointer" };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There, I'm
          <br />
          <Span>Kidus Anteneh</Span>
          <Span2 style={{ marginLeft: "2rem" }} ref={textRef}></Span2> <br />
          <h5>Software Developer </h5>
          
        </SectionTitle>
        <SectionText2>
          A passionate software engineer dedicated to turning ideas into elegant and functional solutions. With a blend of creativity and technical expertise, I specialize in crafting software that not only meets the needs of today but also paves the way for the innovations of tomorrow.
          <br />
        </SectionText2>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/uc?export=view&id=1VcvS0b2mnixPKHkjCoXMxJMV6Fpd3B6y")
          }
        >
          <>My CV</>
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
