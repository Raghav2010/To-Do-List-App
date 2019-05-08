import React from 'react';
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const TodoList = (props) => {
    // const { newTodo } = this.props;
    // const editTodo = (event,index) => {
    //     props.openModal();
    // }
    const changecolor = () => {
        
    }
    return (
        // <ul className="list-group">
        //     {props.todos.map((todo, index) => {
        //         return (<li key={todo.title} className="list-group-item">
        //             <input type="radio" className="radio" onChange={(event) => props.toogletodo(event, index)} checked={todo.done} style={{height :'20px', width :'20px'}}></input>
        //             <span className={todo.done ? 'done' : ''} style= {{marginRight : '82%'}} >{todo.title}</span>
        //             <i className="fa fa-fw fa-lg fa-star-o" onClick={()=>changecolor()}></i>
        //             {/* <i className="fa fa-close" onClick={(event) => props.removeTodo(event,index)}></i> */}
        //             <i class="far fa-heart"></i>
        //         </li>
        //         )
        //     })}
        // </ul>
        <table className="table">
              <thead>
              </thead>
        {props.todos && props.todos.map((todo, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td><input type="radio" className="checkbox" onChange={(event) => props.toogletodo(event,index)} checked={todo.done} style={{height :'20px', width :'20px'}}/>
                  <span className={todo.done ? 'done' : ''} style={{marginLeft:'15px'}}>{todo.title}</span>
                  <p>{todo.category}</p></td>
                  <td style={{width:'80px'}}> <i className="fa fa-fw fa-lg fa-star-o" onClick={()=>changecolor()}></i>
                  <i className="fa fa-close" onClick ={() => props.removeTodo(index)}></i>
                  </td>
                </tr>
              </tbody>
              )
              })}
        </table> 
    )
}
export default TodoList;