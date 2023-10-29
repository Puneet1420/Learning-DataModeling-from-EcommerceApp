import mongoose from 'mongoose'

const user = new mongoose.Schema({
  name:{
    type: String,
    required:[true , 'name is required'],
    lowercase: true
  },
  username:{
    type: String,
    required:[true , 'name is required'],
    lowercase: true,
    unique: true,
  },
  password:{
    type: String,
    required:[true , 'name is required'],
    lowercase: true
  },
  gender:{
    enum: [m , f , o]
  }
},{timestamps: true});

export const user = mongoose.model("user" , user)