import React, { Component } from 'react';
import Itemlist from './Itemlist';

class Picture extends Component {
    render(){
        const sub_pItem = ["选购手机","企业团购","F码通道","米粉卡","以旧换新","话费充值"]
        const picture = ["picture1","pictrue2","picture3"]
        return(
            <div id="Picture">
                <Itemlist id="pleft" names={sub_pItem} className="sub_p" />
                <Itemlist id="threePicture" names={picture} className="picture" />
            </div>
        )
    }
}

export default Picture;