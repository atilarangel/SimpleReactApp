import React from 'react';
import Card from './card';

export default class CardList extends React.Component{
    render(){
        let news =[
            {title: 'Title 1', description: 'Descripition1', details: 'Details1', image: "https://media1.tenor.com/images/d176da8e6c34e8e6f7c15863bd4e4641/tenor.gif?itemid=4110985", link: ''},
            {title: 'Title 2', description: 'Descripition2', details: 'Details2', image: 'https://media.tenor.com/images/e3595060bd814a1e852d31f0d426a283/tenor.gif', link: ''},
            {title: 'Title 3', description: 'Descripition3', details: 'Details3', image: 'https://media1.tenor.com/images/64addf9870d8ac1a74980774a47f23bc/tenor.gif?itemid=11509949', link: ''},
            {title: 'Title 4', description: 'Descripition4', details: 'Details4', image: 'https://media1.tenor.com/images/17fba3ec0a42fde4fec160d1ba0416b7/tenor.gif?itemid=3732954', link: ''},
            {title: 'Titl 5', description: 'Descripition5', details: 'Details5', image: 'https://media1.tenor.com/images/a7dcb3be715f41992b225e9e9a263d4e/tenor.gif?itemid=7579855', link: ''}
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
                {line}
            </div>   
        );      
    }
}