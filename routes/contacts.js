const express = require("express");
const router = express.Router();
const Contact = require("../models/contacts");

//@Api: http:localhost:5000/api/contacts
//@desc: Add new Contact
//@access: public
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const newcontact = new Contact({
    name,
    email,
    phone
  });
  newcontact
    .save()
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});


//@Api: http:localhost:5000/api/contacts
//@desc: Get All Contacts
//@access: public
router.get("/", (req, res) => {
  Contact.find()
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});

//@Api: http:localhost:5000/api/contacts/id
//@desc: Get Contact By ID
//@access: public
router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Contact.findOne({ _id }).then(contact => res.send(contact));
});

//@Api: http:localhost:5000/api/contacts/id
//@desc: Delete Contact
//@access: public
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Contact.findOneAndDelete({ _id })
    .then(contact => res.send("success"))
    .catch(err => res.send(err));
});

//@Api: http:localhost:5000/api/contacts/id
//@desc: Edit Contact
//@access: public
router.put("/:_id", (req, res) => {
  const { _id } = req.params;
  const { name, email, phone } = req.body;
  Contact.findByIdAndUpdate({ _id }, { $set: { name, email, phone } })
    .then(contact => res.send('contact modifieded'))
    .catch(err => res.send(err));
});

module.exports = router;
