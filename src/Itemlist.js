import React, { Component } from 'react';

class Itemlist extends Component {
    handleMouseOver(e) {
        if(this.props.showDropBox){
            const array = this.props.names;
            for(var i=0;i<array.length;i++){
                if(array[i] === e.target.textContent){
                    console.log(i);
                    this.props.showDropBox(i)
                }
            }
        }   
    }

    handleMouseLeave(e) {
        if(this.props.showDropBox){
            this.props.showDropBox(-1)
        }
    }

    
  render() {
    const names = this.props.names;
    const showDropBoxNumber = this.props.showDropBoxNumber;
      return (
        <div id={this.props.id} >
            {names.map((name,i) => 
                <li 
                  key={i} 
                  className={this.props.className}
                  onMouseOver={this.handleMouseOver.bind(this)} 
                  onMouseLeave={this.handleMouseLeave.bind(this)} 
                >
                    {name}
                </li>
                )}
        </div>
      )
  }
}

export default Itemlist;