const client = require("../db/connection");
const { ObjectId } = require("mongodb");

async function getContacts(req, res) {
  try {
    await client.connect();
    const db = client.db("contacts");
    const collection = db.collection("contacts");
    const contacts = await collection.find().toArray();
    res.status(200).send(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving contacts");
  }
}

async function getContact(req, res) {
  try {
    const contactId = new ObjectId(req.params.id);
    await client.connect();
    const db = client.db("contacts");
    const collection = db.collection("contacts");
    const contact = await collection.findOne({ _id: contactId });
    if (!contact) {
      res.status(404).send("Contact not found");
      return;
    }
    res.send(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving contact");
  }
}

module.exports = {
  getContacts,
  getContact,
};