import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import store from '../store'
var unsubscribe;
export default class Appheader extends Component{
	
	constructor(){
		super();
		this.state={
			cityname:store.getState().username
		}	
	}
	render(){
		return (
			<div id='header'>
			    <li class='nav-right'>
					<a class='iconfont icon-liebiao'  onClick={this.btnleft.bind(this)}></a>			
					<p class='movies'>{this.props.headerdata}</p>
				</li>
				<li class='nav-left'>
				
				<Link to='/city' class='iconfont icon-xiabiao'>{this.state.cityname}</Link>				
				<Link to='/me' class='iconfont icon-ren'></Link>		
				</li>				
			</div>			
		)		
	}
	btnleft(){
		this.props.menuHandle()
	}

	componentWillMount(){
		//2.监听store中state的变化，如果这个函数调用了，说明state发生了变化
		//调用this.setState(),就会触发render，更新dom
		unsubscribe = store.subscribe(()=>{
			//console.log('two监听触发了');
			this.setState({cityname: store.getState().username});
		})
	}
	componentWillUnmount(){
		unsubscribe();
	}
}
