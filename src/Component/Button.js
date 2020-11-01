import { render } from "@testing-library/react";

import React, {Component} from 'react'

class Button extends Component {
    
    state = {
        showList: false,
        list : []
    }
      clickHandler = (event) => {

        const tempState = [...this.state.list, event.target.value];

       this.setState({
           showList: true,
           list : tempState
       })
    }
    render(){
        console.log(this.state.list, typeof this.state.list)
        // if(this.state.showList){
        //    list = this.props.task
        // }
        return(
            <div>
                <button onClick = {this.clickHandler}>Click to add the todo</button>
                    {this.state.list.map((item, idx) => <p key={idx}>{item}</p>)}
                </div>
        )
    }
    
    
}

export default Button;