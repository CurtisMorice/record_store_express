const express = require('express');
//Have express make a new router
const router = express.Router();

const Record = require('../modules/record.class');
const recordArray = [
    new Record('Michael Jackson', 'Off the Wall', 1979, ['Pop']),
    new Record('The Beatles', 'Abbey Road', 1969, ['Rock']),
    new Record('Slayer', 'Reign In Blood', 1986, ['Metal']),
];


router.get('/', (req, res) => {
    console.log('in my /record GET');
    //res.send is needed for the listener. 
    res.send(recordArray);
});

router.post('/', (req, res) => {
    console.log('Handling My POST for /record');
    let sentRecord = req.body;
    let record = new Record(
        sentRecord.artist,
        sentRecord.album,
        sentRecord.year, [sentRecord.genre]
    );
    recordArray.push(record);
    res.sendStatus(201);
});
module.exports = router;