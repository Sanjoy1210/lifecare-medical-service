import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Introduce from '../Introduce/Introduce';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Introduce />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;