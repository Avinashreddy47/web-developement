import React from 'react'
import  '../CSS/viewreports.css'
import Image from '../Images/reports.jpg'
export default function Reports() {
  return (
    <div className="hero-image">
    <div className="hero-text">
    <h1 style={{ fontSize: 30 }}>
      <center>Reports will be generated here.........</center>
    </h1>
    <br />
    <br />
    <img src={Image} alt="Paris" style={{ width: "30%" }} />
    </div>
  </div>
  )
}
