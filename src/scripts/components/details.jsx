'use strict';

import React from 'react'
import Scroller from '../../component_dev/scroller/src/'
import { Link } from 'react-router'
import Carousel from '../../component_dev/carousel/src/index.js'
class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            node: [<div />],
            title:''
        }
    }
 /*getNodes(url, id, callback) {
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
        this.setState({
          title: res.goodsName
        })
        callback (
          <Scroller>
            <div>
             <i><img src={JSON.parse(res.goodsBenUrl)[1]} /></i>
              <b>
                    <span>{res.goodsName}</span>
                    <span>{res.buynumber}人购买</span>
                    <span>￥{res.price}</span>
                    <span>{res.detail}）</span>
              </b>
            </div>
          </Scroller>
        )
      })
      .catch((e)=>{
        console.log(e);
      })
  }*/
    getNodes(url,id,callback) {
        console.log(0)
        $.getJSON(url, {goodsID:1},function(data) {
                
                console.log(data[0].goodsName)
                
                callback (
                    data.map((res, key) => {
                        
                     return ( 
                         <Scroller style = "height:100%;">
                        <div>
                            <i><img src={JSON.parse(res.goodsBenUrl)[1]} /></i>
                             {/*<Carousel>
                                <li className="item"><img className="img" src={JSON.parse(res.goodsBenUrl)[0]} /></li>  
                                <li className="item"><img className="img" src={JSON.parse(res.goodsBenUrl)[1]} /></li>  
                               <li className="item"><img className="img" src={JSON.parse(res.goodsBenUrl)[2]} /></li>  
                                 <li className="item"><img className="img" src={JSON.parse(res.goodsBenUrl)[3]} /></li>  
                             </Carousel>*/}
                            <b>
                                <span>{res.goodsName}</span>
                                <span>{res.buynumber}人购买</span>
                                <span>￥{res.price}</span>
                                <span>{res.detail}）</span>
                            </b>
                        </div>
                         </Scroller>
                    )
                 })
                )
                
        }
        )
}
    render() {
        return (
            <div className="m-details">
                <header className="yo-header yo-header-a">
                    <h2 className="title">{this.state.title}</h2>
                    <a href="#/features" className="regret yo-ico">&#xf07d;</a>
                </header>
                <section>
                    {this.state.node}
                </section>
            </div>
        )
    }
    componentDidMount() {
    this.getNodes.call(this, "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", 2, (data)=>{
      this.setState({
        node: data
      })
    })
  }
}
export default Details