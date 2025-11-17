import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Values from '../components/Values';
import Insights from '../components/Insights';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Process />
      <Insights />
      <Testimonials />
      <Values />
    </>
  );
};

export default HomePage;