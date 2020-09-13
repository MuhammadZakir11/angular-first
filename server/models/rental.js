const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
	title: {type: String, required:true, max: [128,'Too long, max is 128 characters']},
	city: {type: String, required:true},
	street: {type: String, required:true,min: [4,'Too short, its too short']},
	category: {type: String, required:true},
	image: {type: String, required:true},
	bedrooms: Number,
	shared:Boolean,
	description: {type: String, required:true},
	dailyRate: Number,
	createdAt:{type: Date, default:Date.now}
});

module.exports = mongoose.model('Rental', rentalSchema);