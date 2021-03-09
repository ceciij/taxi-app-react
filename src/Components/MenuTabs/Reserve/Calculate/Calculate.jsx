import React from 'react';
import './Calculate.css'
import map from '../../../../Assets/images/map.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../../Button/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Calculate(){
    const classes = useStyles();
    return(
        <section className="reservar">
            <h2>¿A dónde vas?</h2>
            <div className="items">
                <img className="map-image" src= { map } alt="GoogleMaps" />
                <form className = {classes.root} noValidate autoComplete="off">
                    <div className="form">
                        <TextField
                            id="outlined-required"
                            label="Origen"
                            variant="outlined"
                            placeholder= "Ubicación Actual"
                            defaultValue= ""
                        />
                        <TextField
                            id="outlined-required"
                            label="Destino"
                            placeholder="Escribe tu destino"
                            variant="outlined"
                            defaultValue= ""
                        />
                        <TextField id="standard-basic" label="Distancia" />
                        <TextField id="standard-basic" label="Costo" />
                        <Button
                            value="Pagar"
                            color="white"
                            backgroundColor="green"
                            click={()=>{}}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Calculate