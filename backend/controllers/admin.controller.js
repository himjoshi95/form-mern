import Master from "../model/admin.model.js"


export const addTraining = async (req, res) => {
    const { name } = req.body
    try {
        const newTraining = await Master.create({
            name
        })

        res.json({
            id: newTraining._id,
            name: newTraining.name
        })
    } catch (error) {
        console.log("Error in addTraining controller", error.message)
        res.json({
            message:error.message
        })
    }
}


export const allTrainings = async (req, res) => {
    
    try {
        const trainings = await Master.find()
        return res.json({
            trainings
        })
    } catch (error) {
        console.log("Error in allTrainings Controllers", error.message);
        res.json({
            message: error.message
        })        
    }
}