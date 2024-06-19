import React, { useState } from 'react';
import { Button } from './Button';
import "../styles/Forms.css";

function UserForm() {

  const [BarInput,setBarInput] = useState({
    Title: "",
    Range: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setBarInput({...BarInput, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: BarInput }),
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <video src='/videos/video4.mp4' autoplay='true' loop muted />
    <form type="submit" onSubmit={handleSubmit}>
      <div>
          <label htmlFor="Title">Title for Histogram: </label>
          <input type="text" autoComplete='off'
          placeholder="Ages that play Video Games"
          value={BarInput.Title}
          errorMessage="Title should be filled"
          required={true}
          onChange={handleInput}
          name="Title" id="Title"/>
          <label htmlFor="Range">Range:</label>
          <input type="text" autoComplete='off'
          placeholder='12,12,12,12,13,13'
          errorMessage="Range should be values seperated by commas and should onlu include numbers"
          value={BarInput.Range}
          required={true}
          onChange={handleInput}
          name="Range" id="Range"/>
        <Button type="submit" buttonStyle='btn--outline'>
              Create Chart
        </Button>
      </div>
    </form>
    <div className="imgcontainbar">
    <img src="/images/UserHistogram.png" className='chartimg' alt='Histogram'/>
    </div>
  </>
  );
}

export default UserForm;
