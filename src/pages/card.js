import React,{Component} from 'react'
import '../css/card.css'
export default class Card extends Component{
	constructor(){
		super();
		this.state={
			ishow: false,
			ishide: true,
			classname: 'active',
			classname1: ''
		}
	}
	render(){
		let styleObj = {
			display: this.state.ishow ? 'none' : 'block'

		}
		let styleObj1 = {
			display: this.state.ishide ? 'none' : 'block'
		}
		return (
			<div>
				<div class='page' id='card'>			
					 <ul class='movies-taps'>
							<li class={this.state.classname} onClick={this.nowSplay.bind(this)}>卖座卡</li>
							<li class={this.state.classname1} onClick={this.playSoon.bind(this)}>电子卖座卡</li>
					</ul>
					<div class='nowplay' style={styleObj}>
						<div class='from' >
						<div class='from-group'>
							<span>卡号：</span><input type="text" placeholder='请输入卡号' />
							<div class='input-bg'></div>
						</div>
						<div class='from-group'>
							<span>密码：</span><input type="text" placeholder='请输入密码' />
							<div class='input-bg'></div>
						</div>
						<button>查询</button>

					</div>
					</div>
					<div class='playSoon' style={styleObj1}>
						<div class='from' >
						<div class='from-group'>
							<span>卡号：</span><input type="text" placeholder='请输入15位电子卖座卡号' />
							<div class='input-bg'></div>
						</div>
						<button>查询</button>
					</div>
					</div>
				</div>
			</div>			
		)		
	}
	nowSplay() {
		this.setState({ ishow: false })
		this.setState({ ishide: true })
		this.setState({ classname: 'active' })
		this.setState({ classname1: '' })

	}
	playSoon() {
		this.setState({ ishide: false })
		this.setState({ ishow: true })
		this.setState({ classname: '' })
		this.setState({ classname1: 'active' })



	}

}
