import React from 'react';
import IndividualPlans from './IndividualPlans/IndividualPlans';
import './Plans.css'
import plansImage from '../../../Assets/images/planes.jpg';

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
        <section className="container-afiliacion">
            <div className="img-planes">
                <img src={ plansImage } alt="PLANES"/>
            </div>
            <div className="descripcion-planes">
                <h2>Afíliate</h2>
                <p>
                    Lorem ipsumicing elit. Qui sint nisi officia consectetur accusamus tempora, dolorem, numquam porro ea architecto tenetur harum perferendis molestiae labore repellendus inventore fugiat ipsa iure.
                    Lorem . Quos minus id expedita unde consectetur. Quae, unde excepturi quos, atque non et iure, illum similique adipisci eaque deserunt assumenda numquam est?
                </p>
                <input type="button" value="Ver Planes"/>
            </div>
        </section>

        <section className="container-planes">
            <h1>Planes Mensuales</h1>
            <div className="planes">
                { plans.map( plan => 
                    <IndividualPlans
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