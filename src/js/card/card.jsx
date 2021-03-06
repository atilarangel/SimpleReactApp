import React from 'react';

export default class Card extends React.Component{
    render(){
        return(
            <div className="card">
                
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.itens.image} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.itens.title}<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">{this.props.itens.details}</a></p>
                </div>
                <div className="card-action">
                    <a href="#">{this.props.itens.description}</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.itens.title}
                    <i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
            
        );
    
    }
}