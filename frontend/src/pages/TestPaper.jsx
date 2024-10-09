import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function TestPaper() {

    const [user,setUser] = useState({})

    const { userId } = useParams();

    const API_URL = 'http://localhost:3000';

    useEffect(() => {
        axios.get(`${API_URL}/api/v1/user/userDetails?userId=${userId}`).
            then(response => {
                console.log(response.data)
                setUser(response.data.desiredUser)
            }).catch(error => {
            console.log(error)
        })
    }, [userId])
    
    return(
    <div>
        <div className="border flex justify-center py-5 mt-2 mx-2 shadow-md">
                <h1 className="text-xl"> TEST PAPER - {user && user.firstName}</h1>
        </div>
        
        <div className="border py-5 mt-2 mx-2 shadow-md">
            <div className="px-2">
                <p>Q1</p>
            </div>            
        </div>
        
        <div className="border py-5 mt-2 mx-2 shadow-md">
            <div className="px-2">
                <p>Q2</p>
            </div>            
        </div>
       
        <div className="border py-5 mt-2 mx-2 shadow-md">
            <div className="px-2">
                <p>Q3</p>
            </div>            
        </div>
        
        <div className="mt-5 mx-2 flex justify-end">
            <button className="border px-2 py-2 text-white bg-red-400 hover:bg-red-600">Submit Test</button>
        </div>

    </div>
    )
}


export default TestPaper;