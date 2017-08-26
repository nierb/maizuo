import {createStore} from 'redux'

let redures=function(state,action){
	console.log(action)
	if(state==null){
		state={
			username:'深圳',
			password:'123123'
		}
	}
	if(action.type === 'changename'){
		state.username=action.val
	}
	
	return state
}

export default createStore(redures)
