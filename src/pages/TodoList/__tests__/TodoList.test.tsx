import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../../test/testUtils';

import React from 'react';
import Todo from '../../../models/todo';
import { TodoStatus } from '../../../constants/todo';
import TodoList from '..';

const initialTodoList = [
  new Todo(
    '1',
    'newUser',
    'New todo 1',
    new Date().toUTCString(),
    TodoStatus.ACTIVE
  ),
  new Todo(
    '2',
    'newUser',
    'New todo 2',
    new Date().toUTCString(),
    TodoStatus.ACTIVE
  ),
  new Todo(
    '3',
    'newUser',
    'Completed todo',
    new Date().toUTCString(),
    TodoStatus.COMPLETED
  ),
];

describe('Test render empty todo list', () => {
  test('will render text nothing to do if todo list is empty', () => {
    let component = shallow(
      <TodoList
        todoList={[]}
        handleUpdateTodoStatus={() => null}
        handleUpdateTodoContent={() => null}
        handleDeleteTodo={() => null}
      />
    );
    expect(findByTestAttribute(component, 'nothing-to-do').exists()).toEqual(
      true
    );
  });
});

describe('Test render todo list', () => {
  test('will render todo list if to do list is not empty', () => {
    let component = shallow(
      <TodoList
        todoList={initialTodoList}
        handleUpdateTodoStatus={() => null}
        handleUpdateTodoContent={() => null}
        handleDeleteTodo={() => null}
      />
    );
    expect(findByTestAttribute(component, 'todo-item').length).toEqual(
      initialTodoList.length
    );
  });
});

describe('Test render scroll todo list', () => {
  let component = shallow(
    <TodoList
      todoList={[...initialTodoList, ...initialTodoList]}
      handleUpdateTodoStatus={() => null}
      handleUpdateTodoContent={() => null}
      handleDeleteTodo={() => null}
    />
  );
  it('Will render class scroll todo list if item > 5', () => {
    expect(
      component.find('[data-test="todo-list"]').hasClass('todo__list-scroll')
    ).toEqual(true);
  });
});

describe('Test will not render class scroll todo list', () => {
  let component = shallow(
    <TodoList
      todoList={initialTodoList}
      handleUpdateTodoStatus={() => null}
      handleUpdateTodoContent={() => null}
      handleDeleteTodo={() => null}
    />
  );
  it('Will not render class scroll todo list if items < 5', () => {
    expect(
      component.find('[data-test="todo-list"]').hasClass('todo__list-scroll')
    ).toEqual(false);
  });
});
