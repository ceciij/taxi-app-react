import React from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '../../../Button/Button';


function Search() {
    return(
        <div className="seccion-buscar">
            <h2 className="search-titulo">Ingresa tu número de viaje</h2>
            <TextField 
                id="outlined-search" 
                label="Número de viaje" 
                type="search" 
                variant="outlined" 
            />
            <div className="buscar-btn">
                <Button
                    value="Buscar"
                    color="white"
                    backgroundColor="green"
                    click={()=>{ }}
                    linkto= "#lost-object"
                />
            </div>
        </div>
    )
}

export default Search;