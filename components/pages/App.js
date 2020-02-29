import React from 'react';
import Theme from '../styles/Global';
import HomepageStyle from '../styles/HomepageStyle';
import Header from '../subcomponent/Header';
import Banner from '../subcomponent/GiftBanner';
import Occasion from '../subcomponent/Occasion';

const App = () => (
  <Theme>
    <HomepageStyle>
      <Header />
      <Banner />
      <Occasion />
    </HomepageStyle>
  </Theme>
);

export default App;
