import React, {Component, PropTypes} from 'react';

import {ContactItem} from 'components/contacts';


export default class ContactsList extends Component {
  render () {
    return (
      <ul>
        {this.props.contacts.map(
          (contact) =>
            <ContactItem key={contact.email} name={contact.name} email={contact.email} />
        )}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};
