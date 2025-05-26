const express = require('express');
const router = express.Router();

// Örnek rota
router.get('/', (req, res) => {
  res.send('API aktif: /events');
});

module.exports = router;
