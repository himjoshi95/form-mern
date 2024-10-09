import mongoose from "mongoose";


const masterScehma = new mongoose.Schema({
    name:String
})

const Master = mongoose.model('Master', masterScehma);

export default Master;