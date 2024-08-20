

import React from "react";
import Header from "./Components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import AddPatient from "./Components/addPatient";
import Patients from "./Components/Patient/patients";
import PatientDetail from "./Components/Patient/patientDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddPatient />} exact />
          <Route path="/patient" element={<Patients/>} exact />
          <Route path="/patient/:id" element={<PatientDetail  />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;