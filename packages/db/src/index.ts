import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
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

export const User = mongoose.model.User || mongoose.model("User", userSchema);
export const Admin =
  mongoose.model.Admin || mongoose.model("Admin", adminSchema);
export const Item = mongoose.model.Item || mongoose.model("Item", itemSchema);

// export const User = mongoose.model("User", userSchema);
// export const Admin = mongoose.model("Admin", adminSchema);
// export const Item = mongoose.model("Item", itemSchema);
