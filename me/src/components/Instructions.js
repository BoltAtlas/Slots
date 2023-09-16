import React from 'react'
import "../styles/Instructions.css";
import '../App.js';

function Instructions() {
  return (
    <div>
        <video src='/videos/video2.mp4' autoplay='true' loop muted />
        <div className='Ints_Para'>
        Slots, an elegant interface designed to seamlessly interact with the powerful
        Matplotlib library in Python. Empowering users with the capability to effortlessly
        generate and export meticulously crafted plots as high-quality images directly to
        their local environments.
        </div>
        <ul className='Steps'>
            <li className='step'>
                <img src='/images/Search.png' alt="Search"/>
                <div className='contain-step'>
                    <h1>Step 1</h1>
                    Select The type of plot you need to make from the home page
                </div>
            </li>
            <li className='step'>
                <img src='/images/Input.jpg' alt="Input"/>
                <div className='contain-step'>
                    <h1>Step 2</h1>
                    Input the details as directed in the graph's page and select the 'make graph options'
                </div>
            </li>
            <li className='step'>
                <img src='/images/Download.png' alt="Download"/>
                <div className='contain-step'>
                    <h1>Step 3</h1>
                    Right click on the graph image and use 'save as' option to download the plot image
                </div>
            </li>
            <li className='step'>
                <img src='/images/Edit.jpg' alt="Edit"/>
                <div className='contain-step'>
                    <h1>Step 4</h1>
                    To change the details go back to home page and reselect the type of graph and follow next steps
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Instructions
