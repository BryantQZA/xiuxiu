'use strict';
import React from 'react'
import {Link} from 'react-router'


import ButtonActions from '../flux/actions/TabBarActions';
import TabBarStore from '../flux/stores/TabBarStore';
var tabBars=[
    {
        title:"首页",
        icon:"&#xe696;",
        
        type: 'shouye'
    },
    {
        title:"分类",
        icon:"&#xe699;",
        
        type: 'fenlei'
    },
    {
        title:"购物车",
        icon:"&#xe698;",
        
        type: 'shopcar'
    },
    {
        title:"个人中心",
        icon:"&#xe6b8;",
        
        type: 'myxiu'
    }
]
class Index extends React.Component{
    constructor(props){
        super(props)
  }
   initTabBars(){
     let type = TabBarStore.getItem()
       return tabBars.map((val,index)=>{
            return (
            <li className={type==val.type ? 'active' : ''}>
                <Link to={val.type}>
                    <i className="yo-ico" dangerouslySetInnerHTML={{__html: val.icon}}></i>
                    <b>{val.title}</b>
                </Link>
            </li>
        )
       })
   }

    render(){
        return(
            <div className="my_index">
                <section>
                    {this.props.children}
                </section>
                <nav>
                    <ul>
                        {this.initTabBars.call(this)}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Index