import React from 'react'
import Step from '../Step/Step';
import { makeStyles } from '@material-ui/core/styles';
import './Steps.css'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

function Steps(){
    const classes = useStyles();

    const pasos = [{
        number: 1,
        value: 'Registrate',
        iconPath: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
        },
        {
        number: 2,
        value: 'Reserva',
        iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
        },
        {
        number: 3,
        value: 'Paga',
        iconPath: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z'
        },
    ]

    return(
        <div className = {`${classes.root} steps-items`}>
            {pasos.map( (paso => 
                <Step
                    key = {paso.number} 
                    number = { paso.number }
                    value = { paso.value }
                    iconPath = { paso.iconPath }
                />
            ))}
        </div>
    )
}

export default Steps