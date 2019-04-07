import React, { Component } from 'react';

class ImgItem extends Component { 

    render(){
        const names = this.props.names;
        return (
            <div id={this.props.id}>
              {names.map((name,i) => <img className={this.props.className} src={name} key= {i}/>)}
            </div>
        )
    }
}

export default ImgItem;