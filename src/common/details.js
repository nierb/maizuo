import React,{Component} from 'react'
import homeBanner from '../services/homeserver.js'
import '../css/details.css'

export default class Shop extends Component{
	constructor({history}){
        super();
        this.state={
            detailData:{},
            history,
            id:''
            
        }
    }
	render(){
        
		return (
			<div>
				<div class='page' id='details'>
                    <div class='contains'>
                        <div class='img'>
                            <img src={this.state.detailData.pathimg} alt=""/>
                        </div>
                        <div class='detailtext'>
                             <h1>影片简介</h1> 
                             <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演: {this.state.detailData.director}</p>
                             <p>演&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员: {this.state.detailData.actors} </p>
                             <p>地区语言:{this.state.detailData.nation}({this.state.detailData.language})</p>
                             <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型: {this.state.detailData.category}</p>
                             <p>上映时间:{this.state.detailData.premiereAt}月{this.state.detailData.premiereAt1}日</p>
                             <h2>{this.state.detailData.synopsis}</h2>
                        </div>
                        <button>立刻购票</button>
                           
				    </div>
                </div>  
			</div>			
		)		
    }
    
    componentWillMount() {
        console.log(this.state.history.location.state.id)
        homeBanner.detailsData(this.state.history.location.state.id)
        .then((data)=>{
         //  console.log(data)
            this.setState({detailData:data})
            console.log(this.state.detailData)
           
        })
    }
}
