import React from 'react';
import './Methods.css';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function Methods( props ){
    const classes = useStyles();

    return(
        <div className={classes.root}>
          <h2>{ props.name }</h2>
            <Fab href="#confirmation" color="primary" aria-label="add">
                {   
                    props.name==='Efectivo' ? 
                    <MonetizationOnIcon /> :
                    props.name === 'Tarjeta' ?
                    <CreditCardIcon/> :
                    <AccountCircleIcon/>
                }
            </Fab>
        </div>
    )
}


Methods.propTypes = {
    name: PropTypes.string.isRequired,
  };

export default Methods;