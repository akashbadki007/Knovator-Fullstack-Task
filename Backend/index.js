const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(cors({origin: "http://localhost:5173", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"], }) );

const PORT = process.env.PORT || 5000;
app.use(express.json());

const routes = require('./routes/routes')
app.use('/api', routes);

require('./config/dbConnect').dbConnect();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running');
})