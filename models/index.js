

import mongoose from "mongoose";
import User from "../../exrpress/models/user.js";
import Message from "../../exrpress/models/message.js";
/* GET home page. */
import express from 'express';

var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const connectDb = ()=>{
  return mongoose.connect("mongodb://localhost:27017/CrudMongoExpress");
}
const models = {User,Message}
export {connectDb}
export default models
