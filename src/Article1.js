import React, { Component } from 'react';
import Itemlist from './Itemlist';
import ItemWithDropDown from './ItemWithDropDown';

class Article1 extends Component {
    render(){
        const numberButton= [1,2,3,4,5];
        const test= [1,2,3,4,5,6,7,8,9,10];
        const menu = ["手机 电话卡","笔记本 平板","电视 盒子","路由器 智能硬件","移动电源 电池 插线板","耳机 音箱","保护套 贴膜","线材 支架 存储卡","箱包 服饰 鞋 眼镜","米兔 生活周边"]
        return(
            <div id="article1">
                <div id = "spellImgBox"></div>
                <ItemWithDropDown id="article1left" listName="article1leftul" menu={menu} dropBoxName="articleleftBox" dropClassName="products" dropMenu={test} />
                <Itemlist id="rightbottombutton" names={numberButton} />
                <span id="spanL">{["","<"]}</span>
                <span id="spanR">{["",">"]}</span>
            </div>
            
        )
    }
}

export default Article1;