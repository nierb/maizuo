import React,{Component} from 'react'
import store from '../store' 

let unsubscribe;	
export default class Home extends Component{
	constructor(){
		super();
		this.state={
			username:store.getState().username
		}
	}
	render(){
		return (
			<div>
				<div class='page' id='home'>
				<button onClick={this.btnAction.bind(this)}>按钮</button>
				
				{this.state.username}
					首页
				</div>
			</div>			
		)		
	}
	
	btnAction(){
		//修改全局用户名
		//3.派发消息，让store中的reducer进行操作
		store.dispatch({
			//事件名字
			type:'changedata',
			//参数
			val:'李四'
		})
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
