import React, { Component } from 'react'
import store from '../store'
import '../css/movies.css'
import homeBanner from '../services/homeserver.js'
import {Link} from 'react-router-dom'

let myScroll=null;
var n=1;
var m=1;
export default class Movies extends Component {
	constructor() {
		super();
		this.state = {
			ishow: false,
			ishide: true,
			classname: 'active',
			classname1: '',
			playdata: [],
			comingdata:[]
		}
	}
	render() {
		let styleObj = {
			display: this.state.ishow ? 'none' : 'block'

		} 
		let styleObj1 = {
			display: this.state.ishide ? 'none' : 'block'
		}
		return (
			<div>	
					
				<div class='page' id='movies'>
					
					<div class='contain'>
						{/* <div class='head'>下拉刷新</div>	 */}
						<ul class='movies-taps'>
							<li class={this.state.classname} onClick={this.nowSplay.bind(this)}>正在热映</li>
							<li class={this.state.classname1} onClick={this.playSoon.bind(this)}>即将上映</li>
						</ul>
						<div class='nowplay' style={styleObj}>
							{this.state.playdata.map((item, index) => {
								return (								
									<Link to={{
										pathname:'/details/'+item.id,	
										state:{
											id:item.id
										}
									}} key={index} >
										<img src={item.poster.origin} />
										<div class='nowplay-left'>
											<h1>{item.name}  <span>{item.grade}<i class='iconfont icon-youbiao '></i></span></h1>
											<p>{item.intro}</p>
											<p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
										</div>
									</Link>
								
								)
							})}
							
					</div>
						<div class='playSoon' style={styleObj1}>						
								{this.state.comingdata.map((item,index)=>{
								return (
									<Link to={{
										pathname:'/details/'+item.id,	
										state:{
											id:item.id
										}
									}} key={index} >
										<img src={item.poster.origin} />
										<div class='playSoon-right'>
										  <h1>{item.name} <i class='iconfont icon-youbiao '></i></h1>
										  <p>{item.intro}</p>
										  <h2>8月25日上映  星期五</h2>
										</div>
									
									</Link>
								)	
								})}
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


	componentWillMount() {
		homeBanner.getNowPlayingData1(n)
			.then((data) => {
			
			this.setState({ playdata: data })
			myScroll.refresh()	
			})

		homeBanner.comingSoon1(m)
		.then((data)=>{
			this.setState({comingdata:data})
			myScroll.refresh()
		})
	}

	
	componentDidMount(){
		myScroll=new IScroll('#movies',{
		//	bounce:false,
		//	bounce: true,			
			 probeType: 3, 
			 scrollbars: true,
         	 mouseWheel: true
         	
		})
	
			
		
		myScroll.on('scroll',()=>{
			console.log(myScroll)
				myScroll.refresh()
								
			if(myScroll.y==myScroll.maxScrollY ){
				n++;
				homeBanner.getNowPlayingData1(n)
				.then((data) => {					
					this.setState({ playdata: this.state.playdata.concat(data)})	
										
				})
			}
			else if(n>8){
				console.log('没数据了')
			}

			if(myScroll.y==myScroll.maxScrollY && m<=15){
				m++;
				homeBanner.comingSoon1(m)				
				.then((data)=>{				
					this.setState({comingdata:this.state.comingdata.concat(data)})
					
				})
			}
		
		})

		


	

	}

	
}
