import React from 'react';
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

function Form() {
    const classes = useStyles();
    return(
        <>
            <h3>Registro de usuarios</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    variant="outlined"
                    placeholder ="Nombre"
                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                    variant="outlined"
                    placeholder ="Apellido"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Correo"
                    variant="outlined"
                    placeholder ="@gmail.com"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Usuario"
                    variant="outlined"
                    placeholder ="Usuario"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    placeholder ="Contraseña"
                />
                <Button
                    value="Registrarme"
                    color="white"
                    backgroundColor="black"
                    click = { ()=>{} }
                />
            </form>
        </>
    )
}

export default Form;