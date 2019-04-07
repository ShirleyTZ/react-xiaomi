import React, { Component } from 'react';
import Itemlist from './Itemlist';
import SearchButton from './SearchBotton';
import ItemWithDropDown from './ItemWithDropDown';

class Logomenu extends Component {

    render(){
        const menu = ["","小米手机","红米","平板·笔记本","电视","盒子·影音","路由器","智能硬件","服务","社区"]
        const aboutmenu = ["","我是小米手机","我是红米","我是平板·笔记本","我是电视","我是盒子·影音","我是路由器","我是智能硬件","我是服务","我是社区"]
        return (
            <div id="logomenu">
                <img id="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516176112968&di=b220126af4c6ea1d961d62cfc227d192&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F16%2F12%2F30bOOOPICce.jpg"></img>
                <ItemWithDropDown id="nav-menu" listName="logomenuUl" menu={menu} dropBoxName="dropdownbox" dropClassName="nav-dropdown" dropMenu={aboutmenu} />
                <SearchButton id="boxbutton" />
            </div>
        )
    }
}

export default Logomenu;