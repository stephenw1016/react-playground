import React, {Component} from 'react';
import {render} from 'react-dom';

import 'styles/main.scss';

import {Contacts} from 'components/contacts';
import {Likes} from 'components/likes';


let contacts = [
  { name: "Tony Romo", email: "tromo@dallascowboys.com" },
  { name: "Dez Bryant", email: "dbryant@dallascowboys.com" },
  { name: "Dak Prescott", email: "dprescott@dallascowboys.com" },
  { name: "Dan Bailey", email: "dbailey@dallascowboys.com" },
  { name: "Jason Witten", email: "jwitten@dallascowboys.com" },
  { name: "Jerry Jones", email: "jjones@dallascowboys.com" }
];

class App extends Component {
  render () {
    return (
      <div>
        <Contacts contacts={contacts} />
        <Likes />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
