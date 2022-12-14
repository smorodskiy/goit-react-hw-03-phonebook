import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { DeleteButton, Contact, ContactInfo, ContactList } from './Contacts.styled';

class Contacts extends Component {
  render() {
    const { contacts, onDeleteUser } = this.props;
    return (
      <ContactList>
        {contacts.map(contact => {
          return (
            <ContactInfo key={contact.id}>
              <Contact>
                {contact.name}: {contact.number}
              </Contact>
              <DeleteButton onClick={() => onDeleteUser(contact.id)}>Delete</DeleteButton>
            </ContactInfo>
          );
        })}
      </ContactList>
    );
  }
}

export { Contacts };

// Types
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
