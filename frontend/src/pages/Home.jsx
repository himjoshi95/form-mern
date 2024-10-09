import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {

    const [trainings, setTrainings] = useState([]);

    const API_URL = 'http://localhost:3000';

    useEffect(() => {
        axios.get(`${API_URL}/api/v1/admin/allTrainings`)
            .then(response => {
                console.log(response.data.trainings);
                setTrainings(response.data.trainings);
            }).catch(error => {
            console.log(error)
        })
    },[])

    return (
        <div>
            <div className="border flex justify-center py-5 mt-2 mx-2 shadow-md">
                <h1 className="text-xl">Trainings</h1>
            </div>

            <div className="border h-[400px] py-5 mt-2 mx-2 shadow-md px-2">
                <div>
                    <h1>Training URLs</h1>

                    {
                        trainings.map((item, index) => <div className="py-2" key={index}>
                            <Link className="flex flex-row" to={`/training/${item._id}`}> <span className="basis-1/4">Training - {item.name}</span> <span className="basis-3/4 underline text-blue-500">{`http://localhost:5173/training/${item._id}`}</span></Link>
                        </div>)
                    }

                </div>

            </div>
        </div>
    )
           
    
}


export default Home;