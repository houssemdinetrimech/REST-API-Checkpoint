import axios from "axios";
import { GET_CONTACTS } from "../constants/actionsTypes";

//Get All
export const getContacts = () => dispatch => {
  axios
    .get("/api/contacts")
    .then(res => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch(err => console.log(err));
};

//Add Contact
export const addContact = newcontact => dispatch => {
  axios
    .post("/api/contacts", newcontact)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};

// Delete Contact
export const deleteContact = id => dispatch => {
  axios
    .delete(`/api/contacts/${id}`)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};

//Edit Contact
export const editContact = (id, updateContact) => dispatch => {
  axios
    .put(`/api/contacts/${id}`, updateContact)
    .then(res => dispatch(getContacts()))
    .catch(err => console.log(err));
};
