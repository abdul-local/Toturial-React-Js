
// lebih ke kelas component

// import React, { Component } from 'react'

// export default class Hooks extends Component {

//     state={
//         count:0
//     }

//     componentDidMount(){
//         document.title=`Title Change: ${this.state.count}`;


//     }

//     componentDidUpdate(){

//         document.title=`Title Change: ${this.state.count}`;

//     }
    

//     jumlah(){
//         this.setState({
//             count:this.state.count+1
//         })
        
//     }
//     componentWillUnmount(){
//         document.title="React Jj App"
//     }


//     render() {
//         return (

//           <div>
//           <h1> value count: {this.state.count}</h1>
//            <button onClick={()=>this.jumlah()}>counter</button>
//           </div>
//         )
//     }
// }





import React,{useState,useEffect}from 'react'

 
function Hooks() {

    const [count, setCount] = useState(0);

    // component yang dimiliki disini componentdidmount dan component didupdate
    useEffect(()=>{

        document.title=`this state Change: ${count}`;

        // componentUnwillmount
        return ()=>{

            document.title="reat js App"

        }


    })

    
   

    const jumlah=()=>{
        if (count>=0){
            setCount(count+1)
        }
    }

    const minus=()=>{
        if (count>0){
            setCount(count-1)
        }
    }


    
    return (
      
        <div>
            <h1> value count: {count}</h1>

            <button onClick={()=>jumlah()}>counter</button>

            <button onClick={()=>minus()}>minus</button>

        </div>
        );
    
}

export default Hooks
