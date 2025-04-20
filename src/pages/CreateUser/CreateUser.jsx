import { Outlet } from "react-router-dom";
import "./CreateUser.css";
import React, { useState, useRef } from 'react';
import Header from "../../Header/Header";


function CreateUser({children}) {
  const inputNameRef = useRef(null);

  const [users, setUsers] = useState([]);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [showAlert, setShowAlert] = useState(false);

  let intervalId = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if((name.trim().length > 5) && email.includes("@") && age && phone.length >= 8) {
       const user = {name, email, age, phone}

       setUsers([...users, user]);
       setName('');
       setEmail('');
       setAge('');
       setPhone('');

       inputNameRef.current.focus();
      
       intervalId = setInterval(setShowAlert(true), 1000);

       setTimeout(() => {
         setShowAlert(false);
         clearInterval(intervalId);
       }, 3000);
       
      }


      if(!name || name.trim().length < 8) {
        setNameError('Please Enter A Valid Name (greeter then 8 character) !');
      } else {
        setNameError('');
      }
      if(!email || !email.includes("@")) {
        setEmailError('Please Enter Your A Vali Email (contain "@") !');
      } else {
        setEmailError('');
      }
      if(!age || age > 120) {
        setAgeError('Please Enter A valid Age !');
      } else {
        setAgeError('');
      }
      if(!phone || phone.length < 8) {
        setPhoneError('Please Enter Your Phone (contain 8 character) !');
      } else {
        setPhoneError('');
      }

  }

  const options = [
    {
      value: "User",
      label: "User"
    },
    {
      value: "Admin",
      label: "Admin"
    },
    {
      value: "Manager",
      label: "Manager"
    },
  ]

  return (
    <>
    <Header header="Create Account" />
    <section className='profile_team'>
     
        <h4 className={showAlert ? "popup_create_count show" : "popup_create_count"}
          style={{display: "flex", justifyContent: "space-between", gap: "12px",
            padding: "10px 25px 10px 5px", color: "#fff", position: "absolute", top: "25px"
          }}
        >
          Count Created Successfuly
          <span className='close_popup'
            style={{cursor: "pointer", position: "absolute", top: "3px", right: "6px"}}
            onClick={() => setShowAlert(false)}
          >X</span>
        </h4>

      <form className='form_control'
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder='Enter Your Name...'
          ref={inputNameRef}
          // required
          value={name}
          onChange={(e) => setName(e.target.value)}  />
          <strong style={{color: "red", fontWeight: "700"}}>{nameError}</strong>
        <input type="email" placeholder='Enter Your Email...'
          // required
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <strong style={{color: "red", fontWeight: "700"}}>{emailError}</strong>
        <input type="number" placeholder='Enter Your Age...'
          // required
          value={age}
          onChange={(e) => setAge(e.target.value)} />
          <strong style={{color: "red", fontWeight: "700"}}>{ageError}</strong>
        <input type="text" placeholder='Enter Your Phone'
          // required
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
          <strong style={{color: "red", fontWeight: "700"}}>{phoneError}</strong>
          <select name="select User"
            style={{padding: "10px", borderRadius: "12px", cursor: "pointer"}}
          >
            {
              options.map(option => (
                <option key={option.value}
                  value={option.value}>
                  {option.label}
                </option>
              ))
            }
          </select>
        <button type='submit' className='submit_btn'>Submit</button>
      </form>
    </section>

    {children}
  </>
)
}

export default CreateUser;