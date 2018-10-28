import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemeItem from './MemeItem';
import '../styles/index.css';

import { Form , FormGroup , ControlLabel , FormControl } from 'react-bootstrap';
import MyMemes from './MyMemes';

class App extends Component{

    constructor(){
        super();
        this.state={
            memeLimit:10,
            text0: '',
            text1: ''
        };
    }

    render(){
        return (
            <div>
                <h2><u>Welcome to the Meme Generator </u></h2>
                <MyMemes />
                <h4><i>Write some text ... </i></h4>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Top</ControlLabel>
                        {' '}
                        <FormControl 
                            type="text"
                            onChange={(e)=>{ this.setState({text0 :e.target.value})}}
                        ></FormControl>
                    </FormGroup>
                    {'  '}
                    <FormGroup>
                        <ControlLabel>Bottom</ControlLabel>
                        {' '}
                        <FormControl 
                            type="text"
                            onChange={(e)=>{ this.setState({text1 : e.target.value})}}
                        ></FormControl>
                    </FormGroup>
                </Form>
                {
                    this.props.memes.slice( 0 , this.state.memeLimit ).map(( meme , index )=>{
                        return (
                            <MemeItem key={ index } meme={ meme } text0={ this.state.text0 } text1={ this.state.text1 }/>
                        )
                    })
                }
                <div className="load-more" onClick={()=>{
                    this.setState({memeLimit:this.state.memeLimit+10})
                }}>Show more...</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;

}
export default connect(mapStateToProps,null)(App);