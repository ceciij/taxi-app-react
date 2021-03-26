import React from 'react';
import IndividualPlans from './IndividualPlans/IndividualPlans';
import './Plans.css'
import plansImage from '../../../Assets/images/planes.jpg';
import Button from '../../Button/Button';


const plans = [{
    name: 'INICIAL',
    description: 'This is the description for the plan 1.. cost $454',
    id: '1' 
},
{
    name: 'FRECUENTE',
    description: 'This is the description for the plan 2.. cost $454',
    id: '2' 
},
{
    name: 'PREMIUM',
    description: 'This is the description for the plan 3.. cost $454',
    id: '3'  
}
];

function Plans(){
    return(
        <>
        <div className="container-afiliacion">
            <div className="img-planes">
                <img src={ plansImage } alt="PLANES"/>
            </div>
            <div className="descripcion-planes">
                <h2>Afíliate</h2>
                <p>
                    Contrata un plan mensual y obtén
                    descuentos en tus viajes, tenemos los mejores
                    planes que se ajustan con tus necesidades.
                    Viaja con la seguridad de chóferes
                    registrados y evaluados y viajes monitoreados.
                    Solicita y cotiza tu taxi en cualquier
                    lugar y momento que lo requieras.
                </p>
                <Button 
                    value = 'Ver planes'
                    backgroundColor = 'black'
                    color = 'white'
                    click = { () => {} }
                    linkto="#planes"
                />
            </div>
        </div>

        <section className="container-planes" id="planes">
            <h1>Planes Mensuales</h1>
            <div className="planes">
                { plans.map( plan => 
                    <IndividualPlans
                        key= {plan.id}
                        number = { plan.id }
                        name = { plan.name }
                        description = { plan.description }    
                    />)}
            </div>  
        </section>
        </>
            )
}

export default Plans