import mongoose from 'mongoose'
import { user } from './user.model'

const productSchema = new mongoose.Schema({

  name:{
    type: String,
    required: [true , "name is required"]
  },
  description:{
    type: String,
    required: [true , 'description is required']
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: [true , 'category is required']
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  price:{
    type: Number,
    default: 0,
  },
  Stock:{
    type: Number,
    default: 0
  }
} , {timestamps: true})

export const product = mongoose.model('product' , productSchema)