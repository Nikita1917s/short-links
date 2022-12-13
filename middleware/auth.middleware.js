import config from "config";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No Authorisation1" });
    }

    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "No Authorisation" });
  }
};

export default auth;
