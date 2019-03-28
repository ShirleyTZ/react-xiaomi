import React, { Component } from 'react';
import Itemlist from './Itemlist';

class ItemWithDropDown extends Component {
    constructor(props){
        super(props)
        this.state ={
            showDropBoxNumber: -1,
        }
    }
    showDropBox = (number) =>{
        this.setState({showDropBoxNumber: number})
        console.log(this.state.showDropBoxNumber)
    }
    render(){
        return(
            <div id={this.props.id}>
                <Itemlist id={this.props.listName} names={this.props.menu} showDropBox={this.showDropBox}/>
                <Itemlist id={this.props.dropBoxName} className={this.props.dropClassName} names={this.props.dropMenu} showDropBoxNumber={this.state.showDropBoxNumber} showDropBox={this.showDropBox} />
            </div>           
        )
    }
}

export default ItemWithDropDown;