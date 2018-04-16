import React from 'react';

export default class NavMenu extends React.Component{
    render(){
        let list = this.props.menu.map(function(value, index){
            return (
            <li key={index}><a href={value.link}>{value.title}</a></li>
            );
        });
        return (
            <ul id="nav-mobile" className="right">
                    {list}
            </ul>
        );
    }
}