import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/city.css'
import homeBanner from '../services/homeserver.js'

 var myScroll=null;
export default class City extends Component{
	constructor({history}){
        super();
        this.state={
            history,
            className:'',
            citydata:[],
            letterWords:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            city:[]
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
                    <div  class={'page '+ this.state.className} id='city' >
                        <div class='wrap'>
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
                                
                                    {this.state.letterWords.map((item,index)=>{
                                        return (
                                            <li key={index}  onClick={this.jumpto.bind(this,index)}>{item}</li>
                                        )
                                    })}
                             </div>

                        </div>
                        <div class='city-list-view'>
                                    {this.state.letterWords.map((item,index0)=>{
                                      return (
                                        <div> 
                                          <div ref={index0+'words'} class='letterWords' key={index0}>{item}</div>
                                         <ul>
                                            {this.state.citydata.map((i,index1)=>{
                                                if(i.pinyin.indexOf(item)==0){
                                                   return (  
                                                            <li key={index1}>{i.name}</li>                                                       
                                                   )
                                                }     
                                           })} 
                                           </ul>
                                        </div>
                                      )
                                       
                                    })}    
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
    jumpto(index){
        console.log(index)
        var words=this.refs[index+'words'];
        var scrollTop=words.offsetTop;
        console.log(scrollTop)
        console.log(words)
         myScroll.scrollTo(0,-scrollTop,500)
         myScroll.refresh()
    }

    componentWillMount() {
        homeBanner.cityData()
        .then((data)=>{
            console.log(data) 
            this.setState({citydata:data})
            
        })

    }

    componentDidMount(){
        myScroll = new IScroll('#city',{
             scrollbars: true,
             mouseWheel: true
             
        });
        myScroll.refresh()
    }

 	
}
