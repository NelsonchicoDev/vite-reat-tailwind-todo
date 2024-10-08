import IconCross from './icons/IconCross';
import IconCheck from './icons/IconCheck';
import React from 'react';

const TodoItem = React.forwardRef(
  ({ todo, updateTodo, removeTodo, ...props }, ref) => {
    const { id, title, completed } = todo;
    return (
      <article
        {...props}
        ref={ref}
        className=" flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 "
      >
        {/* <button className="rounded-full border-2 h-5 w-5 inline-block flex-none">
        <IconCheck />
      </button>  Alt + 96 `` ```````` */}

        <button
          className={`rounded-full border-2 h-5 w-5 flex-none ${
            completed
              ? ' grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
              : 'inline-block '
          } `}
          onClick={() => updateTodo(id)}
        >
          {completed && <IconCheck />}
        </button>
        <p
          className={`text-gray-600 grow dark:text-gray-400  ${completed && ' line-through '}`}
        >
          {title}
        </p>
        <button
          className=" flex-none"
          onClick={() => removeTodo(id)}
        >
          <IconCross />
        </button>
      </article>
    );
  }
);

export default TodoItem;
