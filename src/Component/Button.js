import { render } from "@testing-library/react";

import React, {Component} from 'react'

class Button extends Component {
    
    state = {
        showList: false,
        list : []
    }
      clickHandler = (event) => {
       this.setState({
           showList: true,
           list : this.state.list.push(this.props.task)
       })
       
    }
    render(){
        
        // if(this.state.showList){
        //    list = this.props.task
        // }
        return(
            <div>
                <button onClick = {this.clickHandler}>Click to add the todo</button>
                {this.state.list}
                </div>
        )
    }
    
    
}

export default Button;