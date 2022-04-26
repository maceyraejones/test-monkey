import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import "./AddCart.css";



function AddCart() {

  const navigate = useNavigate();

  const [like, setlike] = useState(1);

  const [error, setError] = useState("");

  

  const getlikeHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    
    try {
      const { data } = await axios.post(
        `/api/animal`,
        {
          like,
          
      
        },
        config
      );

      localStorage.setItem(data);

      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
 













  return (
    <div>
<form onSubmit={getlikeHandler} className="register-screen__form">
<button  value={like} onChange={(e) => setlike(e.target.value)} className='btn'><span className="glyphicon glyphicon-heart"></span></button>
</form>
    </div>
  )
}

export default AddCart