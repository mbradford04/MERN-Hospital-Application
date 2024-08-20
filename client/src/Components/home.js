import React from "react";
import hospitalBuilding from "./Photos/hospital.jpg"
import "./CSS/home.css"
const Home = () => {
  return (
    <>
    <div className="div_image">
      <img src={hospitalBuilding} />
    </div>
    <section>
    <h1>Offered Services</h1>
    <div className="main-content">
        <div className="left-column">
          <h2>Emergency Medicine</h2>
          <p>Emergency medicine is the medical speciality concerned with the care of illnesses or injuries requiring immediate medical attention. Emergency medicine physicians specialize in providing care for unscheduled and undifferentiated patients of all ages.
          </p>
        </div>
        <div className="right-column">
          <h2>General Surgery</h2>
           <p>General surgery is a surgical specialty that focuses on alimentary canal and abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland. 
           </p>
        </div>
      </div>
      <div className="main-content">
        <div className="left-column">
          <h2>Obstetrics & Gynaecology</h2>
          <p>Obstetrics and gynaecology is the medical specialty that encompasses the two subspecialties of obstetrics and gynaecology. The specialization is an important part of care for women's health
          </p>
        </div>
        <div className="right-column">
          <h2>Pediatric Intensive care Unit</h2>
           <p>A pediatric intensive care unit (PICU) is a hospital unit that provides the highest level of medical care for critically ill children, infants, teenagers, and young adults up to 21 years old. PICUs are located in both tertiary care children's hospitals and smaller community hospitals.
           </p>
        </div>
      </div>
      <div className="main-content">
        <div className="left-column">
          <h2>Neurology</h2>
          <p>Neurology is the branch of medicine dealing with the diagnosis and treatment of all categories of conditions and disease involving the nervous system, which comprises the brain, the spinal cord and the peripheral nerves
          </p>
        </div>
        <div className="right-column">
          <h2>Radiology</h2>
           <p>Radiology is the medical specialty that uses medical imaging to diagnose diseases and guide their treatment, within the bodies of humans and other animals.
           </p>
        </div>
      </div>
      <div className="main-content">
        <div className="left-column">
          <h2>Cardiology</h2>
          <p>Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.
          </p>
        </div>
        <div className="right-column">
          <h2>Pediatrics</h2>
           <p>
           Pediatrics is the branch of medicine that involves the medical care of infants, children, adolescents, and young adults. In the United Kingdom, paediatrics covers many of their youth until the age of 18.
           </p>
        </div>
      </div>
    </section>
    <footer className="footer">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <p>
        <a href="#">About</a> | <a href="#">Contact</a>
      </p>   
    </footer>
    </>
  );  
};


export default Home;