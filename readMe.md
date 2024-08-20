The purpose of this application is the utilize the MERN stack for CRUD operations (Creating, Reading, Updating & Deleting data) for a patient management system for a fictional local hospital. The system utilizes a combination of technologies to provide a robust and interactive user experience. The front end via React.js is comprised of a naviation tool bar for navigation purposes, a home page to showcase the building and offered services, a page to create and record patient information, for where that information will then be displayed on a card component as to where the data can be updated or deleted. 

Technologies Needed:
- Visual Studio Code(Code Editor)
- MongoDB (Database Component)
- Git (open sourse version control system)
- Node.js (run JavaScript outside of web browser)



Needed Dependencies for Backend Configuration:
- Cors (transmission of data from server)
- Express (Build RESTful API)
- Nodemon (Monitor project directory)
- Mongoose (database schema)

Command: npm install cors mongoose express nodemon



Create a cluster in cloud for MongoDB
![alt text](<Screenshot (170).png>)
Creat a database and collection inside of cloud provider.
![alt text](<Screenshot (171).png>)
Connect API from VSC to MongoDB:
![alt text](<Screenshot (172).png>)



Testing of CRUD Operations from backend configuration via ThunderClient:
Creating Patient & Patient Data:
![alt text](<Screenshot (173).png>)
Reading of Patients Information from MongoDB:   
![alt text](<Screenshot (174).png>)
Fetching Data for patients individually: 
![alt text](<Screenshot (175).png>)
Updating Patient Data:
![alt text](<Screenshot (176).png>)
![alt text](<Screenshot (177).png>)
Deleting Patient Data From Database:
![alt text](<Screenshot (178).png>)





Frontend Congifuration: 

Needed Dependencies: 
Installation of REACT.js:
Command: npx create-react-app .

Install react router for URLS and CRUD ops: 
Commnad: npm install react-router-dom@6

MUI - MUI provides a simple, customizable, and accessible library of React components.
Command: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

Axios - render backend functionality from backend of stack to frontend
Command: npm install axios



Navigation Bar Component:
![alt text](<Screenshot (179).png>)


Home Page Component: 
![alt text](<MERN home page.png>)


Create "Add Patient" component to create patient data: 
![alt text](<Screenshot (182).png>)


Reading information on card component showcasing patient data on "Patient Information" page.
![alt text](<Screenshot (184).png>)


Updating of Patient Information:








