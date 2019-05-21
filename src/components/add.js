import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Add extends Component {
    constructor(props){
        super(props)
        this.state={
            class:'block'

        }
    }
remove=()=>{
   this.setState({
       class:'none'
   }) 
}
    render() { 
        return ( 
            <Router>
            <div style={{display:this.props.show ? this.state.class : 'none'}} className='form-add' id='hh'>
            <div className="form">
                <input id="name" className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie name" />
                <input id="rating" className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie rating" />
                <input id="img" className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie image"/>
                <button className="btn" onClick={this.props.addMovie}>Save</button>
                <span className="sform" onClick={this.remove}><Link to='/' >x</Link></span>
            </div>
            </div>
            </Router>
         );
    }
}
 
export default Add;