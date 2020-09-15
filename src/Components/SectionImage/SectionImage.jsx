import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../Assets/taxi-background.jpg';
import './SectionImage.css'
import Button from '../Button/Button';
import logo from '../../Assets/logo.svg';



const useStyles = makeStyles ({
    root: {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
  });



function SectionImage({ image }) {

    const onClickHandler = (e, id)=> {
        console.log('le picaste, aqui va la logica')
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
                    click = { onClickHandler }
                />
            </div>
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    )
}




export default SectionImage;

