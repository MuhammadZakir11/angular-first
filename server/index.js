const express = require("express");
const mongoose = require("mongoose");
const Rental = require("./models/rental");
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rental');
const config = require('dotenv').config();


mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(()=>{
  const FakeDb = new FakeDb();
  FakeDb.seedDb();
	console.log('Database connected');
}).catch(err => {
console.log('DB Connection Error: ${err.message}');
});

const app = express();
app.use('/api/v1/rentals',rentalRoutes);



const PORT = process.env.PORT || 3001;

app.listen(PORT,function(){
	console.log("im running");
})