import React, { Component } from 'react';
import Article1 from './Article1';
import Picture from './Picture';
import Starproduct from './Starproduct';
import HomeAppliances from './HomeAppliances';

class Home extends Component {
    render(){
        return(
            <div>
                <Article1 />
                <Picture />
                <Starproduct />
                <HomeAppliances />
                <div id="test"></div>
            </div>
        )
    }
}

export default Home;