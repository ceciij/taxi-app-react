import React from 'react';
import Section from './Section/Section';
import SectionImage from './SectionImage/SectionImage';
import Steps from './Steps/Steps';
import Container from '@material-ui/core/Container';
import './Home.css'
import Cards from '../../Cards/Cards';
import SimpleModal from '../../Modal/Modal';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';


const reviews = [{
        name: 'Ana Cecilia',
        review: '"Descargué esta aplicación y me encantó. Es bastante segura y el taxi llega más rapido que antes. Ahora puedo contrar un plan mensual y me sale mas barato."',
        id: '1' 
    },
    {
        name: 'Aura Leyva',
        review: '"Desde hace mucho tiempo utilizo taxis para transportarme, y me gusta que ahora puedo pagar con tarjeta porque muchas veces se me acaba el efectivo."',
        id: '2'   
    },
    {
        name: 'Juan Sanchez',
        review: '"Me gusta esta app porque ahora puedo tener un mejor control de mis traslados y además puedo saber desde antes con quien me estoy subiendo"',
        id: '3'   
    }
];
const us = {
    title: '¿Por qué nosotros?',
    content : 'Taxi App es una platforma única, donde podemos unir a taxistas con los usuarios de una manera mucho más rápida, segura y eficaz. Adicional manejamos planes mensuales que se ajustan a tus necesidades económicas.'
}



function Home(props){

    const [ isOpen, setIsOpen ] = React.useState(false)

    return(
            <div className = "App">
                <SectionImage 
                    setUserLogged = { () => props.setUserLogged(true) } 
                />
                <div className="Steps" maxWidth="md">
                    <div className="cont" maxWidth="md">
                        <Steps/>
                    </div>
                </div>
                <Container className="Us Container"  maxWidth="md">
                    <Section
                        title = { us.title }
                        content = { us.content }
                    />
                </Container>
                <div className="Reviews cont" maxWidth="md">
                    <h2> ¿Qué dicen nuestros usuarios? </h2>
                    <div className="reviews-items">
                        <Cards content = { reviews }/>
                    </div>
                </div>
                <Container className="Registro Container" maxWidth = "md">
                    <Button
                        value = 'Registrarme'
                        backgroundColor = 'black'
                        color = 'white'
                        click = { () => setIsOpen(true) }
                    />
                </Container>
                <SimpleModal
                    isOpen = { isOpen }
                    setIsOpen = { setIsOpen }
                />
            </div>
    )
}

Home.propTypes = {
    setUserLogged: PropTypes.func.isRequired,
  };

export default Home
