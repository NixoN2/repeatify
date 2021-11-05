import {Router} from "express";
import { tokenVerify } from "../utils/auth";
const user = require('../controllers/user.controller');
const router = Router();

router.get("/:id", tokenVerify, user.getUser);
router.post("/login", user.login);
router.post("/register", user.register);
router.put("/:id",tokenVerify, user.updateUser);
router.delete("/:id",tokenVerify, user.deleteUser);
export default router;