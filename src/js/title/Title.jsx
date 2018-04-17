import React from 'react';

export default class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {hora: new Date()};
    }
    componentDidMount(){
        this.horaID = setInterval(
            ()=>this.atualizarSegundos(),
            1000
        );
    }
    atualizarSegundos(){
        this.setState({hora: new Date()});
    }
    componentWillMount(){
        clearInterval(this.horaID);
    }
    render(){
        return <h1>Learnin ReactJs {this.state.hora.toLocaleTimeString()}</h1>;
    
    }
}