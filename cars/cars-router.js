const express = require('express'); 
const knex = require('knex'); 

const knexfile = require('../knexfile.js');

const router = express.Router(); 

const db = knex(knexfile.development); 

module.exports = router; 

router.get("/", (req, res) => {
    db("cars")
    .then(result => {
        console.log(result); 
        res.json({ result }); 
    })
    .catch(error => {
        console.log(error); 
        res.json({ error }); 
    })
})

router.post("/", (req, res) => {
    db('cars')
    .insert(req.body)
    .then(id => {
        console.log(`New car successfully created: ${id}`); 
        db('cars')
        .where({ id: id[0] })
        .then(newcar => {
            console.log(`New car: ${newcar}`); 
            res.status(200).json({ newcar }); 
        })
        .catch(erorr => {
            console.log(`Error in finding new entry`)
            res.status(404).json({ message: `Error in finding new entry.` }); 
        })
    })
    .catch(error => {
        console.log(error); 
        res.json({ error }); 
    })
})