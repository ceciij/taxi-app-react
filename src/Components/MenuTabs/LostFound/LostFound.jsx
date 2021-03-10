import React from 'react';
import './LostFound.css';
import Divider from '@material-ui/core/Divider';
import Search from './Search/Search';
import LostObject from './LostObject/LostObject';


function LostFound() {
    return(
        <div className="page">
            <section className="lost-found">
                <Search/>
                <Divider variant="middle" />
                <LostObject/>

            </section>
        </div>

    )
}

export default LostFound;