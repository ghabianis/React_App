import React from 'react';
import { Switch } from '@material-ui/core';
import { Route, Router } from 'react-router';
import App from '../../App';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Cards from '../Cards';


function Home(){
    return(
       /* <>
          <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </Router>
        </>*/
        <>
           <HeroSection/>
           <Cards/>
        </>
    )
}

export default Home;