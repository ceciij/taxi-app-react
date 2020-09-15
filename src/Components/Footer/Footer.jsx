import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


function Footer () {
    return(
        <div className="Footer">
            <div className="info">
                All rights reserved
            </div>
            <div className="contact">
                Contacto: 333666888
            </div>
            <div className="icons">
                <TwitterIcon className = "icon" style={{ fontSize: 40 }}/>
                <FacebookIcon className = "icon" style={{ fontSize: 40 }}/>
            </div>
        </div>
    )
}

export default Footer