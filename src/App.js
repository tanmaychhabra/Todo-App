import React from "react";
import logo from './logo.svg';
import './App.css';
import Todo from './Container/Todo'

/**
 * {
 *  "id": number,
 *  value: string
 */

class App extends React.Component {

  state = {
    todoList: [],
    currentTodo: ""
  }

  onChange = (event) => {
    // console.log(event.target.name, event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  onAddTodo = () => {
    if (!this.state.currentTodo){
      return;
    }    
    const tempTodoList = [...this.state.todoList, { id: this.state.todoList.length, value: this.state.currentTodo }]

    this.setState({
      todoList: tempTodoList,
      currentTodo: ""
    });
  }

  render(){

    return (
      <div className="App">
        <input name="currentTodo" value={this.state.currentTodo} onChange={this.onChange} />
        <button onClick={this.onAddTodo} disabled={!this.state.currentTodo}>Add Todo</button>

        {
          this.state.todoList.map((item, idx) =>  <Todo key={item.id} id={item.id + 1} value={item.value}/>)
        }
      </div>
    )
  }

}


// function App() {



//   return (
//     <div className="App">
//       <Todo/>
//     </div>
//   );
// }

export default App;
