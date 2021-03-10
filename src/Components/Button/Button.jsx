import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: props => props.backgroundColor,
      color: props => props.color
    },
  },
}));

function Button(props){
    const handleClick = (e)=>{
        props.click()
    }

    const classes = useStyles(props);

    return(
        <div className={classes.root}>
            <Fab 
              variant="extended" 
              onClick={ handleClick }
              href={ props.linkto }
              >
                { props.value }
            </Fab>
        </div>
    )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    click: PropTypes.func.isRequired,
    linkto: PropTypes.string,
  };

export default Button;
