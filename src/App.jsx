import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useState } from 'react';

const initialStateTodos = [
  { id: 1, title: 'Complete online Javascript Curse', completed: true },
  { id: 2, title: 'Goto to the gym', completed: false },
  { id: 3, title: '10 minutes meditation', completed: false },
  { id: 4, title: 'Pick up groceries', completed: false },
  {
    id: 5,
    title: 'Complete todo and app on Frontend Mentor',
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState('All');

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')]
          bg-no-repeat bg-contain min-h-screen bg-gray-300"
    >
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos()}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter
          changeFilter={changeFilter}
          filter={filter}
        />
      </main>

      <footer className=" text-center mt-8">
        Drag and drop to reader list
      </footer>
    </div>
  );
};

export default App;
