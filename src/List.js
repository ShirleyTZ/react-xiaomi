import React, { Component } from 'react';

class List extends Component {  
  render() {
    const names = this.props.names;
    const showDropBoxNumber = this.props.showDropBoxNumber;
      return (
        <div id={this.props.id}>
            {this.props.beHover? (<li>{names[showDropBoxNumber]}</li>): ""}  
        </div>
      )
  }
}

export default List;