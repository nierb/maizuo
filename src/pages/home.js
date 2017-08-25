import React, { Component } from 'react'
import homeBanner from '../services/homeserver.js'
import '../css/home.css'
import {Link} from 'react-router-dom'

var myScroll=null;

var bannerSweiper = null;

export default class Home extends Component {
	constructor({ history }) {
		super();
		this.state = {
			bannerData: [],
			nowPlaydata: [],
			comingSoonData: [],
			history

		}
	}
	render() {
		return (
			<div>
				<div class='page' id='home' ref="box">
					<div class="wrap">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								{this.state.bannerData.map((item, index) => {
									return (
										<div class="swiper-slide" key={index}><img src={item.imageUrl} /></div>
									)
								})}
							</div>
						</div>
						<div class='main-container'>
							<ul>
								{this.state.nowPlaydata.map((item, index) => {
									return (
										<Link to={{
											pathname:'/details/'+item.id,	
											state:{
												id:item.id
											}
										}} key={index}>
											<img src={item.cover.origin} />
											<div class='main-c'>
												<div class='main-c-left'>
													<h1>{item.name}</h1>
													<p>{item.cinemaCount}家影院上影{item.watchCount}人购票</p>
												</div>
												<div class='main-c-right'>
													{item.grade}
												</div>
											</div>
										</Link>
									)
								})}
								<div class='movefile' onClick={this.btnToNowPlay.bind(this)}>更多热映电影</div>
							</ul>

							<ul class='container_wiilgo'>
								<div class='line-dd'>
									<div class="upcoming">即将上映</div>
								</div>

								<div class='move'>
									<ul>
										{this.state.comingSoonData.map((item, index) => {
											return (
												<Link  to={{
														pathname:'/details/'+item.id,	
														state:{
														id:item.id
													}
												}} key={index}>
													<img src={item.cover.origin} />
													<div class='main-c'>
														<div class='main-c-left'>
															<h1>{item.name}</h1>
														</div>
														<div class='main-c-right'>
															{item.grade}
														</div>
													</div>

												</Link>
											)

										})}

									</ul>
									<div class='movefile' onClick={this.movefile.bind(this)}>更多即将上映电影</div>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
	btnToNowPlay() {

		this.state.history.push('/movies')
	}
	movefile(){
		this.state.history.push('/movies')
		
	}


	componentWillMount() {

		homeBanner.getHomeBanner()
			.then((data) => {
				data.splice(0, 0, data[data.length - 1])
				data.push(data[1])
				this.setState({ bannerData: data })
				bannerSweiper.update();
				bannerSweiper.slideTo(1)
			})

		homeBanner.getNowPlayingData()
			.then((data) => {
				this.setState({ nowPlaydata: data })
				//console.log(data)
			})

		homeBanner.comingSoon()
			.then((data) => {
				this.setState({ comingSoonData: data })

			})
	}


	componentDidMount() {
		bannerSweiper = new Swiper('.swiper-container', {
			loop: true
		});

		 myScroll = new IScroll(this.refs.box,{
             scrollbars: true
        });
		 myScroll.refresh()
	}

}
