import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "Deepthy",
        email: "deep@gmail.com",
        phone: "123-456-777",
      },
      { id: "2", name: "Deept", email: "dee@gmail.com", phone: "123-456-777" },
      { id: "3", name: "aditya", email: "adi@gmail.com", phone: "123-456-777" },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Actions
  //Add contacts
  //Delete contacts
  //Set current contact
  //Clear current contact
  // Update contact
  // Filter contacts
  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
