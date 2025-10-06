import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const verifyJWT = (token) => {
  console.log(
    "Verifying with secret:",
    process.env.JWT_SECRET ? "exists" : "MISSING"
  );
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
