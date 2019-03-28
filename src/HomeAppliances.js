import React, { Component } from 'react';
import Itemlist from './Itemlist';

class HomeAppliances extends Component {
    render(){
        const menu = ["热门","电视影音","电脑","家居"]
        const product =[1,2,3,4,5,6,7,8]
        return(
            <div id="homeAppliances">
                <div>
                    <h1>家电</h1>
                    <Itemlist id="appliancesMenu" names={menu} />
                    <div className="clearfloat"></div>
                </div>
                <div id="left_product"></div>
                <Itemlist names={product} className="product" />
            </div>
        )
    }
}

export default HomeAppliances;