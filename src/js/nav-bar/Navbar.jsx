import React from 'react';
import NavMenu from './nav-bar-menu'

export default class Navbar extends React.Component{
    render(){
        let menu = [
            {title:'Home', link:'#home'},
            {title:'About', link:'#about'},
            {title:'contact', link:'#contact'}
        ]
        let navColor = 'nav-wrapper '+ this.props.color;
        
        return(
        <nav>
            <div className={navColor}>
            <div className='container'>
                <a href="#" className="brand-logo left">{this.props.title}</a>
                <NavMenu menu={menu}/>
            </div>
            </div>
        </nav>

    );
    }
}