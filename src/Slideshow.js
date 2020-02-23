import React, { Component } from 'react';
import ItemList from './Itemlist';
import ImgItem from './ImgItem';

class Slideshow extends Component {
    constructor(){
        super()
        this.state = {
            showNumber: 0,
            beChecked: true
        }
    }

    componentDidMount(){
        if(document.getElementById("div") !== null) {
        this.timerId = setInterval(
            () => this.timer(),
            2000
        )
    }
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    timer() {
        if(this.state.beChecked) {
            if(this.state.showNumber === 4){
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
        var aBtn=document.getElementById(this.props.buttonId);
        var oImgs=document.getElementById(this.props.imgId);
        var btns=aBtn.getElementsByTagName('li');
        var imgs=oImgs.getElementsByTagName('img');
        btns[0].style.backgroud ='white';
         var len =  btns.length;
         for(var i = 0; i < len; i++){
             if(i === num){
                 btns[i].style.backgroundColor = "white";
                 imgs[i].style.display ="block"
             }else{
                btns[i].style.backgroundColor = "grey";
                imgs[i].style.display ="none"
             }
         }
    }
    handleOnMouseOver(){
        this.setState({
            beChecked:false
        })
        clearInterval(this.timerID);
    }
    handleOnMouseLeave(){
        this.setState({
            beChecked:true
        })
    }
    showDropBox(number){
        console.log(number)
        if(number >= 0){
            this.setState({
                beChecked:false,
            })
            this.changeImg(number);
        }
        
    }


    render(){
        return(
            <div id="slideshow" onMouseOver={this.handleOnMouseOver.bind(this)} onMouseLeave={this.handleOnMouseLeave.bind(this)} >
                <ImgItem id={this.props.imgId} className={this.props.imgClassName} names={this.props.imgBox} showDropBox={this.showDropBox} />
                <ItemList id={this.props.buttonId} names={this.props.numberButton}  canbehover="true" showDropBox={this.showDropBox.bind(this)} />
            </div>
        )
    }
}

export default Slideshow;