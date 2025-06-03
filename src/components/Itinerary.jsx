import React from 'react';
import styled from 'styled-components';
import { FaPlaneDeparture } from "react-icons/fa";
import { GiHorizonRoad } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Itinerary = ({ t }) => {
  return (
    <StyledWrapper>
      <div className="stepper-box">
        <h1 className="text-4xl font-bold text-green-900 mb-8 text-start drop-shadow-lg">{t.itinerary_title}</h1>
        <div className="stepper-step stepper-completed">
           <div className="stepper-circle"><FaPlaneDeparture/></div>
          <div className="stepper-line" />
          <div className="stepper-content">
            <div className="stepper-title">{t.itinerary_airport_title}</div>
            <div className="stepper-status flex flex-row items-center gap-1" style={{lineHeight: '1.5', verticalAlign: 'middle'}}>
              <FaLocationDot className="text-lg text-red-500 align-middle" style={{display: 'inline-block', verticalAlign: 'middle'}} /> <span style={{display: 'inline-block', verticalAlign: 'middle'}}>{t.itinerary_airport_locations}</span>
            </div>
            <div className="stepper-time">{t.itinerary_airport_time}</div>
          </div>
        </div>
        <div className="stepper-step stepper-active">
          <div className="stepper-circle"><GiHorizonRoad/></div>
          <div className="stepper-line" />
          <div className="stepper-content">
            <div className="stepper-title">{t.itinerary_road_title}</div>
           <div className="stepper-status flex flex-row items-center gap-1" style={{lineHeight: '1.5', verticalAlign: 'middle'}}>
              <FaLocationDot className="text-lg text-red-500 align-middle" style={{display: 'inline-block', verticalAlign: 'middle'}} /> <span style={{display: 'inline-block', verticalAlign: 'middle'}}>{t.itinerary_road_from_maputo}</span>
            </div>
            <div className="stepper-time">{t.itinerary_road_time_maputo}</div>
            <div className="stepper-status flex flex-row items-center gap-1" style={{lineHeight: '1.5', verticalAlign: 'middle'}}>
              <FaLocationDot className="text-lg text-red-500 align-middle" style={{display: 'inline-block', verticalAlign: 'middle'}} /> <span style={{display: 'inline-block', verticalAlign: 'middle'}}>{t.itinerary_road_from_vilanculos}</span>
            </div>
            <div className="stepper-time">{t.itinerary_road_time_vilanculos}</div>
          </div>
        </div>
        {/* <div className="stepper-step stepper-pending">
          <div className="stepper-circle">3</div>
          <div className="stepper-content">
            <div className="stepper-title">Shipping</div>
            <div className="stepper-status">Pending</div>
            <div className="stepper-time">Estimated: May 30</div>
          </div>
        </div> */}
        {/* <div className="stepper-controls">
          <button className="stepper-button">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
            Previous
          </button>
          <button className="stepper-button stepper-button-primary">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </button>
        </div> */}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .stepper-box {
    background-color: white;
    padding: 32px;
    width: 80%;

  .stepper-step {
    display: flex;
    margin-bottom: 32px;
    position: relative;
  }

  .stepper-step:last-child {
    margin-bottom: 0;
  }

  .stepper-line {
    position: absolute;
    left: 19px;
    top: 40px;
    bottom: -32px;
    width: 2px;
    background-color: #e2e8f0;
    z-index: 1;
  }

  .stepper-step:last-child .stepper-line {
    display: none;
  }

  .stepper-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    z-index: 2;
  }

  .stepper-completed .stepper-circle {
    border: 2px solidrgb(29, 76, 184);
    background-color:rgb(62, 0, 249);
    color:rgb(255, 255, 255);
  }

  .stepper-active .stepper-circle {
    border: 2px solid red;
    color:rgb(0, 0, 0);
    background-color:rgb(255, 255, 255);
  }

  .stepper-pending .stepper-circle {
    border: 2px solid #e2e8f0;
    color: #94a3b8;
  }

  .stepper-content {
    flex: 1;
  }

  .stepper-title {
    font-weight: 600;
    margin-bottom: 4px;
  }

  .stepper-completed .stepper-title {
    color: #0f172a;
  }

  .stepper-active .stepper-title {
    color: #0f172a;
  }

  .stepper-pending .stepper-title {
    color: #94a3b8;
  }

  .stepper-status {
    font-size: 13px;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    margin-top: 4px;
  }

 
  .stepper-pending .stepper-status {
    background-color: #f1f5f9;
    color: #64748b;
  }

  .stepper-time {
    font-size: 12px;
    color: #94a3b8;
    margin-top: 4px;
  }

  .stepper-controls {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }

  .stepper-button {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .stepper-button-primary {
    background-color: #0f172a;
    color: white;
    border-color: #0f172a;
  }`;

export default Itinerary;
