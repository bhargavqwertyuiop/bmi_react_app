import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [weightDifference, setWeightDifference] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [bmiPercentage, setBmiPercentage] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
  };

  const calculateIdealWeightRange = (height) => {
    const minHeight = height * height * 18.5;
    const maxHeight = height * height * 24.9;
    return [minHeight.toFixed(2), maxHeight.toFixed(2)];
  };

  const handleButtonClick = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert height from cm to meters

    if (weightNum && heightNum) {
      const bmiValue = calculateBMI(weightNum, heightNum);
      setBmi(bmiValue);

      let bmiMessage = "";
      let weightDiff = "";
      const [minIdealWeight, maxIdealWeight] = calculateIdealWeightRange(heightNum);

      if (bmiValue < 18.5) {
        bmiMessage = "Underweight";
        weightDiff = `You need to gain at least ${(minIdealWeight - weightNum).toFixed(2)} kg to reach a normal weight.`;
        setBmiPercentage((bmiValue / 24.9) * 100);
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = "Normal weight";
        weightDiff = "You are within the ideal weight range.";
        setBmiPercentage((bmiValue / 24.9) * 100);
      } else {
        bmiMessage = "Overweight";
        weightDiff = `You need to lose at least ${(weightNum - maxIdealWeight).toFixed(2)} kg to reach a normal weight.`;
        setBmiPercentage((bmiValue / 40) * 100); // Assuming a maximum BMI of 40 for the bar
      }

      setMessage(bmiMessage);
      setWeightDifference(weightDiff);
      setShowMessage(true);
    } else {
      setMessage("Please enter valid weight and height.");
      setShowMessage(true);
    }
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
    setWeightDifference("");
    setShowMessage(false);
    setBmiPercentage(0);
  };

  return (
    <div className='container'>
      <div className='flashcard'>
        <h1 className='title'>BMI Calculator</h1>
        <div className='input-group'>
          <label className='label' htmlFor='weight'>Enter your weight (kg): </label>
          <input className='input' type='number' id='weight' value={weight} onChange={handleWeightChange} />
        </div>
        <div className='input-group'>
          <label className='label' htmlFor='height'>Enter your height (cm): </label>
          <input className='input' type='number' id='height' value={height} onChange={handleHeightChange} />
        </div>
        <div className='button-group'>
          <button onClick={handleButtonClick} className='btn calculate-btn'>Calculate BMI</button>
          <button onClick={handleReset} className='btn reset-btn'>Reset</button>
        </div>
        {showMessage && (
          <div className='result'>
            <p className='bmi'>Your BMI: {bmi}</p>
            <p className={`message ${message.toLowerCase().replace(' ', '-')}`}>{message}</p>
            <p className='weight-difference'>{weightDifference}</p>
            <div className='bmi-bar'>
              <div
                className='bmi-progress'
                style={{ width: `${bmiPercentage}%`, backgroundColor: bmi < 18.5 ? '#ff9800' : bmi >= 18.5 && bmi < 24.9 ? '#4caf50' : '#f44336' }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
