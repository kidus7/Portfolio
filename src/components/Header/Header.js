import Link from "next/link";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { DiMaterializecss } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "16px",
          }}>

          <DiMaterializecss size="3rem" /> <Span>Portfolio</Span>

        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/projects" legacyBehavior>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" legacyBehavior>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/aboutme" legacyBehavior>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/kidus7">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/kidusanteneh7">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/__kidus7">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://facebook.com/kidusanteneh7">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
