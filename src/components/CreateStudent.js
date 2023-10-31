import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from 'axios'

function CreateStudent() {
    const [arr, setArr] = useState("") // arr = [Raj, raj@gmail.com , 1]


    //Declaring a argument function
    const getState = (childData) =>{ // childData = [Raj , raj@gmail.com , 1]
        setArr(childData)
    }


    //This function post the data in the schema at this url ("http://localhost:4000/studentRoute/create-student/")
    const handleSubmit = () => {
        const data = {name:arr[0],email:arr[1],rollNo:arr[2]}
        Axios.post("https://crud-development.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Recorded has been added")
            }
            else{
                Promise.reject()
            }
        })
        .catch((err)=>alert(err))
    }

  return (
    <form onSubmit={handleSubmit}>
      <StudentForm getState={getState}/>
    </form>
  );
}

export default CreateStudent;
