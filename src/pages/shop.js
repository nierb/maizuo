import React,{Component} from 'react'
import homeBanner from '../services/homeserver.js'
import '../css/shop.css'
var mySwiper =null;
export default class Shop extends Component{
	constructor(){
		super();
		this.state={
			data:[],
			data1:[],
			data2:[],
			data3:[],
			buttomdata:[]
		}
	}
	render(){
		return (
			<div>
				<div class='page' id='shop'>
					<div class="swiper-container">
					<div class="swiper-wrapper">
					{this.state.data1.map((item,index)=>{
						return (
							<div class="swiper-slide" key={index}>
								<img src={item.imageSrc} />
							</div>
						)
					})}
					 </div>
					</div>
					<div class='shops'>
						{this.state.data.map((item,index)=>{
							return (
								<li key={index}>
										<a href={item.url}><img src={item.imageSrc} alt=""/></a>
										<span>{item.name}</span>
								</li>
							)
						})}

					</div>
					<div class='active'>
							{this.state.data2.map((item,index)=>{
								return (
									<li key={index}>
										<img src={item.imageSrc} />
									</li>
								)
							})}
					</div>

					<div class='smallware'>
							 {this.state.data3.map((item,index)=>{
								 return (
									 <div class='contains' key={index}>
										<div class='title-img'>
											<img src={item.imageSrc} />
										</div>
										<div class='pic-list'>
										{item.products.map((i,index)=>{
											return (																							
												<div key={index} class='list'>
													<img src={i.image}/>
													<h1>{i.name}</h1>	
													<p>{parseInt(i.price)/100}.00</p>													
												</div>																									
											)
										})}
											<div class='all-list'><a href={item.url}>全部</a></div>
										</div>
									 </div>
								 )
							 })}
					</div>
					<div class='shop-butttom'>
						<div class='contains'>
							<div class='title'>- 好货精选 -</div>
							<div class='indexs'>								
							 	{this.state.buttomdata.map((item,index)=>{
									 return (
										 <div key={index} class='box' >
											<li class='name'>
												<span>{item.masterName}</span>
												 <p>
												 <span>{item.maxPrice}</span>
												 <span>{item.displaySalesCount}</span>
												 </p>

												 {item.skuList.map((i,index)=>{
													return <img src={i.image} key={index}/>	
										 		})}
											</li>
										 </div>
									 )
								 })}								
							</div>
						</div>	 
					</div>		 
					
				</div>
			</div>			
		)		
	}	

	componentWillMount(){
		homeBanner.shopData()
		.then((data)=>{
			//轮播数据
			this.setState({data1:data.slice(8,10)})	
			this.state.data1.unshift(this.state.data1[1])
			this.state.data1.push(this.state.data1[1])
			//商品数据
			this.setState({data:data.slice(0,8)})		           
			//两张卡
			this.setState({data2:data.slice(10,12)})
			//小商品
			this.setState({data3:data.slice(12,data.length)})		
			mySwiper.update();
			mySwiper.slideTo(1)
		})

		homeBanner.homeData()
		.then((data)=>{
			console.log(data)
			this.setState({buttomdata:data})
		})	
		
	}
	componentDidMount(){
		 mySwiper = new Swiper ('.swiper-container', {  
			loop: true,
			
		})  
	}
}
