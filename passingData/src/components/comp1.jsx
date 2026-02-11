import React, {Component} from "react"

class Outer extends Component{
    constructor(props){
        super(props)
        this.state = {color: "green"}
        //this.props.color = this.state.color    //creating a property named color, in th parent
        this.func1 = (data) => {  
            console.log(data)
        }
    }
    render(){
        return (
            <Inner ParentCallback = {this.func1} color = {this.state.color}/>    //calling the function with an argument which matches the parentCallback argument, which in turn prints the data from the inner , also similarly passing a property here will reflect in the original inner component props, there we have printed this prop
        )
    }
}
export default Outer

class Inner extends Component{
    constructor(props){
        super(props)
        console.log(this.props.color) //same props can be used to access the data from the parent to the child
        this.state = {data1: 0, data2: 2}
        this.props.ParentCallback(this.state)   //created a property of Inner Component called ParentCallback which is a function with a parameter that shares the state
    }
    render(){
        return (
            <div></div>
        )
    }
}