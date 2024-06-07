import jwt from "jsonwebtoken";

export const getUser = async (token: string, cb) => {
  //cb = callback function defined in api/admin/me route
  const SECRET = process.env.JWT_SECRET;
  if (!SECRET) {
    throw new Error("Please add your JWT SECRET to .env.local");
  }
  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return cb(false);
    }
    return cb(user);
  });
};
