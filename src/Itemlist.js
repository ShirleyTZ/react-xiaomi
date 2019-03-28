import React, { Component } from 'react';

class Itemlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            showit: false,
            showI: Number
        }
    }

    handleMouseOver(e) {
        if(this.props.showDropBox){
            const array = this.props.names;
            for(var i=0;i<array.length;i++){
                if(array[i] === e.target.textContent){
                    this.props.showDropBox(i)
                    this.setState({
                        showI: i
                    })
                }
            }
        }
    }

    handleMouseLeave(e) {
        if(this.props.showDropBox){
            this.props.showDropBox(-1)
        }
    }

    handleDivMouseOver(e){
        if(this.props.showDropBoxNumber){
            this.setState({
                showit:true
            })
            this.props.showDropBox(this.state.showI)
        }
    }
    handleDivMouseLeave(e){
        if(this.props.showDropBoxNumber){
            this.setState({
                showit:false
            })
            this.props.showDropBox(-1)
        }
    }

    
  render() {
    const names = this.props.names;
    const showDropBoxNumber = this.props.showDropBoxNumber;
      return (
      <div id={this.props.id} className={this.props.showDropBoxNumber ? (this.props.showDropBoxNumber !== -1 ? "showdrop":(this.state.showit ? "showdrop":"hinddrop")):""} onMouseOver={this.handleDivMouseOver.bind(this)} onMouseLeave={this.handleDivMouseLeave.bind(this)} >{names.map((name,i) => <li className={showDropBoxNumber && i === showDropBoxNumber ? "showdrop":this.props.className} key={i} onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} >{name}</li>)}</div>
      )
  }
}

export default Itemlist;