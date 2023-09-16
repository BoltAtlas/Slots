import React, { useState } from 'react';
import { Button } from './Button';

function UserForm() {

  const [BarInput,setBarInput] = useState({
    Title0: "",
    Xaxis0: "",
    Xalues0: "",
    Yaxis0: "",
    Yalues0: ""
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
    <form type="submit" onSubmit={handleSubmit} >
      <div>
        <label htmlFor="Title0">Title for this ScatterPlot: </label>
        <input type="text" autoComplete='off'
        placeholder='Years vs amount earned'
        value={BarInput.Title0}
        onChange={handleInput}
        name="Title0" id="Title0"/>
      </div>
      <div>
        <label htmlFor="Xaxis0">Xaxis Name for this ScatterPlot: </label>
        <input type="text" autoComplete='off'
        placeholder='Years'
        value={BarInput.Xaxis0}
        onChange={handleInput}
        name="Xaxis0" id="Xaxis0"/>
      </div>
      <div>
        <label htmlFor="Xalues0">Xaxis Values for this ScatterPlot: </label>
        <input type="text" autoComplete='off'
        placeholder='2018,2019,2020'
        value={BarInput.Xalues0}
        onChange={handleInput}
        name="Xalues0" id="Xalues0"/>
      </div>
      <div>
        <label htmlFor="Yaxis0">Yaxis Name for this ScatterPlot: </label>
        <input type="text" autoComplete='off'
        placeholder='Amount'
          value={BarInput.Yaxis0}
          onChange={handleInput}
        name="Yaxis0" id="Yaxis0"/>
      </div>
      <div>
        <label htmlFor="Yalues0"> Yaxis Values0 for this ScatterPlot: </label>
        <input type="text" autoComplete='off'
        placeholder='800,700,1000'
        value={BarInput.Yalues0}
        onChange={handleInput}
        name="Yalues0" id="Yalues0"/>
      </div>
      <Button type="submit" buttonStyle='btn--outline'>
            Create Chart
      </Button>
    </form>
    <div className="imgcontainbar">
    <img src="/images/UserScatter.png" className='chartimg' alt='ScatterPlot'/>
    </div>
  </>
  );
}

export default UserForm;
