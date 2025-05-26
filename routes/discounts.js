const express = require('express');
const router = express.Router();

// Örnek rota
router.get('/', (req, res) => {
  res.send('API aktif: /discounts');
});

module.exports = router;
