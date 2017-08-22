import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home.js'
import Movies from './pages/movies.js'
import Cinema from './pages/cinema.js'
import Me from './pages/me.js'
import Shop from './pages/shop.js'
import Card from './pages/card.js'
import City from './pages/city-list.js'
import Details from './common/details.js'
import './css/style.css'

import Silderbar from './common/Silderbar.js'
import Appheader from './common/Appheader.js'
export default class App extends Component{
	 constructor({history}){
	 	super();
	 	this.state={
			 showbar:false,
			 history,
			 headerdata:'卖座网'
	 	}
	 }
	
	render(){
		let showcover={
				transfrom:this.state.showbar ? "display:'none'":"display:'black' "
		}
		
		return (
			<BrowserRouter>
				<div>
					{/* <Silderbar showbar={this.state.showbar}/> */}
					<Appheader menuHandle={this.menuHandle.bind(this)} headerdata={this.state.headerdata}/>
					<Route path='/' render={({history,location})=>{						
						return (
								<Silderbar showbar={this.state.showbar}								
								hideHandle={this.menuHandle.bind(this)}
								history={history}
								headerdata={location}
								shopheaderdata={location.pathname}
						/>	
						)	
					}}/>						
					<Route path='/' exact component={Home}/>
					<Route path='/movies' component={Movies}/>
					<Route path='/cinema' component={Cinema}/>
					<Route path='/shop' component={Shop}/>
					<Route path='/me' component={Me}/>
					<Route path='/card' component={Card}/>					
					<Route path='/city' component={City}/>		
					<Route path='/details/:id' component={Details}/>					
								
				</div>	
				
			</BrowserRouter>
		)		
	}
	menuHandle(headerdata){
		this.setState({showbar:!this.state.showbar})
		console.log(headerdata)
		this.state.headerdata=headerdata
		if(headerdata){
		this.setState({headerdata:this.state.headerdata})

		}

	}
}
