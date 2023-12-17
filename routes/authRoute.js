import express from "express";
import {
  loginController,
  registerController,
  testController,
  forgotPasswordController,
  profileUpdateController,
  allOrdersController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", registerController);
router.post("/login", loginController);

//test route
router.get("/test", requireSignIn, isAdmin, testController);
//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
router.post("/forgot-password", forgotPasswordController);
router.put("/profile", requireSignIn, profileUpdateController);
router.get("/orders", requireSignIn, allOrdersController);

export default router;
