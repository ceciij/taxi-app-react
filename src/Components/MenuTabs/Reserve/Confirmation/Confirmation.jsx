import React from 'react';
import './Confirmation.css';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Confirmation(){
    const classes = useStyles();
   
    return(
        <section className="confirmation"  id="confirmation">
            <div className="icon">
                <CheckCircleOutlineIcon style={{ fontSize: 120 }}/>
            </div>
            <Card className={`${classes.root} card`}>
                <CardContent>
                    <h3 className="confirmation-details">RESERVADO</h3>
                    <h5 className="confirmation-details">Resumen</h5>
                    <p className="confirmation-details">25/Feb/2020</p>
                    <p className="confirmation-details">4:55pm</p>
                    <p className="confirmation-details">Desde Av. Patria #300</p>
                    <p className="confirmation-details">Hacia Abetos #500</p>
                    <p className="confirmation-details">17 km - $182.00</p>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Volvar al inicio</Button>
                </CardActions> */}
            </Card>
            

            
        </section>
       
    )
}

export default Confirmation;