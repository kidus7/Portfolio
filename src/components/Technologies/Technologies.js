import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Btn3,
} from "../../styles/GlobalComponents";
import { CgChevronDoubleDownO } from "react-icons/cg";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Link from "next/link";

const Technologies = () => (
  <Section id="tech">
    <Btn3>
      <Link href="#tech" legacyBehavior>
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I'm a fullstack web developer with expertise in React.js, Redux, Next.js, and Material-UI for frontend development. On the backend, I wield Node.js and Express.js to craft robust solutions. I'm skilled in clean database integration and adhere to Agile practices. Let's turn ideas into reality with code.
    </SectionText>
    <List>
      <ListItem>
        <DiReact
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Experience with
            </span>{" "}
            <br />
            <br /> React.js <br /> Next.js <br /> MaterialUI <br /> HTML 5 <br /> CSS <br /> JavaScript <br />{" "}
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> Node.js <br /> Express <br /> RESTful API Design <br /> Authentication and Authorization <br /> Deployment and Hosting <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>DataBase</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Experience with
            </span>{" "}
            <br /> <br /> MongoDB <br /> MySQL <br /> PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
