import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Card = ({ rating, name , img }) => {
    return (
    <div className="movie"> <div className="movie-stars">
        <span>{''.padEnd(rating,'*').split('').map(x=>{
           return <i class="fas fa-star"></i>
        })}</span>
    </div>
        <img className="img" src={img}/>
        <h1 className="movie-name">{name}</h1> 
        </div>
    )
}

class Movies extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return ( 
            <Router>
<main className="main">
                <div className="movies-list">
                    {this.props.moviesList.map(x => {
                        return <Card rating={x.rating} name={x.name} img={x.img} />
                    })}
                    <div onClick={this.props.toggleModal} className="movie">
                     <a href='#hh' >   <i class="fas fa-plus"  ></i></a>
                    </div>
                </div>
            </main>
            </Router>
         );
    }
}
 
export default Movies;