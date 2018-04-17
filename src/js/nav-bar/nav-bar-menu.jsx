import React from 'react';

export default class NavMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = { menuAtivo: 'Home'};
        this.alteraActive = this.alteraActive.bind(this);
    }
    alteraActive(title, self){
        self.setState({menuAtivo: title});
    }
    render(){
        
        let self =this;
        let list = this.props.menu.map(function(value){
            return (
            <li key={value.title} onClick={self.alteraActive.bind(null,  value.title, self)} className={self.state.menuAtivo == value.title ? 'active' : ''}><a href={value.link}>{value.title}</a></li>
            );
        });
        return (
            <ul id="nav-mobile" className="right">
                    {list}
            </ul>
        );
    }
}