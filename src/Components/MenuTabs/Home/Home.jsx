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
        name: 'ana',
        review: 'this is the review 1',
        id: '1' 
    },
    {
        name: 'juan',
        review: 'this is the review 2',
        id: '2'   
    },
    {
        name: 'juan',
        review: 'this is the review 3',
        id: '3'   
    }
];
const us = {
    title: '¿Por qué nosotros?',
    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam, odit nihil corrupti vitae aliquam voluptatem ut placeat omnis dolores corporis alias, dolorum reprehenderit at quae consectetur debitis, unde est.'
}



function Home(props){

    const [ isOpen, setIsOpen ] = React.useState(false)

    return(
            <div className = "App">
                <SectionImage 
                    setUserLogged = { () => props.setUserLogged(true) } 
                />
                <Container className="Steps Container" maxWidth="md">
                    <Steps/>
                </Container>
                <Container className="Us Container"  maxWidth="md">
                    <Section
                        title = { us.title }
                        content = { us.content }
                    />
                </Container>
                <Container className="Reviews Container" maxWidth="md">
                    <h2> ¿Qué dicen nuestros usuarios? </h2>
                    <Cards content = { reviews }/>
                </Container>
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
