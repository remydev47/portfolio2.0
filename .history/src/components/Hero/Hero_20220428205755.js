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
     <SectionText>
       My purpose as Developer is to help Established and Aspiring Organisation to build Robust Software and take their Organisation to the next level using Latest Technologies such us React, Nextjs, Nodejs
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;