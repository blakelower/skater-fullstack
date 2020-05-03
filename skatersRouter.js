const express = require('express');
const router = express.Router();
const db = require('./users/user-router');
const { authenticate } = require('./auth/restricted-middleware');

router.get('/', (req, res) => {
    db.findSkaters(req.params.id)
    .then(function (data) {
        res.json(data)
    })
})

router.get('/byId/:id', (req,res) => {
    db.findSkaterById(req.params.id)
    .then(function (data) {
        res.json(data)
    })
})

// router.post('/new', authenticate, (req, res) => {
//     const { sName, sTrick, user } = req.body;
//     db.newStory({ sName, sTrick, user })
//         .then(count => {
//             db.findStories(req.params.id)
//                 .then(function (data) {
//                     res.json(data);
//                 })
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });


module.exports = router;