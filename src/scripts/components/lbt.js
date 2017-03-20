

'use strict';
import React from 'react'
import Carousel from '../../component_dev/carousel/src/index.js'
class Lbt extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lbt:[<div/>]
        }
    }
     setlbtNodes(url,callback){
         fetch(url)
        .then(response => response.json())
        .then(res => {
            let lbts = res.map((val, key) => {
                return ( 
                    <li className = "item"> <img className = "img" src = {JSON.parse(val.goodsBenUrl)[0]} /></li>   
                )
            })
            callback(lbts)
        })
        .catch(e => console.log("Oops, error", e))
     }
     

    render(){
        return(
             <Carousel style = "height:100%;">
                    {this.state.lbt}
            </Carousel>
        )
    }
     componentDidMount() {
        this.setlbtNodes.call(this,this.props.ss,(lbts)=>{
            //console.log(this.props.ss)
            
            this.setState({
                lbt: lbts
            })
        })
    }
}
export default Lbt