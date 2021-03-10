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
        iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
        },
        {
        number: 2,
        value: 'Reserva',
        iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
        },
        {
        number: 3,
        value: 'Paga',
        iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
        },
    ]

    return(
        <div className = {`${classes.root} section`}>
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