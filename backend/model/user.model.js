import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    mobile: String,
    email: String,
    designation: String,
    company: String,
    industry: String,
    city: String
},{ timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;