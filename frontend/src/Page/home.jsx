import React from 'react';
import Slider from './Slider';
import IconCard from './Iconcard';
import Service from './Service';
import ServicesImage from './ServicesImage';
import OurServices from './OurServices';
import Whatwork from './what_work';
import OurTeam from './OurTeam';
import Partner from './Partner';

function Home() {
  return (
   <>
   <Slider/>
   <IconCard/>
   <Service/>
   <ServicesImage/>
   <OurServices/>
   <Whatwork/>
   <OurTeam/>
   <Partner/>
   </>
  );
}

export default Home;
