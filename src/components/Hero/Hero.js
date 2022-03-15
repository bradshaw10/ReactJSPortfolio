import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Portfolio Website
      </SectionTitle>
      <SectionText>
        My name is Eoghan Bradshaw. I am an Irish developer based in Dubai. My Experience is as a Software Developer, specialising in Mobile Applications Development with 4+ years’ industry experience at Retail Integration Ltd, one of Ireland’s leading EPOS providers. Experience in mobile development through Xamarin Forms, Unity, Native Android through Java. In addition, I am currently studying to become certified in both Flutter and Kotlin, having created recreational projects in both. Aside from mobile, I have Full-Stack web experience through .Net Core and AngularTS. 
      </SectionText>
      <Button onClick={() => window.location = "https://docs.google.com/document/d/1wrOXIRyu-5wTEbQWuDxjK_57yANkpxPbyzPYsr_ajV4/edit?usp=sharing"}> View my CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;