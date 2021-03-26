import React from 'react';
import './TripDriver.css';
import PropTypes from 'prop-types';
import circle from '../../Assets/images/circle.png'
import driver from '../../Assets/images/driver.jpg'
import Stars from '../Stars/Stars';


function TripDriver( props ){
    return(
        <div className="trip-driver-item">
            <img src= { props.image ==='trip' ? circle: driver } alt="Viaje"/>
            <div className="information">
                <div className="driver-number">{ props.number }</div>
                <div className="information">
                    <div className="field1">{ props.field1 }</div>
                    <div className="field2">{ props.field2 }</div>
                    <div className="field3">{ props.field3 }</div>
                </div>
                <div className="stars">
                    { [...Array(props.stars).keys()].map((s=>
                        <Stars/>
                    ))}
                </div>
            </div>
        </div>
    )
}

TripDriver.propTypes = {
    image: PropTypes.string,
    number: PropTypes.string,
    field1: PropTypes.string,
    field2: PropTypes.string,
    field3: PropTypes.string,
    stars: PropTypes.number,
  };

export default TripDriver;