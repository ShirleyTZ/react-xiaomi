import React, { Component } from 'react';
import Itemlist from './Itemlist';
import List from './List';

class ItemWithDropDown extends Component {
    constructor(props){
        super(props)
        this.state ={
            showDropBoxNumber: -1,
            buttonBeHover: false,
            beHover: false
        }
    }
    showDropBox = (index) =>{
        if(index!==-1){
            this.setState({
                showDropBoxNumber: index,
                buttonBeHover: true
            })
        }else{
            this.setState({
                buttonBeHover:false
            })
        }
       
        console.log(index);
    }
    handleOnMouseEnter(){
        this.setState({
            beHover:true
        })
    }
    handleOnMouseLeave() {
        this.setState({
            beHover:false
        })
    }
    render(){
        return(
            <div id={this.props.id} onMouseEnter={this.handleOnMouseEnter.bind(this)} onMouseLeave={this.handleOnMouseLeave.bind(this)} >
                <Itemlist id={this.props.listName} names={this.props.menu} showDropBox={this.showDropBox} />
                {this.state.beHover? <List id={this.props.dropBoxName} className={this.props.dropClassName} names={this.props.dropMenu} showDropBoxNumber={this.state.showDropBoxNumber} beHover={this.state.beHover} />:""}
                
            </div>           
        )
    }
}

export default ItemWithDropDown;