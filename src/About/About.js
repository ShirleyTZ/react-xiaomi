import React, { Component } from 'react';
import NavSwitch from './NavSwitch';
import "./About.css"
import ProductMain from './ProductMain';

class About extends Component{
    handleOnclick(){
        const logInWarn = document.getElementById("logInWarn");
        logInWarn.style.display = "none";
    }

    handlescroll() {
        const scollHeight = window.scrollY;
        const about = document.getElementById("about");
        const heightForShow = about.offsetHeight + about.offsetTop;
        if(scollHeight > heightForShow){
            about.style.position = "fixed";
            about.style.top = "0px";
            about.style.zIndex = 1;
        }else{
            about.style.position = "static";
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll',this.handlescroll);     
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handlescroll);
    }

    render(){
        const theme = "小米笔记本Air 12.5英寸";
        const product ="小米笔记本Air 13.3";
        const imgbox =  ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2485553476,3013851159&fm=26&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4133744841,1546252905&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1899414078,3129124383&fm=26&gp=0.jpg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1774098173,4024877606&fm=26&gp=0.jpg"
        ]
        const aboutProduct="轻薄全金属机身 / 超长续航，支持1C快充 / FHD 全贴合屏幕 / 高能量密度电池"
        return(
            <div>
                <div id="about">
                    <NavSwitch id="navSwitch" theme={theme} product={product} leftButton="leftButton" spanClass="cutOffRule" aboutProductId="aboutProduct"/>
                </div>
                <div id="logInWarn">
                    为了方便您的购买，请提前登录
                    <a>立即登录<span onClick={this.handleOnclick.bind(this)}>X</span></a> 
                </div>
                <ProductMain 
                    theme={theme} 
                    id="showProduct" 
                    imgBox={imgbox} 
                    imgId="productsImgBox" 
                    imgClassName="productsImg" 
                    aboutProductId="aboutproduct" 
                    aboutProduct={aboutProduct} 
                    priceId="price" price="3999" priceBefore="4299"
                    placeId="place" imgSrc="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2485553476,3013851159&fm=26&gp=0.jpg" place="武汉市江岸区" />
                <div id="red"></div>
            </div>
        )
    }
}

export default About;