import React from 'react';
import Modal from 'react-modal';
import TodoList from '../components/to-do-list';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '200px'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class CustomModal extends React.Component {
  constructor() {
    super();

    this.state = {
      newTodo: '',
      categories: ['category','My Day','Important','Planned'],
      selectCategory : '',
      todos: JSON.parse(localStorage.getItem('save_todos')) || [],
      modalIsOpen: false
    };

  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  newTodochange = ({ target }) => {
    const { value } = target;
    const newTodo = value.trimLeft();
    this.setState({
      newTodo: newTodo
    });
  }
  Category = (event) => {
    console.log(event.target.value,"aa");
      this.setState({
        selectCategory : event.target.value
      })
  }
  saveTolocal = () => {
    const { todos, newTodo } = this.state;
    localStorage.setItem('save_todos', JSON.stringify(todos, newTodo));

  }

  formSubmitted = (event) => {
    event.preventDefault();
    this.setState({
      newTodo: '',
      selectCategory : '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        category : this.state.selectCategory,
        done: false
      }]
    },
      this.saveTolocal
    );
  }
  
  
  // editTodo = (event, index)=> {
  //     event.preventDefault();
  //     const todo = [...this.state.todos];
  //     todo[index] = todo.index.map((todo) => {
  //         return todo
  //     })
  // }
  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    localStorage.setItem('save_todos', JSON.stringify(todos))
    this.setState({
      todos
    })
  }
  toogletodo = ({ target }, index) => {
    const { checked } = target;
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: checked
    }
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}
          toogletodo={this.toogletodo}
          removeTodo={this.removeTodo}
          openModal={this.openModal}
        // editTodo = {this.editTodo} 
        />
        <p type="button" style={{ color: 'blue', marginTop: '-16px' }} className="list-group-item" onClick={this.openModal}><i className="fa fa-plus"></i> Add A Task</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <span style={{ marginRight: '406px', color: '#f00' }}>Hello</span>
          <i className="fa fa-close" onClick={this.closeModal}></i>
          <form onSubmit={this.formSubmitted}>
            <label htmlFor="newTodo"></label>
            <textarea onChange={this.newTodochange} id="newTodo" name="newTodo" value={this.state.newTodo} style={{ width: '450px', height: '83px', marginTop: '13px' }} placeholder="Add A Title..." autoFocus />
            <select onChange={(event) =>this.Category(event)} value={this.state.selectCategory}>
              {this.state.categories.map((category,index) =>
              <option key={index} value={category}>{category}</option>
              )} 
              
            </select>
            <button type="submit" id="button" disabled={!this.state.newTodo} style={{ marginLeft: '405px' }}>Add</button>
          </form>
        </Modal>
      </div>
    );
  }
}
export default CustomModal;
