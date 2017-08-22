import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/city.css'
import homeBanner from '../services/homeserver.js'

export default class City extends Component{
	constructor({history}){
        super();
        this.state={
            history,
            className:'',
            citydata:[]
           
        }
    }
	render(){
		return (
			<div>
                <ReactCSSTransitionGroup
                transitionName="sildedown"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
                >
                    <div class={'page '+ this.state.className} id='city'>
                        <div class='city-gprs'>
                             <div class='city-index-title'>GPS定位你所在城市</div>
                             <div class='city-index-detail'>
                                <ul>
                                    <li>深圳</li>
                                </ul>
                            </div>   
                        </div>

                        <div class='hot-city'>
                             <div class='city-index-title'>热门城市</div>
                             <div class='city-index-detail'>
                                <ul>
                                    <li onClick={this.back.bind(this,'深圳')}>深圳</li>
                                    <li onClick={this.back.bind(this,'上海')}>上海</li>
                                    <li onClick={this.back.bind(this,'广州')}>广州</li>
                                    <li onClick={this.back.bind(this,'北京')}>北京</li>
                                </ul>
                            </div>   

                        </div>
                        <div class='sort-data'>
                            <div class='city-index-title'>按字母排序</div>
                            <div class='city-index-detail'>
                                <ul>
                                    
                                    
                                </ul>
                            </div>
                            
                            

                        </div>
                    </div>
                </ReactCSSTransitionGroup>
			</div>			
		)		
    }
    back(cityname){
        console.log(cityname)
        this.setState({className:'leave'})
        setTimeout(()=> {
        this.state.history.go(-1)            
        }, 400);
    }

    componentWillMount() {
        homeBanner.cityData()
        .then((data)=>{
            console.log(data) 
            this.setState({citydata:data})
            
        })

    }

 	
}
