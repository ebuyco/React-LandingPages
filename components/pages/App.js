import React from 'react';
import Theme from '../styles/Global';
import HomepageStyle from '../styles/HomepageStyle';
import Header from '../subcomponent/Header';

const App = () => (
  <div id="root">
    <Theme>
      <HomepageStyle>
        <Header />
      </HomepageStyle>
    </Theme>
  </div>
);

export default App;
