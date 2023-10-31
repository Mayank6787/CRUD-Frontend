import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import Axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    rollNo: "",
  });

  const [newData, setNewData] = useState([]);
  useEffect(() => {
    Axios.get("https://crud-development.onrender.com/studentRoute/update-student/" + id)
      .then((res) => {
        if (res.status === 200) {
          const { name, email, rollNo } = res.data;
          setInitialValue({ name, email, rollNo });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  const getState = (childData) => {
    setNewData(childData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: newData[0], email: newData[1], rollNo: newData[2] };
    Axios.put("https://crud-development.onrender.com/studentRoute/update-student/" + id, data)
      .then((res) => {
        if (res.status === 200) {
          alert("Recorder upadatad succesfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
      event.target.reset()
  };
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue={initialValue.name}
        emailValue={initialValue.email}
        rollNoValue={initialValue.rollNo}
      />
    </form>
  );
}
export default EditStudent;
