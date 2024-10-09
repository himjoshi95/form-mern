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
    city: String,
    attendance: {
        type: Boolean,
        default: true
    },
    masterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Master'
    }
}, { timestamps: true });


const testSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    totalQuestion: {
        type: Number,
        default: 3
    },
    CorrectAnswers: {
        type:Number
    }
}, { timestamps: true })

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: String
})

const User = mongoose.model("User", userSchema);
export const Test = mongoose.model("Test", testSchema)
export const FeedBack = mongoose.model("FeedBack",feedbackSchema)

export default User;
