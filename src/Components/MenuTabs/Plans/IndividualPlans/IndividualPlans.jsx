import PropTypes from 'prop-types';
import React from 'react';
import './IndividualPlans.css'

function IndividualPlans(props) {
    return(
        <div className="item">
            <div className="titulo-plan">
                <h1>Plan</h1>
                <div className="numero">{ props.number }</div>
            </div>
            <hr/>
            <div className="descripcion-individual">
                <h4>{ props.name }</h4>
                <p>{ props.description }</p>
            </div>
            <div className="contratar">
                <input type="button" value="Contratar"/>
            </div>
        </div>
    )
}

IndividualPlans.propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  };

export default IndividualPlans;