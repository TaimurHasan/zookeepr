const path = require('path');
const router = require('express').Router();


// serving index.html to express.js server
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// serving animals.html to express.js server
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
})

// serving zookeepers.html to express.js server
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;