const fs = require('fs');
const path  = require('path');

module.exports = async (req, res) => {

    res.sendFile(path.resolve(__dirname,'..', 'views/index.html'));

};