import { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    //console.log(title);

    if (!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className=" overflow-hidden rounded-md bg-white py-4 px-4 flex gap-4 items-center mt-8"
    >
      <span className=" rounded-full border-2 h-5 w-5 inline-block"></span>
      <input
        className=" w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new todo...."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
