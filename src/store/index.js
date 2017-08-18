import {createStore} from 'redux'

let redures=function(state,action){
	console.log(action)
	if(state==null){
		state={
			username:'zhangsan',
			password:'123123'
		}
	}
	if(action.type=='changedata'){
		state.username=action.val
	}
	
	return state
}

export default createStore(redures)
