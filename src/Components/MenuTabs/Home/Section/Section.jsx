import React from 'react';
import './Section.css'

function Section ({ title, content}) {
    return(
        <div className="section">
            <h2 className="titulo-seccion">{ title }</h2>
            <p className="contenido-seccion">{ content }</p>        
        </div>
    )
}

export default Section;