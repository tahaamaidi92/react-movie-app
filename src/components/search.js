import React, { Component } from 'react';
import Movies from '../components/movies.js';
class Search extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return ( 
            <div className="search">
            <input type="text" placeholder="Type movie name to search" onChange={this.props.searchMovie} className="search-text" />
            <span className="search-btn">Search</span>
            <div className="rating">
                <p className="rating-text">Minimuim rating</p>
                <div className="rating-stars" >
                    <i class="fas fa-star" onClick={this.props.search1}></i>
                    <i class="fas fa-star" onClick={this.props.search2}></i>
                    <i class="fas fa-star" onClick={this.props.search3}></i>
                    <i class="fas fa-star" onClick={this.props.serch4}></i>
                    <i class="fas fa-star" onClick={this.props.search5}></i>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Search;