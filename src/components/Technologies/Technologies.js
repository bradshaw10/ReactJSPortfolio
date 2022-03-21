import React from 'react';
import { DiAngularSimple, DiDotnet, DiDart } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
  <SectionDivider />
  <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      As mentioned, I have experience working as both a mobile applcations developer and also as full stack. As a mobile developer I have worked with Xamarin Forms, Flutter, Unity and Native Android. While working as Full Stack I have used two seperate stacks, a C# and AngularTS as well as a NestJS backend with  React Frontend.
    </SectionText>
    <List>
      <ListItem>
        <DiAngularSimple size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Angular and React. Developed using TypeScript and Javascript.
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiDotnet size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          .Net Core through C# and also NestJS using TypeScripts
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiDart size="3rem" />
        <ListTitle>Mobile</ListTitle>
        <ListParagraph>
          Cross platform development through Xamarin Forms, Flutter and Unity. Native development through Android, using both Java and Kotlin.
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
