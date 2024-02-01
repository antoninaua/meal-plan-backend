const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors')

require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = process.env.port || 4000;
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE ARE CONNECTED TO MONGODB!'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`I'm running at port ${PORT}`)
})