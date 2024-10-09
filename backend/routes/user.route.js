import express from "express";
import { formData, userDetails } from "../controllers/user.controller.js";


const router = express.Router();


router.post('/formdata', formData);
router.get('/userDetails', userDetails);


export default router;