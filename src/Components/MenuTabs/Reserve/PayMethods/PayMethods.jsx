import React from 'react';
import Methods from './Methods/Methods';
import './PayMethods.css';


const payMethods=[
    {   
        "id": 1,
        "name": "Efectivo",
    },
    {   
        "id": 2,
        "name": "Tarjeta",
    },
    {   
        "id": 3,
        "name": "Plan",
    }
]

function PayMethods(){
   
    return(
        <section className="pay-methods" id="pay-methods">
            <div className="methods">

                { payMethods.map(m => 
                    <Methods
                        name= { m.name }
                        key={ m.id }
                    />
                )
                }
            </div>
        </section>
    )
}

export default PayMethods;