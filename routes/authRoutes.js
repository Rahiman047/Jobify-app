import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

import express from "express";

const router = express.Router();
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15 mins
  max: 15,
  msg: "Too many requests from this IP address, please try again after 15 mins",
});

router.route("/register").post(apiLimiter, register); //public
router.route("/login").post(apiLimiter, login); //public
router.route("/updateUser").patch(authenticateUser, updateUser); //protected

export default router;
