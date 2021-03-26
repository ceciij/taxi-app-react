import React from 'react';
import './LostObject.css';
import TextField from '@material-ui/core/TextField';
import Button from '../../../Button/Button';



function LostObject() {
    return(
        <section className="lost-object" id="lost-object" >
            <h3>¿Qué objeto olvidaste?</h3>
            <br/>
            <TextField
                id="outlined-multiline-static"
                label="Aretes, celular, etc"
                multiline
                rows={4}
                placeholder="Describe detalladamente el objeto que olvidaste"
                variant="outlined"
            />
            <Button
                value="Enviar"
                color="white"
                backgroundColor="black"
                click={()=>{ }}
                linkto= "#lost-object"
            />
        </section>
    )
}

export default LostObject;