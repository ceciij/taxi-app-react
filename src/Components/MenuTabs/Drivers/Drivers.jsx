import React from 'react';
import './Drivers.css';
import TripDriver from '../../Trip-Driver/TripDriver';



const drivers = [
    {
        "number":"Id: 123456",
        "image":"image",
        "name":"Nombre: Alberto Sanchez",
        "placas":"Placas JNA-50-36",
        "stars":2
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "name":"Nombre: Alberto Sanchez",
        "placas":"Placas JNA-50-36",
        "stars":3
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "name":"Nombre: Alberto Sanchez",
        "placas":"Placas JNA-50-36",
        "stars":4
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "name":"Nombre: Juan Sanchez",
        "placas":"Placas JNA-50-36",
        "stars":5
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "name":"Nombre: Mariana Sanchez",
        "placas":"Placas JNA-50-36",
        "stars":5
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "name":"Nombre: Mariana Sanchez",
        "placas":"Placas JNA-50-36",
        "stars":5
    }
]

function Drivers() {
    return(
        <div className="page">
            <h2>Conoce a nuestros choferes</h2>
            <div className="drivers">
                {drivers.map(( d =>
                    <TripDriver
                    image= "driver"
                    number= {d.number}
                    field2= {d.name}
                    field3= {d.placas}
                    stars= {d.stars}
                    />
                ))}
            </div>
        </div>    
        )
}

export default Drivers;