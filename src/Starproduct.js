import React, { Component } from 'react';
import Itemlist from './Itemlist';

class Starproduct extends Component{
    render(){
        const staritem = [1,2,3,4,5];
        return(
            <div id="starproduct">
                <h1>小米明星单品</h1>
                <Itemlist id="starBox" names={staritem} className="staritem" />
            </div>
        )
    }
}

export default Starproduct;