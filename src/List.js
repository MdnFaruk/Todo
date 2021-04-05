import React, { Component } from 'react'
import Form from './Form'
import uuid from 'react-uuid'
import { Todo } from './Todo'
import Row from './Row'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = { todos: [] }
  }

  addToList = (title, description) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, new Todo(title, description)]
    }))
  }

  render () {
    return (
      <div className='container'>
        <h3>Todos</h3>
        <Form add={this.addToList} />
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(item => (
              <Row
                key={uuid()}
                title={item.title}
                description={item.description}
                update={item.update}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
