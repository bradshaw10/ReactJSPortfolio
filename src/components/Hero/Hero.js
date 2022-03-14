import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Website
      </SectionTitle>
      <SectionText>
        Sure let me know what you think Frankie
      </SectionText>
    </LeftSection>
    <Button onClick={() => window.location = "https://google.com"}> Learn More</Button>
  </Section>
);

export default Hero;