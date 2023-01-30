import express from "express";
import { getUsers, Register, Login } from "../controllers/User.js";
import { verifyToken } from "../middleware/Verifytoken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { Logout } from "../controllers/User.js";
import { getImages } from "../controllers/Image.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/images", getImages);

export default router;
