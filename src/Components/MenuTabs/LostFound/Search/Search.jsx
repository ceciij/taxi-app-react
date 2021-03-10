import React from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '../../../Button/Button';


function Search() {
    return(
        <>
            <h2>Ingresa tu número de viaje</h2>
            <TextField 
                id="outlined-search" 
                label="Número de viaje" 
                type="search" 
                variant="outlined" 
            />
            <Button
                value="Buscar"
                color="white"
                backgroundColor="green"
                click={()=>{ }}
                linkto= "#lost-object"
            />
        </>
    )
}

export default Search;