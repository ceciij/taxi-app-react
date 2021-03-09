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
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon className = "icon" style={{ fontSize: 40 }}/></a> 
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon className = "icon" style={{ fontSize: 40 }}/></a> 
                
            </div>
        </div>
    )
}

export default Footer