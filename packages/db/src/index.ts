import mongoose from "mongoose";
// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
  purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Items" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const itemSchema = new mongoose.Schema({
  product: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

// export const User = mongoose.model.User || mongoose.model("User", userSchema);

export const User = mongoose.model("User", userSchema);
export const Admin = mongoose.model("Admin", adminSchema);
export const Item = mongoose.model("Course", itemSchema);
