import React from 'react';
import {render} from 'react-dom';

import LikesComponent from './components/likes/Likes.jsx';

class AppComponent extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React!</p>
        <LikesComponent />
      </div>
    )
  }
}

render(<AppComponent/>, document.getElementById('app'));
