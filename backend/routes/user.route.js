import express from "express";
import { formData } from "../controllers/user.controller.js";


const router = express.Router();


router.post('/formdata', formData);


export default router;