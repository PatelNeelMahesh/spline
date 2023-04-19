import { PureComponent } from "react";

export default class SimpleCounterComponent extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            toggle:false,
            value: 0
        }
    }

    handleToggle = () => {
        this.setState({
            toggle:this.state.toggle===false?true:false
        })
    }

    handleCounter = () => {
        if(this.state.toggle===true){
            // value +1 
            this.setState({
                value:this.state.value + 1
            })
        }
        else{
            // value
            this.setState({
                value:this.state.value
            })
        }
    }

render(){
    console.log("This is Pure Component")

    return(
        <div>
            <h1>Pure Component</h1>
            <h3>{this.state.value}</h3>
            <button onClick={this.handleToggle}>Set Toggle</button>
            <button onClick={this.handleCounter}>Counter</button>
        </div>
    )
}
}