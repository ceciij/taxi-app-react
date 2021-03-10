import React from 'react';
import './Reserve.css';
import Calculate from './Calculate/Calculate';
import PayMethods from './PayMethods/PayMethods';
import Divider from '@material-ui/core/Divider';
import Confirmation from './Confirmation/Confirmation';



function Reserve(){
   
    return(
        <div className="page">
            <Calculate/>
            <Divider/>
            <PayMethods/>
            <Divider/>
            <Confirmation/>
        </div>
    )
}

export default Reserve;