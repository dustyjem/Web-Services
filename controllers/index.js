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

module.exports = { getAll, getSingle };
