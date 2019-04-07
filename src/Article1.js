import React, { Component } from 'react';
import Slideshow from './Slideshow';
import Itemlist from './Itemlist';
import ItemWithDropDown from './ItemWithDropDown';

class Article1 extends Component {
    render(){
        const numberButton= ["1","2","3","4","5"];
        const test= [1,2,3,4,5,6,7,8,9,10];
        const menu = ["手机 电话卡","笔记本 平板","电视 盒子","路由器 智能硬件","移动电源 电池 插线板","耳机 音箱","保护套 贴膜","线材 支架 存储卡","箱包 服饰 鞋 眼镜","米兔 生活周边"]
        const imgbox = ["https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1507984971038&amp;di=fc54479776f4cc2a780ebf44f51fb7e5&amp;imgtype=0&amp;src=http%3A%2F%2Fpic1.16pic.com%2F00%2F04%2F84%2F16pic_484482_b.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984971037&di=960e1170eb695c5d8c9152759a2e19b7&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F13%2F46%2F96w58PICQY4_1024.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984971036&di=5457aff64b893cd922e3c4ff6f0bdb2e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc55331232c9759ee5e5d6888da922963%2F3c6d55fbb2fb4316a08b2f542aa4462309f7d30c.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984971035&di=3fb18f219ce5ac0ae32963d2a89f6473&imgtype=0&src=http%3A%2F%2Fpic9.photophoto.cn%2F20081013%2F0034034469050270_b.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507986048247&di=797d0b7f5bdbbb715c694283c9b18795&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131216%2F10840148_115930701174_2.jpg"
    ]
        return(
            <div id="article1">
                <Slideshow imgId="spellImgBox" imgClassName="spellImg" buttonId="rightbottombutton" numberButton={numberButton} imgBox={imgbox}/>
                <ItemWithDropDown id="article1left" listName="article1leftul" menu={menu} dropBoxName="articleleftBox" dropClassName="products" dropMenu={test} />             
                <span id="spanL">{["","<"]}</span>
                <span id="spanR">{["",">"]}</span>
            </div>
            
        )
    }
}

export default Article1;