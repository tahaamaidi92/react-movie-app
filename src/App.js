import React, { Component } from 'react';
import Movies from './components/movies';
import Search from './components/search';
import Add from './components/add';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movie: [
        {
          name: "The Kid King",
          img:
            "https://i.pinimg.com/736x/4c/d7/4f/4cd74fd7090ed1d390a8b641889dfeb5.jpg",
            rating: 1
        },
        {
          name: "The Last Men",
          img:
            "https://static.rogerebert.com/uploads/movie/movie_poster/the-last-man-2019/large_last-poster.jpg",
            rating: 2
        },
        {
          name: "The Rising Hawk",
          img:
            "https://m.media-amazon.com/images/M/MV5BOGVlNzhmYWYtMzk4MS00YmEwLTk3MDYtODM0ZWUwM2Q4Mzg5XkEyXkFqcGdeQXVyMzA0OTQzODE@._V1_.jpg",
            rating: 3
        },
        {
          name: "Captain Marvel",
          img:
            "https://sharkscene.com/wp-content/uploads/2019/03/CaptainMarvel2.jpg",
            rating: 4
        },
        {
          name: "Hellboy",
          img:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Hellboy_%282019%29_theatrical_poster.png/220px-Hellboy_%282019%29_theatrical_poster.png",
            rating: 5
        },
        {
          name: "tomb raider",
          img:
            "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/ALICIA-VIKANDER-1224758.jpg",
            rating: 5
        }
      ],
        search:'' ,
        modal:false,
        name:'',
        rating:0,
        star:5
    }
  }
  searchMovie=(event)=>
{
this.setState({search:event.target.value})
}
  toggleModal = (e) => {
    this.setState({ 
      modal: !this.state.modal });
  };
  hundleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  addMovie = () => {
    this.setState({
      movie:[...this.state.movie, {name:this.state.name, rating:this.state.rating,img:this.state.img }]
    });
    this.toggleModal();
  };
  search1=()=>{
    this.setState({
      star:1
    })
  }
  search2=()=>{
    this.setState({
      star:2
    })
  }
  search3=()=>{
    this.setState({
      star:3
    })
  }
  search4=()=>{
    this.setState({
      star:4
    })
  }
  search5=()=>{
    this.setState({
      star:5
    })
  }
  render() { 
    return ( 
      <div className="App">
      <Search searchMovie={this.searchMovie} 
      search1={this.search1}
      search2={this.search2}
      search3={this.search3}
      search4={this.search4}
      search5={this.search5}/>
      <Movies moviesList={this.state.movie.filter((x)=>{ return(x.name.toLowerCase().indexOf(this.state.search.toLowerCase())!=-1 && x.rating<=this.state.star)})}
      toggleModal={this.toggleModal} />
      <Add show={this.state.modal}
      hundleChange={this.hundleChange}
      addMovie={this.addMovie} />
    </div>
     );
  }
}
 
export default App;