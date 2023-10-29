import mongoose from 'mongoose'

const category = new mongoose.Schema({
  name:{
    type: String,
    required:[true , 'name is required'],
    lowercase: true
  }
} , {timestamps:true})

export const category = mongoose.model("category" , category)