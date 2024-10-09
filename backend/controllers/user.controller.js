import User from "../model/user.model.js"

export const formData = async (req,res) => {
    
    const {title,
        firstName,
        lastName,
        mobile,
        email,
        designation,
        company,
        industry,
        city,
        masterId} = req.body    
    
    try {

        const user = new User({title,
            firstName,
            lastName,
            mobile,
            email,
            designation,
            company,
            industry,
            city,
            masterId
        })
        
        await user.save()

        return res.status(201).json({
            success: true,
            _id: user._id,
            name:user.firstName           
        })
    
   } catch (error) {
        console.log("Error in formData controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
   }
}


export const userDetails = async (req, res) => {
    
    const { userId } = req.query;

    try {
        const desiredUser = await User.findById(userId);
        res.json({
            success: true,
            desiredUser
        });        
    } catch (error) {
        console.log("Error in userDetails Controller ", error.message)
        res.json({
            message: error.message
        })
        
    }
    
}