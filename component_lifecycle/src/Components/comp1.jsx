import React, {Component} from "react"
class CompInner extends Component{
    constructor(props){
        super(props)

    }
    componentWillUnmount(){
        console.log("Original innerComp was unmounted")
    }
    render(){
        console.log("rendering Original innerComp")
        return (
            <h2>Original Comp</h2>
        )
    }
}


class Comp1 extends Component{
    constructor(props){
        super(props)
        console.log("Inside Constructor")
        this.state = {counter: 0, compInner: <CompInner/>}


    }
    componentDidMount = () => {
        console.log("ComponentMounted")
    }

    incrementCounter = ()=>{
        this.setState({counter: this.state.counter + 1})
        //if (this.state.counter == 5){                            //do not use here as .setState() is async and the if in the next line may read the old value, instead check after update utilising the componentDidUpdate()
        //    this.setState({compInner: <h2>Inner Changed</h2>})
        //}
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate ?")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("snapshot before update")
        console.log("counter before update: " + prevState.counter)
        console.log("counter now: " + this.state.counter)
        return prevState
    }

    componentDidUpdate(prevProps, prevState){     //getSnapshotBeforeUpdate returned a value, componentDidUpdate can get two parameters
        console.log("componentUpdated")
        if (this.state.counter == 5 && prevState.counter != this.state.counter){   //as state is being changed inside the componentDidUpdate, infinite loop can occur, to prevent it, counter is checked as it reamin constant in the infinite loop
            this.setState({compInner: <h2>Changed</h2>})
        }

    }
    render(){
        console.log("rendering module")
        return (
            <>
                <p>Hello</p>
                <button onClick={this.incrementCounter}>{this.state.counter}</button>
                {this.state.compInner}
                
            </>
        )
    }
}
export default Comp1