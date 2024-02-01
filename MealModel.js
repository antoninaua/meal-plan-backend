const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Meal', mealSchema);