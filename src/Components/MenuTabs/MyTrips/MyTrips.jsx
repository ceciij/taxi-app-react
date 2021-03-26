import React from 'react';
import TripDriver from '../../Trip-Driver/TripDriver';
import './MyTrips.css';


const trips = [
    {
        "number":"Id: 0001245",
        "image":"image",
        "origin":"Origen: Abetos #500",
        "destination":"Destino: Av. Patria #22",
        "stars":2
    },
    {
        "number":"Id: 00012454",
        "image":"image",
        "origin":"Origen: Fidias #41",
        "destination":"Destino: Paseo Loma #300",
        "stars":4
    },
    {
        "number":"Id: 0001299",
        "image":"image",
        "origin":"Origen: Jesus Rojas #580",
        "destination":"Destino: Av. Patria #18",
        "stars":3
    },
    {
        "number":"Id: 0001246",
        "image":"image",
        "origin":"Origen: San Jesus #1215",
        "destination":"Destino: Juan Pablo II #454",
        "stars":5
    },
    {
        "number":"Id: 0001248",
        "image":"image",
        "origin":"Origen: Av. José Cabo #548",
        "destination":"Destino: Av. San Gonzalo #120",
        "stars":1
    },
    {
        "number":"Id: 0001288",
        "image":"image",
        "origin":"Origen: Abetos #555",
        "destination":"Destino: Juana de Arco #300",
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