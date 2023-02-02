import React from 'react'
import axios from "axios";
import '../Style/Contact.css'


import {  useState } from "react";


function Contact(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const SendData = async (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            pwd
        };
        try {
   const res = await axios.post("http://localhost:5000/Contact/add", newContact);
          window.location.replace("/");
        } catch (err) { console.log(err) }

      };
  return (
<>

<h2 class="member">CONTACT US</h2>
<div class="container">


<div className='row'>

    <div className='col'>
    <div className='condes'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jptZ2aQfDgvaq1w7bxtXxIgArJQe4q4ZSEnUA0XHuakBw0u-WNmt2T4f9KsupVBYHvc&usqp=CAU'></img>
    </div>
     <p>to execute Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo amet in itaque atque hic! Aliquam, saepe nulla officia culpa vitae velit a qui iusto dolore accusamus aspernatur, nostrum maxime ullam</p>

</div>
<div className='col'>
  

<div className='Register mt-5 ms-5'>


  <form onSubmit={SendData} name="myForm" class="member1 ">
     <div class="mb-3 ">

      <input type="name" className="inputBox form-outline mb-4" placeholder="Name.." id="name" onChange={e=>setName(e.target.value)} required /> 
   </div>    

      <div class="mb-3">

      <input type="email" className="inputBox form-outline mb-4" placeholder="Email.." id="email" onChange={e=>setEmail(e.target.value)} required />

</div>    

<div>
<input type="password" className="inputBox form-outline mb-4" placeholder="Password.." id="password" onChange={e=>setPwd(e.target.value)} required />
</div>   
<button type="submit" className ="signupBtn" ><span style={{marginLeft:'1.1rem'}}>Sign Up !</span></button>


</form>


</div>

</div>
  

</div>



</div>


</>

    



)
  }





 
 export default Contact