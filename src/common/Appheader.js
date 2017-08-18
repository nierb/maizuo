import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Appheader extends Component{
	
	render(){
		return (
			<div id='header'>
			    <li class='nav-right'>
					<a class='iconfont icon-liebiao'  onClick={this.btnleft.bind(this)}></a>			
					<p class='movies'>{this.props.headerdata}</p>
				</li>
				<li class='nav-left'>
				
				<Link to='/city' class='iconfont icon-xiabiao'>深圳</Link>				
				<Link to='/me' class='iconfont icon-ren'></Link>		
				</li>
				
			</div>			
		)		
	}
	btnleft(){
		this.props.menuHandle()
	}
}
