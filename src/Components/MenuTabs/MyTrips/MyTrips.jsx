import React from 'react';
import TripDriver from '../../Trip-Driver/TripDriver';
import './MyTrips.css';


const trips = [
    {
        "number":"Id: 123456",
        "image":"image",
        "origin":"Origen: Abetos 500",
        "destination":"Destino: patria 300",
        "stars":2
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "origin":"Origen: Abetos 500",
        "destination":"Destino: patria 300",
        "stars":4
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "origin":"Origen: Abetos 500",
        "destination":"Destino: patria 300",
        "stars":3
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "origin":"Origen: Abetos 500",
        "destination":"Destino: patria 300",
        "stars":5
    },
    {
        "number":"Id: 123456",
        "image":"image",
        "origin":"Origen: Abetos 500",
        "destination":"Destino: patria 300",
        "stars":1
    }
]

function MyTrips() {
    return(
        <div className="page">
            <h2>Mis Viajes</h2>
            <div className="trips">
                {trips.map(( t =>
                    <TripDriver
                    image= "trip"
                    number= {t.number}
                    field2= {t.origin}
                    field3= {t.destination}
                    stars= {t.stars}
                    />
                ))}
            </div>
        </div>
    )
}

export default MyTrips;