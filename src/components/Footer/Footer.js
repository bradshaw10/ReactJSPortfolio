import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+959889461'>+959889461 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:eoghanbradshaw@gmail.com'>eoghanbradshaw@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <div>This Website was built using React <DiReact size="2rem" /></div>
    </FooterWrapper>

  );
};
export default Footer;
