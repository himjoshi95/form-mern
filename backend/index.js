import express from "express";
import cors from "cors";

import userRouter from "./routes/user.route.js"
import adminRouter from "./routes/admin.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on PORT ${PORT}`);
})
