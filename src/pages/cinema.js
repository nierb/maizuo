import React,{Component} from 'react'
import store from '../store' 

import homeBanner from '../services/homeserver.js'
import '../css/cinema.css'	
export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cinemaData:[],
			arr:[],
			isshow:true
		}
		
	}
	render(){
			

		return (
			<div>
				<div class='page' id='cinema'>
					{this.state.cinemaData.map((item,index)=>{						
						if(this.state.arr.indexOf(item.district.name)==-1){
							 this.state.arr.push(item.district.name)
							 return (
							<div class='list-cinema' key={index}>
								<div class='area' key={index} onClick={this.tapbtn.bind(this,index)} ref={index+'2'}>{item.district.name}</div> 
								<div ref={index+'3'} >
								{this.state.cinemaData.map((i,index1)=>{
									if(item.district.name==i.district.name){
										return (
											<div class='cinemaName' key={index1}>
												<div class='width'>
													<div class='name'><em>{i.name}</em><span>座</span><span>通</span></div>
													
													{i.labels.map((j,index2)=>{
														return <span key={index2} class='eat-active '><i class={j.type==''? 'hide':j.type}>{j.name=='观影小食'?'可乐爆米花':j.name }</i></span>

													})}
													<p>{i.address}</p>
													<p>距离未知</p>
												</div>
											</div>	
										)
									
									}		
								})}
								</div>
							</div>									
							 ) 	 
						}
					})}
				</div>
			</div>			
		)		
	}
	
	tapbtn(index){
		// this.setState({ishow:!this.state.ishow})
	// console.log(this.refs[index+'2'])
	// console.log(this.refs[index+'3'])	
		// this.setState({isshow:!this.state.isshow})
		
		

		this.refs[index+'3'].style.display='none'
		

			
	
		// this.setState({isshow:!this.state.isshow})
	}
	
	componentWillMount(){
		homeBanner.cinemaData()
		.then((data)=>{
			this.setState({cinemaData:data})
			console.log(data)
		})
	}




	componentDidMount(){
		
	}
	
}