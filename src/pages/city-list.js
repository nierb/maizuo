import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class City extends Component{
	constructor({history}){
        super();
        this.state={
            history,
            className:''
           
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
                        <button onClick={this.back.bind(this,'北京')}>北京</button>
                        <button onClick={this.back.bind(this,'上海')}>上海</button>
                        <button onClick={this.back.bind(this,'广州')}>广州</button>
                        <button onClick={this.back.bind(this,'深圳')}>深圳</button>


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
 	
}
