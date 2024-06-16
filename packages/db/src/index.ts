import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  purchasedItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const itemSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Admin =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);
export const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
