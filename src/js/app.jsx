import ReactDom from 'react-dom';
import React from 'react';

import Title from './title/Title';
import Navbar from './nav-bar/Navbar';
import Card from './card/card';
import CardList from './card/card_list';

let App = (
    <div>
        <Navbar title ='Atila' color ='blue'/>
    <div className='container'>
        <Title />
        <CardList lineSize = '1' colSize = '6'/>
        </div>
    </div>
    
);

ReactDom.render(App, document.getElementById('app'))