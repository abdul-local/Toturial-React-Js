import React, { Component } from 'react'
import './Lifecycle.css'
export default class Lifecycle extends Component {
    constructor(props){
        super(props);

        this.state={
            count:1

        }

        console.log('constructor');

    }

    componentDidMount(){
        console.log('componentDidMount');

        this.setState({
            count:this.state.count+1
        })

    }

    

    shouldComponentUpdate(nextProps,nextState){

        console.group('shouldComponentUpdate')
        console.log('nextProps: ',nextProps);
        console.log('nextState: ',nextState);
        console.groupEnd()

        if (nextState.count >=6){
            return false;
        }
        return true;

    }


    componentDidUpdate(){
        console.log('componentDidUpdate');
        // setTimeout(()=>{
        //     console.log('waiting 5 seconds');
        //     this.setState({
        //         count:this.state.count+2
        //     })
        // },5000)
        

    }

    componentWillUnmount(){
        console.log('componentWillUnmount');


    }

    onChangeCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
   
    render() {
        console.log(this.state.count)
        
        return (
            <div className='wrapper-app'>

             <button className='btn' onClick={this.onChangeCount}>Component Button  {this.state.count}</button>
                
            </div>
        )
    }
}
