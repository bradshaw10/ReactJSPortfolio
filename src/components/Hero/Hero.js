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
        My name is Eoghan Bradshaw. I am an Irish developer based in Dubai. I have over five years of industry experience in Full-Stack web development and Mobile Applications development. In my Full-Stack roles, I have developed web applications using PHP, C# .Net, and Angular. I have also worked as a Mobile Application Developer, using Xamarin Forms, Unity, and Native Android development using Java.
I have demonstrated strong determination and leadership qualities throughout my career, working both in a team and solo. In my most recent role, I managed two separate development teams simultaneously, leading them to deliver successful projects on time and within budget. I enjoy learning and creating side projects in my spare time. Currently, I am pursuing certifications in Flutter and Kotlin. Most recently, I have passed Microsoft Azure AI-900 Certification with a score of 91%.

      </SectionText>
      <Button onClick={() => window.location = "https://docs.google.com/document/d/1wrOXIRyu-5wTEbQWuDxjK_57yANkpxPbyzPYsr_ajV4/edit?usp=sharing"}> View my CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;