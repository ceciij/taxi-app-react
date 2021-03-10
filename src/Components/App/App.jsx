import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Drivers from '../MenuTabs/Drivers/Drivers';
import Home from '../MenuTabs/Home/Home';
import Plans from '../MenuTabs/Plans/Plans';
import Reserve from '../MenuTabs/Reserve/Reserve';
import MyTrips from '../MenuTabs/MyTrips/MyTrips';
import LostFound from '../MenuTabs/LostFound/LostFound';
import './App.css'

function App(){

    const [userLogged, setUserLogged] = React.useState(false);

    return(
        <div className="App">
            <Router>
            { 
                userLogged ? <Header/> : ''
            }
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Home" exact>
                        <Home 
                            setUserLogged = { () => setUserLogged(true) }/>
                    </Route>
                    <Route path="/Reserve" exact>
                        <Reserve/>
                    </Route>
                    <Route path="/Plans" exact>
                        <Plans/>
                    </Route>
                    <Route path="/Drivers">
                        <Drivers/>
                    </Route>
                    <Route path="/MyTrips">
                        <MyTrips/>
                    </Route>
                    <Route path="/LostFound">
                        <LostFound/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App
