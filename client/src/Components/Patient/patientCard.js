import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/patientCard.css";
const Patient = (props) => {
  const history = useNavigate();
  const { _id, name, dob, insurance, patient_id} = props.patient;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3002/patient/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/patient"));
  };
  return (
    <div className="card">
      <h3>Patient Name: {name}</h3>
      <h4>D.O.B:  {dob}</h4>
      <h4>Insurance:  {insurance}</h4>
      <h4>Patient ID:  {patient_id}</h4>
      <Button LinkComponent={Link} to={`/patient/${_id}`} sx={{ mt: "auto" }}>
        Update Patient Information
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>   
        Delete Patient Information
      </Button>
    </div>
  );
};

export default Patient;
