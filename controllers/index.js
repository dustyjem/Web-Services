// // const ekeneRoute = (req, res) => {
// //     res.send('Ekene Okeke');
// // }

// const mongodb = require('../controllers/index.js');
// const mariahRoute = (req, res) => {
//     res.send('Mariah Okeke');
// }
// const e = require('express');
// // const { getDb } = require('../db/db.js');



// const getAllContacts = async (req, res) => {
//     console.log("I am here");
//     const gettinDb = mongodb.getDb().db("mydb").collection("contacts").find();
//     gettinDb.toArray((err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     })
// }

// module.exports = {getAllContacts}

const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const db = await mongodb.getDb(); // Get the MongoDB client instance
  const result = await db.db('mydb').collection('contacts').find().toArray();

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const db = await mongodb.getDb(); // Get the MongoDB client instance
  const result = await db.db('mydb').collection('contacts').find({ _id: userId }).toArray();

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result[0]);
};

const create = async (req, res, next) => {
  const db = await mongodb.getDb();
  const contact = {
    name: req.body.firstName,
    lastName: req.body.lastName,
    favoriteColor: req.body.favoriteColor,
    firstName: req.body.firstName,
    email: req.body.email,
    birthday: req.body.birthday
  };
  const result = await db.db('mydb').collection('contacts').insertOne(contact);
  
  res.setHeader('Content-Type', 'application/json');
  res.status(201).json({ id: result.insertedId });
};

const update = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const db = await mongodb.getDb();
  const updatedContact = {
    name: req.body.firstName,
    lastName: req.body.lastName,
    favoriteColor: req.body.favoriteColor,
    firstName: req.body.firstName,
    email: req.body.email,
    birthday: req.body.birthday
  };
  const result = await db.db('mydb').collection('contacts').updateOne(
    { _id: userId },
    { $set: updatedContact }
  );

  res.status(204).send();
};

const remove = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const db = await mongodb.getDb();
  const result = await db.db('mydb').collection('contacts').deleteOne({ _id: userId });

  res.status(204).send();
};

module.exports = { getAll, getSingle, create, update, remove };

