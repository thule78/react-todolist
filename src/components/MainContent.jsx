import React, { Component } from 'react'

import todosData from './TodoData'
import TodoItem from './TodoItem'

class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      todos : todosData
    }

    this.handleChanged = this.handleChanged.bind(this)
  }

  handleChanged(id) {
    this.setState(prevState =>{
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render(){
    const date = new Date()
    const yyyy =  date.getFullYear()
    const mm = ("0"+(date.getMonth()+1)).slice(-2)
    const dd = ("0"+date.getDate()).slice(-2)
    const getdate = dd+'-'+mm+'-'+yyyy
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12){
      timeOfDay = "Morning"
    } else if (hours >=12 && hours < 17){
      timeOfDay = "Afternoon"
    }else {
      timeOfDay = "Evening"
    }
    const todoItems =this.state.todos.map((item)=>{
      return(
        <TodoItem key={item.id} item={item} handleChanged={this.handleChanged} />
        )
    })

    return(
      <div>
        <div>
          <p>Today: {`${getdate}`}</p>
          <h3>Your todo list of this {`${timeOfDay}`}</h3>
        </div>
        <div>
          {todoItems}
        </div>
      </div>

      )
  }

}

export default MainContent
