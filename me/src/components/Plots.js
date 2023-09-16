import React from 'react'
import "../styles/Plots.css";
import { Button } from './Button';
import {Link} from 'react-router-dom';


function Plots() {
  return (
    <div className="plots_contain">
        <video src='/videos/video4.mp4' autoplay='true' loop muted />
        <div className="plots_begin">
            <h1>Pick Your Plot:</h1>
            {/* <p>Pick the plot you want to make :</p> */}
        </div>

        <div className="plots-btns">
            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--xx-large">
                <Link to='/Barchart' className="btn_contain">
                    <img src='/images/BarChart.png' alt="BarChart"/>
                    BarChart
                </Link>
            </Button>

            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--xx-large">
                <Link to='/ScatterPlot' className="btn_contain">
                    <img src='/images/ScatterPlot.png' alt="ScatterPlot"/>
                    ScatterPlot
                </Link>
            </Button>

            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--xx-large">
                <Link to='/Piechart' className="btn_contain">
                    <img src='/images/PieChart.png' alt="PieChart"/>
                    PieChart
                </Link>
            </Button>
        </div>
        <div className="plots-btns">
            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--xx-large">
                <Link to='/LineChart' className="btn_contain">
                    <img src='/images/LineChart.png' alt="LineGraph"/>
                    LineGraph
                </Link>
            </Button>

            <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--xx-large">
                <Link to='/Histogram'  className="btn_contain">
                    <img src='/images/Histogram.png' alt="Histogram"/>
                    Histogram
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default Plots
