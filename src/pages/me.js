import React,{Component} from 'react'
import '../css/me.css'
export default class Me extends Component{
	
	render(){
		return (
			<div>
				<div class='page' id='me'>
					<div class='from' >
						<div class='from-group'>
							<input type="text" placeholder='输入手机号/邮箱' />
							<div class='input-bg'></div>
						</div>
						<div class='from-group'>
							<input type="text" placeholder='输入密码/验证码' />
							<div class='input-bg'></div>
						</div>
						<button>登录</button>

					</div>
					
				</div>
			</div>		 	
		)		
	}	
}
