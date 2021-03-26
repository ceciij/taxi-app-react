import React from 'react'
import './Step.css'
import SvgIcon from '@material-ui/core/SvgIcon';


function Step({ number, value, iconPath }){
    return(
        <div className="Step">
            <div className="number">{ number }</div>
            <div className="value">{ value }</div>
            <div className="icon">
                <SvgIcon style={{ fontSize: 40 }}>
                    <path d= { iconPath } />
                </SvgIcon>
            </div>
        </div>
    )
}

export default Step