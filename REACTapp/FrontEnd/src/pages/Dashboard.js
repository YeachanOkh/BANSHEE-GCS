import React, { useState } from 'react'
import '../styles/Dashboard.css';
import SpiritGauge from '../assets/spirit.png';
import BrainPowerGauge from '../assets/brainpower_percentage.png';
import MotivationGauge from '../assets/motivation.png';

const flightdata = [
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
  { mavpackettype: "HEARTBEAT", type: "4", autopilot: "7", base_mode: "5", custom_mode: "0", system_status: "3", mavlink_version: "3" },
]

const batterydata = [
  { chamber1: "14.8V", chamber2: "14.8V", chamber3: "14.8V", chamber4: "14.8V", chamber5: "15.2V", chamber6: "14.8V", chamber7: "14.8V", chamber8: "0V" }
]

function Dashboard() {

  const [showDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  };

  return (
    <div className='container'>
      <div className='heading'>GROUND CONTROL STATION DASHBOARD</div>
      <div className='card-wrapper'>
        <div className='left-side'>
          <div className='flightdata'>
            <div className='flightdata-header'>
              <div className='card-title'>Flight Data</div>
              <div class="dropdownstuff" onClick={toggleDropdown}>
                <div class="select">
                    <span class="selected">February</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z"/></svg>
                </div>
                <ul class="menu" id={showDropdown ? "show" : "hide"}>
                    <li onClick={toggleDropdown}>January</li>
                    <li class="active" onClick={toggleDropdown}>February</li>
                    <li onClick={toggleDropdown}>March</li>
                    <li onClick={toggleDropdown}>April</li>
                    <li onClick={toggleDropdown}>May</li>
                    <li onClick={toggleDropdown}>June</li>
                    <li onClick={toggleDropdown}>July</li>
                    <li onClick={toggleDropdown}>August</li>
                    <li onClick={toggleDropdown}>September</li>
                    <li onClick={toggleDropdown}>October</li>
                    <li onClick={toggleDropdown}>November</li>
                    <li onClick={toggleDropdown}>December</li>
                </ul>
              </div>
            </div>
            <table>
                  <tr>
                      <th>mavpackettype</th>
                      <th>type</th>
                      <th>autopilot</th>
                      <th>base_mode</th>
                      <th>custom_mode</th>
                      <th>system_status</th>
                      <th>mavlink_version</th>
                  </tr>
                  {flightdata.map((val, key) => {
                      return (
                          <tr key={key}>
                              <td>{val.mavpackettype}</td>
                              <td>{val.type}</td>
                              <td>{val.autopilot}</td>
                              <td>{val.base_mode}</td>
                              <td>{val.custom_mode}</td>
                              <td>{val.system_status}</td>
                              <td>{val.mavlink_version}</td>
                          </tr>
                      )
                  })}
            </table>
          </div>
          <div className='battery'>
            <div className='battery-header'>Battery Voltages</div>
            <table>
                  <tr>
                      <th>Chamber 1</th>
                      <th>Chamber 2</th>
                      <th>Chamber 3</th>
                      <th>Chamber 4</th>
                      <th>Chamber 5</th>
                      <th>Chamber 6</th>
                      <th>Chamber 7</th>
                      <th>Chamber 8</th>
                  </tr>
                  {batterydata.map((val, key) => {
                      return (
                          <tr key={key}>
                              <td>{val.chamber1}</td>
                              <td>{val.chamber2}</td>
                              <td>{val.chamber3}</td>
                              <td>{val.chamber4}</td>
                              <td>{val.chamber5}</td>
                              <td>{val.chamber6}</td>
                              <td>{val.chamber7}</td>
                              <td>{val.chamber8}</td>
                          </tr>
                      )
                  })}
            </table>
          </div>
        </div>
        <div className='right-side'>
          <div className='spirit'>
            <h1 className='spirit-header' id='header'>Team Spirit</h1>
            <img className='spirit-gauge' id='gauge' src={SpiritGauge} alt="spirit" />
          </div>
          <div className='brain-power'>
            <h1 className='brainpower-header' id='header'>Team Brain Power</h1>
            <img className='spirit-gauge' id='gauge' src={BrainPowerGauge} alt="spirit" />
          </div>
          <div className='motivation'>
            <h1 className='motivation-header' id='header'>Team Motivation</h1>
            <img className='spirit-gauge' id='gauge' src={MotivationGauge} alt="spirit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
