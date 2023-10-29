import mongoose from 'mongoose'
import { user } from './user.model'

// mini model
const orderitemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity:{
    type: Number,
    required: true
  }
})

// Main model

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type: Number,
    required: true
  },
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref:user
  },
  orderitems:{
    type: [orderitemSchema]
  },
  address:{
    type: String,
    req: true
  },
  status:{
    type: String,
    enum: ['pending' , 'cancelled', 'delivered'],
    default:'pending'
  }
} , {timestamps: true})

export const order = mongoose.model("order" , orderSchema )