import React,{Component} from 'react'
import store from '../store' 

import homeBanner from '../services/homeserver.js'
	
export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cinemaData:[]
		}
		
	}
	render(){
		return (
			<div>
				<div class='page' id='cinema'>
					
					影院
				</div>
			</div>			
		)		
	}
	
	
	componentWillMount(){
		homeBanner.cinemaData()
		.then((data)=>{
			this.setState({cinemaData:data})
			//console.log(data)
		})
	}
	
}