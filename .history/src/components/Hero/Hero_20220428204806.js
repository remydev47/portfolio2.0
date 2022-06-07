import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      {/* Hello i do development services*/}
       Welcome To<br/>
       My Personal Portfolio
     </SectionTitle>
   </LeftSection>
 </Section>
);

export default Hero;