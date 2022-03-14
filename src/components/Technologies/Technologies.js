import React from 'react';
import { DiAngularSimple, DiDotnet, DiDart } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
  <SectionDivider />
  <br />
    <SectionTitle>
      Title
    </SectionTitle>
    <SectionText>
      Done a few bits myself alri
    </SectionText>
    <List>
      <ListItem>
        <DiAngularSimple size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Bit of Angular, touch of React
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiDotnet size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Bit of C# .Net, touch of Nest
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiDart size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Bit of Xamarin, touch of Flutter
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
