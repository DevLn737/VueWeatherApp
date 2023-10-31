const express = require('express');

const router = new express.Router();

router.get('/v1/weather/:city', async (req, res) => {
   const city = req.params.city;
	
});

exports.module = router;
