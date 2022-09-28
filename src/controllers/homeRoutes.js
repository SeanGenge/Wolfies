const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, '../../dist/index.html'));
	// res.sendFile(path.resolve(__dirname, 'index.html'));
});

module.exports = router;
