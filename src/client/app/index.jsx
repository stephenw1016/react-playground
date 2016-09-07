import React from 'react';
import {render} from 'react-dom';

import Likes from 'components/likes';

class AppComponent extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React!</p>
        <Likes />
      </div>
    )
  }
}

render(<AppComponent/>, document.getElementById('app'));
