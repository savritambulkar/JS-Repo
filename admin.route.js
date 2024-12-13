import express from "express";
import { signInPage, signInAction ,dashboardPageAction} from "../controller/admin.control.js";
import {verify} from "../middileware/authontication.js"

const router = express.Router();


router.get("/sign-in",signInPage);
router.post("/sign-in",signInAction);
router.get("/dashboard",verify,dashboardPageAction)
export default router;

