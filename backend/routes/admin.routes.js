import express from "express";
import { addTraining, allTrainings } from "../controllers/admin.controller.js";


const router = express.Router();

router.post('/addTraining', addTraining);
router.get('/allTrainings', allTrainings);






export default router;