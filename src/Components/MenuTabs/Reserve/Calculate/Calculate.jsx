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
  
  const calculateCost = ()=>{
      let distancia = document.querySelector('.input-distancia');
      
      let costo = document.querySelector('.input-costo');
      distancia.innerHTML= 'Distancia: 17.6 KM'
      costo.innerHTML= 'Costo: $ 182.00 MXN'

  }


function Calculate(){
    const classes = useStyles();
    return(
        <section className="calculate">
            <h2 className="reservar-titulo">¿A dónde vas?</h2>
            <div className="items">
                <img className="map-image" src= { map } width="400px" alt="GoogleMaps" />
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
                        <Button
                            value="Calcular"
                            color="white"
                            backgroundColor="gray"
                            click={()=>{ calculateCost() }}
                        />
                        <TextField className="input-distancia" id="standard-basic" label="Distancia" />
                        <TextField className="input-costo" id="standard-basic" label="Costo" />
                        <Button
                            value="Pagar"
                            color="white"
                            backgroundColor="green"
                            click={()=>{ }}
                            linkto= "#pay-methods"
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Calculate