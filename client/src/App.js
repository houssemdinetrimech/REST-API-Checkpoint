import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";
import { connect } from "react-redux";
import {
  getContacts,
  addContact,
  editContact
} from "./js/actions/actionsContact";

class App extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    id: "",
    edit: false
  };
  handelChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  componentDidMount = () => {
    this.props.getContacts();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      edit:false
    });
  };

  add = () => {
    this.props.addContact(this.state);
    this.reset();
  };

  getPerson = person => {
    this.setState({
      name: person.name,
      email: person.email,
      phone: person.phone,
      id: person._id,
      edit: true
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/Contact_List">
            <button className="button">Contact List</button>
          </Link>
          <Link to="/Add_Contact">
            <button className="button" onClick={this.reset}>Add Contact</button>
          </Link>
        </div>
        <Switch>
          <Route
            path="/Contact_List"
            render={() => (
              <div className="contact-list">
                {this.props.contacts.map(el => (
                  <ContactCard contact={el} getPerson={this.getPerson} />
                ))}
              </div>
            )}
          />

          <Route
            path="/(Add_Contact|Edit_Contact)/"
            render={() => (
              <AddContact
                handelChange={this.handelChange}
                action={
                  this.state.edit
                    ? this.props.editContact(this.state.id, this.state)
                    : this.add
                }
                contact={this.state}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
const MapStateToProps = state => ({
  ...state
});

export default connect(MapStateToProps, {
  getContacts,
  addContact,
  editContact
})(App);
