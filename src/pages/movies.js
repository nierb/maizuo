import React,{Component} from 'react'
import store from '../store'

let unsubscribe;
export default class Movies extends Component{
	constructor(){
		super();
		this.state=store.getState()
	}
	render(){
		return (
			<div>
				<div class='page' id='movies'>
				{this.state.username}
					影片
				</div>
			</div>			
		)		
	}
	
	componentWillMount(){
	 unsubscribe=store.subscribe(()=>{
			this.setState({username:store.getState().username})
		})
	}
	componentWillUnmount(){
		unsubscribe()
	}
	
}
