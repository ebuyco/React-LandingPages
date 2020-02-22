import React from 'react';
import Theme from '../styles/Global';
import HomepageStyle from '../styles/HomepageStyle';
import Header from '../subcomponent/Header';
import Banner from '../subcomponent/GiftBanner';

const App = () => (
  <Theme>
    <HomepageStyle>
      <Header />
      <Banner />
    </HomepageStyle>
  </Theme>
);

export default App;
