const MealModel = require('./MealModel');

//GET
module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal)
}

//POST
module.exports.saveMeal = async (req, res) => {
    const { name } = req.body;
    MealModel.create({ name })
    .then((data) => {console.log('Meal added')
    res.send(data)
    }) 
}

//DELETE
module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a Meal'))
}

//EDIT
module.exports.editMeal = async (req, res) => {
    const { _id, name } = req.body;
    MealModel.findByIdAndUpdate(_id, { name })
    .then(() => res.send('Edited a Meal'))
}