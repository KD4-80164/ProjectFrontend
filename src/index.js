import React from 'react';
import ReactDOM from 'react-dom/client';
//import Launcher from './Launcher';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <BrowserRouter>
            {/*<Launcher></Launcher>*/}
            <Home></Home>
            </BrowserRouter>);


