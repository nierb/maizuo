import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import menu from  '../services/silderdatainfo.js'
export default class Silderbar extends Component{
	
	render(){
         let styleObj={
         	transform:this.props.showbar? 'none' :'translateX(-100%)'
         }
         let stylecover={
			  background:this.props.showbar? 'rgba(0,0,0,0.5)':'rgba(0,0,0,0)',
			  display:this.props.showbar? 'block':'none'
		 }
		let data=this.props.headerdata.pathname ==='/shop'?  menu.shopsilderbardata :menu.homesilderbardata 
		return (
			<div>
			<div class='cover' style={stylecover} onClick={this.hideslider.bind(this)}></div>
				<div id='Slider' style={styleObj}>
					{data.map((item,index)=>{
						return (
						<a onClick={this.goback.bind(this,item)}key={index}  >{item.title}<i class='iconfont icon-youbiao'></i></a>	
						)
					})}					
				</div>		
			</div>
		)		
	}
	goback(item){		
		this.props.history.push(item.path)
		this.props.hideHandle(item.header)
	}
	hideslider(){
		this.props.hideHandle()
	}
	
}
