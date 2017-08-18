import React,{Component} from 'react'
import store from '../store' 

let unsubscribe;	
export default class Cinema extends Component{
	constructor(){
		super();
		this.state=store.getState()
	}
	render(){
		return (
			<div>
				<div class='page' id='cinema'>
					{store.getState().username}
					<button onClick={this.changdata.bind(this)}>修改全局数据</button>
					影院
				</div>
			</div>			
		)		
	}
	changdata(){
		store.dispatch({
			type:'changedata',
			val:'123123'
		})
	
	}
	
	componentWillMount(){
	unsubscribe=store.subscribe(()=>{
			this.setState({username:store.getState.username})
		})
	}
	
	componentWillUnmount(){
		unsubscribe()
	}
}
