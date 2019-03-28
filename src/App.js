import React, { Component } from 'react';
import './App.css';
import Itemlist from './Itemlist';


class App extends Component {

  render() {
    const leftItem = ['小米商城','MIUI','米聊','游戏','多看阅读','云服务','金融','米币','小米商城手机版','问题反馈','Select Regin']
    const rightItem = ['登录','注册','消息通知','购物车']
    return (
    <div id = "Top">
      <div id="top">
        <Itemlist id="topleft" names={leftItem} />
        <Itemlist id="topright" names={rightItem} />
      </div>  
    </div>
    )
    }
}

export default App;