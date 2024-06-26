import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    console.log("alreadyDone - ", alreadyDone);
    return;
  }
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("Please add your MongoDB URL to .env.local");
  }

  alreadyDone = true;
  console.log("alreadyDone - ", alreadyDone);
  await mongoose.connect(mongoUrl);
}
