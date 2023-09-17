import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    window.location.replace('https://bobbyhadz.com');
  };
  return (
    <div>
      <h2>About Us</h2>
      <Link to='/'>Go to home</Link>
      <a  onClick={()=>navigate("/home")} target="_blank">
      <button onClick={handleClick}>whatsapp</button></a>
    </div>
  );
};

export default About;
