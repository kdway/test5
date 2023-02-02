import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact'
import Com from './pages/communication/Com';
import Net from './pages/computer/Net';
import Dev from './pages/Dev';
import BJ from './pages/BJ';
import French from './pages/communication/French';
import css from './pages/css';
import Webop from './pages/Webop';
import Login from'./pages/Login';
import Quiz from './pages/computer/Quiz';
import Quiz1 from './pages/computer/Quiz1';
import EBOOK from './pages/BOOKS/EBOOK';
import Windows from './pages/Windows/Windows'



import './App.css'

import {BrowserRouter,Switch, Route, } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Navbar />
         <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Navbar" component={Navbar} />
                <Route path="/Footer" component={Footer} />
                <Route path="/Com" component={Com} />
                <Route path="/Net" component={Net} />
                <Route path="/Dev" component={Dev} />
                <Route path="/BJ" component={BJ} />
                <Route path="/French" component={French} />
                <Route path='/css' component={css}/>
                <Route path='/Webop' component={Webop}/>  
                <Route path='/Login' component={Login} />
                <Route path='/Quiz' component={Quiz} />
                <Route path='/Quiz1' component={Quiz1} />
                <Route exact path='/EBOOK' component={EBOOK} />
                <Route path='/Windows' component={Windows}>
               
                </Route>    
                


           </Switch>
            </BrowserRouter>
        </div>
    );
};


export default App;