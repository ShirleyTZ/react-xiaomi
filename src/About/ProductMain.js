import React, { Component } from 'react';
import ImgItem from '../ImgItem';

class ProductMain extends Component {
    constructor(){
        super()
        this.state = {
            showNumber: 0,
            beChecked: true
        }
    }
    componentDidMount(){
        if(document.getElementById(this.props.imgId) !== null) {
        this.timerId = setInterval(
            () => this.timer(),
            1500
        )
    }
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    timer() {
        if(this.state.beChecked) {
            if(this.state.showNumber === this.props.imgBox.length){
                this.setState({
                    showNumber:0
                })
            }else{
                this.setState({
                    showNumber: this.state.showNumber + 1
                })
            }
            this.changeImg(this.state.showNumber)
        }else{
            return false
        }
          
    }
    changeImg(num) {
        var oImgs = document.getElementById(this.props.imgId);
        var imgs = oImgs.getElementsByTagName('img');
         var len =  imgs.length;
         for(var i = 0; i < len; i++){
             if(i === num){
                imgs[i].style.display ="block"
             }else{
                imgs[i].style.display ="none"
             }
         }
          
    }
    render() {
 
        return(
            <div id={this.props.id}>
                <ImgItem names={this.props.imgBox} id={this.props.imgId} className={this.props.imgClassName} />
                <div id={this.props.aboutProductId}>
                    <h2>{this.props.theme}</h2>
                    <div>{this.props.aboutProduct}</div>
                    
                    <div id={this.props.priceId}>
                        <p>小米自营</p>
                        <div>{this.props.price}  <span>{this.props.priceBefore}</span></div>
                    </div>

                    <div id={this.props.placeId} >
                        <img src={this.props.imgSrc} />
                        <div>
                            <p>{this.props.place}</p>
                            <p>暂时缺货</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductMain;