import axios from "axios";
import { useState } from "react";
import InputBox from "./components/InputBox"
import Label from "./components/Label"
import toast from "react-hot-toast";
import { Loader } from 'lucide-react';


function App() {

  const API_URL = 'http://localhost:3000';

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [city, setCity] = useState("");

  const [isLoading,setIsLoading] = useState(false)
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if (title === "" ||
        firstName=== "" ||
        lastName=== "" ||
        mobile=== "" ||
        email=== "" ||
        designation=== "" ||
        company=== "" ||
        industry=== "" ||
        city === "") {
        toast.error("All Fields are Required")
        
      } else {
        setIsLoading(val => !val)
        const response = await axios.post(`${API_URL}/api/v1/user/formdata`, {title,
          firstName,
          lastName,
          mobile,
          email,
          designation,
          company,
          industry,
          city
        });

        await new Promise(resolve => setTimeout(resolve,2000))
        setIsLoading(val => !val)
        console.log(response.data);
        
        toast.success("Form Submitted Successfully")
        setTitle("");
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");
        setDesignation("");
        setCompany("");
        setIndustry("");
        setCity("");
      }      
    } catch (error) {
      console.log(error)
    }

    
  }
  return (
    <div className="min-h-screen bg-slate-200">

      <div className="bg-white mx-2 flex justify-center items-end h-24 pb-2">
        
        <h1 className=" w-full text-center border-b text-xl font-semibold">Participants Details</h1>
        {/* <p>Data: {title} {firstName} {lastName} {mobile} {email} {designation} {company} {industry} {city}</p> */}

        
        
      </div>

      <div className="bg-white mt-5 mx-2 p-2">

        <form>

          {/* form row 1 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Title"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <select className="w-full focus:outline-none" value={title} onChange={(e)=>setTitle(e.target.value)}>
                    <option value="Select Title">Select Title</option>

                    <option value="MR">MR</option>
                    <option value="MRS">MRS</option>
                    <option value="MS">MS</option>
                </select>
            </div>
              
          </div>
          
           {/* form row 2 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"First Name"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"First Name"} value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </div>
              
          </div>
          
          {/* form row 3 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Last Name"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"Last Name"} value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
              
          </div>
          
          {/* form row 4 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Mobile"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"10 Digit Mobile No."} value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>
              
          </div>
          
          {/* form row 5 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Email"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"Email"} value={email}  onChange={(e)=>setEmail(e.target.value)} />
            </div>
              
          </div>
          
          {/* form row 6 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Designation"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"Designation"} value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
            </div>
              
          </div>
          
          {/* form row 7 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Company"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"Company"} value={company} onChange={(e)=>setCompany(e.target.value)}/>
            </div>
              
          </div>
          

            {/* form row 8 */}
        <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"Industry"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <select className="w-full focus:outline-none" value={industry} onChange={(e)=>setIndustry(e.target.value)}>
                    <option value="Please Select">Please Select</option>

                    <option value="company A">company A</option>
                    <option value="company B">company B</option>
                    <option value="company C">company C</option>
                </select>
            </div>
              
          </div>

           {/* form row 9 */}
          <div className="flex flex-row pb-5">
            <div className="basis-1/4">
            <Label label={"City"}></Label>
            </div>
            <div className="basis-3/4 border-b pb-2 ">
              <InputBox placeholder={"City"} value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
              
          </div>

          <div className="pl-[8rem] pb-5">
            <button className="border px-2 py-1 bg-red-500 text-white w-[8rem]" onClick={handleSubmit}>
              { isLoading ? <Loader className="animate-spin mx-auto"/> :"Submit"}
            </button>
          </div>
          </form>

      </div>



      
    </div>
  )
}

export default App
