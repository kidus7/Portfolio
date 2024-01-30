import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LET'S WORK TOGETHER</LinkTitle>
          <LinkItem href="mailto:kidusanteneh7@gmail.com">
            kidusanteneh7@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Created by Kidus</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/kidus7">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="www.linkedin.com/in/kidusanteneh7/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/__kidus7">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://facebook.com/kidusanteneh7">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
