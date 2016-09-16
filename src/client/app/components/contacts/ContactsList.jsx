import React, { Component, PropTypes } from 'react';

import { ContactItem } from 'components/contacts';


class ContactsList extends Component {
  render () {
    return (
      <section>
        <ul>
          {this.props.contacts.map(
            (contact) =>
              <ContactItem key={contact.email} name={contact.name} email={contact.email} />
          )}
        </ul>
      </section>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default ContactsList;
