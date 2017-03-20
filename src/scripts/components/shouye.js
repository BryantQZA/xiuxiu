'use strict';

import React from 'react'
import Scroller from '../../component_dev/scroller/src/index.js'
import Carousel from '../../component_dev/carousel/src/index.js'
import Lbt from './lbt.js'
class Shouye extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [<div/>],
            lbt:[<div/>]
        }
    }

    setNodes(url,callback) {
        fetch(url)
            .then(response => response.json())
            .then(res => {
                let datas = res.map((val, key) => {
                    return ( 
                        <div className = "list" >
                        <i> 
				            <img src = { val.goodsListImg }/>
                        </i>
                        <b>
                            <span> { val.goodsName } </span>  
                            <span> { val.className } </span>  
                            <span> ￥{ val.price } </span>  
                        </b> 
                        </div>
                    )
                })
                callback(datas)
            })
            .catch(e => console.log("Oops, error", e))
    }

    // setlbtNodes(callback){
    //     // console.log(0)
    //     // $.getJSON("http://datainfo.duapp.com/shopdata/getBanner.php?callback=?", function(data) {
    //     //         console.log(data)
                
    //     //         let lbts = data.map((val, key) => {
    //     //             return ( 
    //     //                 <li className = "item"> <img className = "img" src = {JSON.parse(val.goodsBenUrl)[0]} /></li>   
    //     //             )
    //     //         })
    //     //         callback(lbts)
    //     // });
        
    //     fetch('/api/lbts.php')
    //     .then(response => response.json())
    //     .then(res => {
    //         let lbts = res.map((val, key) => {
    //             return ( 
    //                 <li className = "item"> <img className = "img" src = {JSON.parse(val.goodsBenUrl)[0]} /></li>   
    //             )
    //         })
    //         callback(lbts)
    //     })
    //     .catch(e => console.log("Oops, error", e))
    // }

    render() {
        return ( <
            div className = "m_shouye" >           
            <header > 秀秀网 </header>
           
            <Scroller style = "height:100%;"
                ref="scroller"
                usePullRefresh={true}
                useLoadMore={true}
                onRefresh={()=>{
                    console.log(9)
                    this.setNodes.call(this, '/api/dataones.php',(datas) => {
                        
                        this.setState({
                            
                            data: datas.concat(this.state.data)
                        })
                         this.refs.scroller.stopRefreshing(true)
                    })
                }}
                onLoad={()=>{
                        console.log(9)
                    this.setNodes.call(this, '/api/dataones.php',(datas) => {
                        
                        this.setState({
                            
                            data: this.state.data.concat(datas)
                        })
                         this.refs.scroller.stopLoading(true)
                    })
                }}
            > 
               
                <Lbt ss={'/api/lbts.php'}></Lbt>
                { this.state.data } 
            </Scroller>
            </div>
        )
    }

    componentDidMount() {
        this.setNodes.call(this, '/api/datas.php',(datas) => {
            this.setState({
                data: datas
            })
        })
        
    }
}
export default Shouye