import React, { useState } from 'react';
import { Button } from './Button';

function UserForm() {

  const [BarInput,setBarInput] = useState({
    Title: "",
    Names: "",
    Values: ""
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
        <label htmlFor="Title">Title for this Piechart: </label>
        <input type="text" autoComplete='off'
        placeholder='Continents Population'
        value={BarInput.Title}
        onChange={handleInput}
        name="Title" id="Title"/>
      </div>
      <div>
        <label htmlFor="Names">Names for this Piechart fields: </label>
        <input type="text" autoComplete='off'
        placeholder='Asia, Europe, NA, SA, Australia, Antarctica, Africa'
        value={BarInput.Names}
        onChange={handleInput}
        name="Names" id="Names"/>
      </div>
      <div>
        <label htmlFor="Values">Values for this Piechart fields: </label>
        <input type="text" autoComplete='off'
        placeholder='59.7, 9.7, 7.9, 5.6, 0.5, 0.01, 17.6'
        value={BarInput.Values}
        onChange={handleInput}
        name="Values" id="Values"/>
      </div>
      <Button type="submit" buttonStyle='btn--outline'>
            Create Chart
      </Button>
    </form>
    <div className="imgcontainbar">
    <img src="/images/UserPie.png" className='chartimg' alt='Piechart'/>
    </div>
  </>
  );
}

export default UserForm;
