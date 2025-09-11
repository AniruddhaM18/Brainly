//user model / schema via mongooseeeee
import mongoose from "mongoose";
import {model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://anisoft:LrQVmoBIkkkzLmed@cluster0.llrzqgd.mongodb.net/Brainly");


 const userSchema = new Schema({
    username: {type: String , unique: true},
    password : String
 })

 export const userModel =  model("User", userSchema);

 const contenSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: 'true'}
 });

 export const contentModel = model("Content", contenSchema);

 

