const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors(), express.json());

const connectDB = require('./config/mongoose.config');
connectDB();

const productRouter = require('./routes/product.routes');
app.use('/api/products', productRouter);

const port = 8000;
app.listen(port, () => console.log(`The server is loaded on port ${port}`));

