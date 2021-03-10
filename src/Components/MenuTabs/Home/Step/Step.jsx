import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';


function Step({ number, value, iconPath }){
    return(
        <div className="Step">
            <div className="number">{ number }</div>
            <div className="value">{ value }</div>
            <SvgIcon style={{ fontSize: 40 }}>
                <path d= { iconPath } />
            </SvgIcon>
        </div>
    )
}

export default Step