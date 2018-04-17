import React from 'react';
import Card from './card';
import Search from '../search/search';

export default class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {search: ''};
        this.updateSearch = this.updateSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    updateSearch(event){
        this.setState({search: event.target.value});
    }
    onSubmit(event){
        console.log(event.target.value)
        
    }
    render(){
        let news =[
            {title: 'Title 1', description: 'Descripition1', details: 'Details1', image: 'https://media1.tenor.com/images/64addf9870d8ac1a74980774a47f23bc/tenor.gif?itemid=11509949', link: ''},
            {title: 'Title 2', description: 'Descripition2', details: 'Details2', image: 'https://media1.tenor.com/images/64addf9870d8ac1a74980774a47f23bc/tenor.gif?itemid=11509949', link: ''},
            {title: 'Title 3', description: 'Descripition3', details: 'Details3', image: 'https://media1.tenor.com/images/64addf9870d8ac1a74980774a47f23bc/tenor.gif?itemid=11509949', link: ''},
            {title: 'Title 4', description: 'Descripition4', details: 'Details4', image: 'https://media1.tenor.com/images/64addf9870d8ac1a74980774a47f23bc/tenor.gif?itemid=11509949', link: ''},
            {title: 'Title 5', description: 'Descripition5', details: 'Details5', image:  'https://media1.tenor.com/images/64addf9870d8ac1a74980774a47f23bc/tenor.gif?itemid=11509949', link: ''}
        ];
        let aux = [];
        let newList = [];
        for(let k = 0; k< news.length; k++){
            aux.push(news[k]);
            if (aux.length == this.props.lineSize){
                newList.push(aux);
                aux = [];
            }else if(k==news.length-1){
                newList.push(aux);
            }
        }
        let colSize = 'col m'+this.props.colSize
        let cardList = function(group){
            return group.map(function(itens,index){
                    
                    return (
                        <div key={index} className = {colSize}><Card itens = {itens}/></div>
                    );
            });
        }
        let line = newList.map(function(group, index){
            return(
                <div key = {index} className='row'>
                    {cardList(group)}
                </div>
            );
        });
        return(
            <div>
            <div className='row'>
                <Search updateSearch={this.updateSearch} onSubmit={this.onSubmit} search={this.state.search} />
            </div>
            <div>
                {line}
            </div>
            </div>
        );      
    }
}