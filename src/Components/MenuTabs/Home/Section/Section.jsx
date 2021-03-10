import React from 'react';

function Section ({ title, content}) {
    return(
        <>
            <h2>{ title }</h2>
            <p>{ content }</p>        
        </>
    )
}

export default Section;