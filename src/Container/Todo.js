import React , {Component} from 'react'
import Button from '../Component/Button'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        this.inputRef = React.createRef()
    }

     componentDidMount(){
         this.inputRef.current.focus()
     }

    inputChangeHandler = (event) =>{
        this.setState({
            value: event.target.value
        })
    }
    render(){
        return(
            <div>
            <div>
            <input type = "textarea" placeholder = "Add a new Todo" value = {this.state.value} onChange = {this.inputChangeHandler} ref = {this.inputRef}></input>
            </div>
            <Button task = {this.state.value}/>
            </div>
        )
    }
}

export default Todo