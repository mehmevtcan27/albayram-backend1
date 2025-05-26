const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
console.log('✅ Uygulama başlatılıyor...');

app.use(cors());
app.use(express.json());

// Routes (önceden tanımlandı)
app.get('/', (req, res) => {
  res.send('Albayram API çalışıyor ✅');
});

app.use('/api/employers', require('./routes/employers').default || require('./routes/employers'));
app.use('/api/events', require('./routes/events').default || require('./routes/events'));
app.use('/api/blogs', require('./routes/blogs').default || require('./routes/blogs'));
app.use('/api/discounts', require('./routes/discounts').default || require('./routes/discounts'));
app.use('/api/messages', require('./routes/messages').default || require('./routes/messages'));
app.use('/api/auth', require('./routes/auth').default || require('./routes/auth'));

// Connect to MongoDB ve sunucuyu başlat
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
  });
})
.catch(err => {
  console.log('❌ MongoDB error:', err);
});
