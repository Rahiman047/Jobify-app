import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

import express from "express";

const router = express.Router();

router.route("/register").post(register); //public
router.route("/login").post(login); //public
router.route("/updateUser").patch(authenticateUser, updateUser); //protected

export default router;
