import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {deleteContact} from "../js/actions/actionsContact"

const ContactCard = ({ contact, deleteContact, getPerson }) => {
  return (
    <div className="contact-card">
      <p className="card-title">{contact.name}</p>

      <div className="card-text">
        <h4>
          <i class="fas fa-mobile-alt">Phone:</i> 
        </h4>
        <p>{contact.phone}</p>
        <h4>
          <i class="fas fa-envelope">Email:</i> 
        </h4>
        <p>{contact.email}</p>
      </div>
      <div className="buttons">
        <Link to="/Edit_Contact">
        <input type="button" value="Edit" className="edit-button" onClick={()=>getPerson(contact)} />
        </Link>
        <input type="button" value="Delete" className="edit-button" onClick={()=>deleteContact(contact._id)} />
      </div>
    </div>
  );
};

export default connect(null, {deleteContact}) (ContactCard);
