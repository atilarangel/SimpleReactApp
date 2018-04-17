import React from 'react';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    updateSearch(event){
        this.props.updateSearch(event);
    }
    onSubmit(event){
        this.props.onSubmit(event);
    }
    render(){
        return(
            
            <form onSubmit={this.onSubmit}>
                <div className = 'input-fiel col s6'>
                    <input placeholder ='Write something' onChange = {this.updateSearch} type='text' value={this.props.search} />
                    <label>Search</label>
                </div>
            </form>
            
        );
    }
}