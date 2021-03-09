import React from 'react';
import Button from '../../../Button/Button';
import Cards from '../../../Cards/Cards';
import './PayMethods.css';


const payMethods=[
    {   
        "id": 1,
        "review": "Efectivo",
        "icon": "imgEfectivo"
    },
    {   
        "id": 2,
        "name": "Tarjeta",
        "icon": "imgtarjeta"
    },
    {   
        "id": 3,
        "name": "Plan",
        "icon": "imgPlan"
    }
]

function PayMethods(){
   
    return(
        <section className="pay-methods">
            { payMethods.map(methods => 
                <Cards
                    content = {PayMethods}
                />
            )
            }
            <Button
                value= "Pagar"
                color= "white"
                backgroundColor="green"
                click= { ()=>{} }
            />
        </section>
    )
}

export default PayMethods;