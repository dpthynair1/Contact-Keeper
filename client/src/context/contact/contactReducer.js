
import {
  ADD_CONTACT,
  CONTACT_ERROR,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_ERRORS,
  GET_CONTACTS,
  CLEAR_CONTACTS
  
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload,...state.contacts ],
        loading: null
      };
      case GET_CONTACTS:
        return {
          ...state,
          contacts: action.payload,
          loading: null
        }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: null
      }
      case CLEAR_CONTACTS:
        return {
          ...state,
          contacts: null,
          filtered: null,
          error: null,
          current: null
        }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
      case UPDATE_CONTACT: 
      return {
          ...state,
          contacts : state.contacts.map(contact => 
            contact._id === action.payload._id ? action.payload : contact),
            loading: null
      }
      case FILTER_CONTACTS: 
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
        loading: null
      };
      case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
      case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      }
      

    default:
      return state;
  }
};
