import React, { Component, PropTypes } from 'react';

import { SearchBar, ContactsList } from 'components/contacts';


class Contacts extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <ContactsList contacts={this.props.contacts} />
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default Contacts;
