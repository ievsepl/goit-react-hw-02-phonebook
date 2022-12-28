import Box from '../Box/Box';
import React, { Component } from 'react';

class ContactList extends Component {
  //   state = { contacts: this.props.contacts };
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <Box key={id} border="1px solid red" as="li">
              {name} - {number}
              <button
                type="button"
                onClick={() => this.props.deleteContact(id)}
              >
                Delete
              </button>
            </Box>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
