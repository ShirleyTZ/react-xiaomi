import React, { Component } from 'react';

class SearchButton extends Component {
    render(){
        return (
        <div id={this.props.id}>
            <input type="text" className="box" />
            <input type="button" className="button" />
        </div>
        )
    }
}

export default SearchButton;