import React from 'react';
import Theme from '../styles/Global';
import HomepageStyle from '../styles/HomepageStyle';

const App = () => (
  <div id="root">
    <Theme>
      <HomepageStyle>
        <h2 className="classes_name">Test</h2>
      </HomepageStyle>
    </Theme>
  </div>
);

export default App;
