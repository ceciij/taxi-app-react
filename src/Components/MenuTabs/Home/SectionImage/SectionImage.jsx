import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../../Assets/images/taxi-background.jpg';
import './SectionImage.css'
import Button from '../../../Button/Button';
import logo from '../../../../Assets/images/logo.svg';
import SimpleModal from '../../../Modal/Modal';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles ({
    root: {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
  });



function SectionImage({ setUserLogged }) {
    let history = useHistory();

    const [ isOpen, setIsOpen ] = React.useState(false)

    const onClickHandler = (e, id)=> {
        setUserLogged(true)
        history.push('/Reserve')
    }

    const classes = useStyles();

    return(
        <div className = { `${ classes.root } SectionImage ` }>
            <div className="buttons">
                <Button
                    value = 'Ingresar'
                    color = 'white'
                    backgroundColor = 'green'
                    click = { onClickHandler }
                />
                <Button
                    value = 'Registrarme'
                    color = 'black'
                    backgroundColor = 'white' 
                    click = { () => setIsOpen(true)}
                />
            </div>
            <SimpleModal
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
            />
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    )
}

SectionImage.propTypes = {
    setUserLogged: PropTypes.func.isRequired,
  };

export default SectionImage;

