import './todo-list.scss';

import React from 'react';
import Todo from '../../models/todo';
import TotoItem from './TodoItem';

export interface TodoListInterface {
  todoList: Array<Todo>;
  handleUpdateTodoStatus: (todo: Todo, checked: boolean) => void;
  handleUpdateTodoContent: (todo: Todo, content: string) => void;
  handleDeleteTodo: (todoId: string) => void;
}

const TodoList = (props: TodoListInterface) => {
  const {
    handleUpdateTodoStatus,
    todoList,
    handleUpdateTodoContent,
    handleDeleteTodo,
  } = props;

  return (
    <div className="todo__list">
      {todoList.length === 0 ? (
        <span data-test="nothing-to-do">You dont have anything to do</span>
      ) : (
        todoList.map((todo) => {
          return (
            <TotoItem
              data-test="todo-item"
              key={todo.id}
              todo={todo}
              handleUpdateTodoStatus={handleUpdateTodoStatus}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodoContent={handleUpdateTodoContent}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;