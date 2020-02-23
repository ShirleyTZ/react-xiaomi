import React, { Component } from 'react';

class NavSwitch extends Component {
    render(){
        return(
            <div id={this.props.id}>
                <h2>{this.props.theme}</h2>
                <div id={this.props.leftButton}>
                    <span className={this.props.spanClass}>|</span>
                    <a>{this.props.product}</a>
                </div>
                <div id={this.props.aboutProductId}>
                    <a>概述</a>
                    <span className={this.props.spanClass}>|</span>
                    <a>参数</a>
                    <span className={this.props.spanClass}>|</span>
                    <a>用户评价</a>
                </div>
            </div>
        )
    }
}

export default NavSwitch;