import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Form from '../Form/Form';
import PropTypes from 'prop-types';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const  [id, setId] = React.useState(0);
    console.log(id)

    React.useEffect(
        ()=> {
            if(isOpen){
                setId(setInterval( ()=>{
                    console.log('dentro de timer')
                } , 3000 ))
            }
        return ()=> clearInterval(id)
        }, [id]
    )

    return (
      <div>
        <Modal
          open={ props.isOpen }
          onClose={ () => props.setIsOpen(false) }
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
              <Form/>
          </div>
        </Modal>
      </div>
    );

  }

  SimpleModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired
  }

export default SimpleModal;