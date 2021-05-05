// const db = require("./db");
const contacts = require("./schemas/contact");

// const getCollection = async (db, name) => {
//   const client = await db;
//   const collection = await client.db().collection(name);
//   return collection;
// };

const listContacts = async () => {
  const result = await contacts.find();
  return result;
};

const getContactById = async (contactId) => {
  const results = await contacts.findById(contactId);
  return results;
};

const removeContact = async (contactId) => {
  const result = await contacts.findByIdAndRemove(contactId);
  return result;
};

const addContact = async (body) => {
  const result = await contacts.create(body);
  return result;
};

const updateContact = async (contactId, body) => {
  const result = await contacts.findByIdAndUpdate(
    contactId,
    { ...body },
    { new: true }
  );
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
