import React from 'react';
import { acomplishments } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


const Acomplishments = () => (
<Section>
<SectionTitle>Interests</SectionTitle>
<Boxes>
  {acomplishments.map((card, index) => (
    <Box key={index}>
      <BoxNum>{card.number}</BoxNum>
      <BoxText>{card.text}</BoxText>
    </Box>
  ))}
</Boxes>
</Section>
);

export default Acomplishments;
