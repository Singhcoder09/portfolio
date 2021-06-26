import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There, I'm <br />
          Gagandeep Singh
        </SectionTitle>
        <SectionText>
        I am a Web Developer, My interests include technology, music, sports, games and the great outdoors. I pride myself in self-discipline and my thirst for efficiency. I also love sharing experiences, new discoveries, laughs, and smiles. Feel free to contact me or browse some of my projects using the links below.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;